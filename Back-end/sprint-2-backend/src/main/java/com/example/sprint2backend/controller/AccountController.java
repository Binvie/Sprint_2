package com.example.sprint2backend.controller;

import com.example.sprint2backend.config.JwtTokenUtil;
import com.example.sprint2backend.dto.Login;
import com.example.sprint2backend.model.account.Account;
import com.example.sprint2backend.model.account.JwtResponse;
import com.example.sprint2backend.model.auth.MyUserDetail;
import com.example.sprint2backend.service.ICartService;
import com.example.sprint2backend.service.IOrderDetailService;
import com.example.sprint2backend.service.IOrderService;
import com.example.sprint2backend.service.account.IAccountsService;
import com.example.sprint2backend.service.account.MyUserDetailService;
import com.example.sprint2backend.service.product.IFruitService;
import com.example.sprint2backend.service.product.IFruitTypeService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class AccountController {
    @Autowired
    private MyUserDetailService myUserDetailService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtUtils;
    @Autowired
    private IAccountsService accountsService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody Login login, BindingResult bindingResult) {
        Map<String, String> errors = new HashMap<>();
        if (bindingResult.hasErrors()) {
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>("Thông tin đăng nhập không chính xác.", HttpStatus.UNAUTHORIZED);
        }
        try {
            myUserDetailService.loadUserByUsername(login.getUsername());
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(login.getUsername(), login.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            MyUserDetail myUserDetail = (MyUserDetail) authentication.getPrincipal();
            // Tạo đối tượng để trả về
            JwtResponse jwtResponse = new JwtResponse();
            BeanUtils.copyProperties(myUserDetail.getAccount(), jwtResponse);
            // Create Token cho đối tượng trả về;
            String jwt = jwtUtils.createToken((MyUserDetail) authentication.getPrincipal());
            jwtResponse.setAccessToken(jwt);
            // Lấy ra name Role trả về
            List<String> roles = myUserDetail.getAuthorities().stream()
                    .map(item -> item.getAuthority())
                    .collect(Collectors.toList());
            jwtResponse.setRoles(roles);
            return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
        } catch (UsernameNotFoundException | BadCredentialsException e) {
            return new ResponseEntity<>("Thông tin đăng nhập không chính xác.", HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi" + e, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/account/{username}")
    public ResponseEntity<?> getAccount(@PathVariable String username) {
        Account account = accountsService.findByUsername(username);
        if (account != null) {
            return new ResponseEntity<>(account, HttpStatus.OK);
        }
        return new ResponseEntity<>("Không tìm thấy account.", HttpStatus.NOT_FOUND);
    }

}
