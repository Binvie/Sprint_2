package com.example.demo_configjwt.controller;

import com.example.demo_configjwt.dto.AccountDto;
import com.example.demo_configjwt.dto.RespondMessage;
import com.example.demo_configjwt.security.jwt.JwtProvider;
import com.example.demo_configjwt.security.userPrinciple.UserPrinciple;
import com.example.demo_configjwt.service.AccountService;
import com.example.demo_configjwt.service.RoleService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RequestMapping("/api/auth")
@RestController
@CrossOrigin(origins = "*")
public class AuthController {
    @Autowired
    AccountService accountService;
    @Autowired
    RoleService roleService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/signup")
    public ResponseEntity<?> register(@Valid @RequestBody AccountDto accountDto) {
        if (accountService.existsAccountsByUsername(accountDto.getUsername())) {
            return new ResponseEntity<>(new RespondMessage("no user"), HttpStatus.OK);
        }
        if (accountService.existsAccountsByEmail(accountDto.getEmail())) {
            return new ResponseEntity<>(new RespondMessage("no email"), HttpStatus.OK);
        }
        Accounts accounts = new Accounts(accountDto.getName(), accountDto.getUsername(), passwordEncoder.encode(accountDto.getPassword()),
                accountDto.getEmail(), accountDto.getAddress(), 0, accountDto.getRoles());
        Set<String> strRoles = AccountDto.;
        Set<Roles> roles = new HashSet<>();
        strRoles.forEach(role -> {
            switch (role) {
                case "admin":
                    Roles adminRole = roleService.findByName(RoleName.ADMIN).orElseThrow(
                            () -> new RuntimeException("Role not found")
                    );
                    roles.add(adminRole);
                    break;
                case "pm":
                    Roles pmRole = roleService.findByName(RoleName.PM).orElseThrow(() -> new RuntimeException("Role not found"));
                    roles.add(pmRole);
                    break;
                default:
                    Roles userRole = roleService.findByName(RoleName.USER).orElseThrow(() -> new RuntimeException("Role not found"));
                    roles.add(userRole);
            }
        });
        accountDto.setRoles(roles);
        accountService.save(accounts);
        return new ResponseEntity<>(new RespondMessage("yes"), HttpStatus.OK);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> login(@Valid @RequestBody AccountDto accountDto    ) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(accountDto.getUsername(), accountDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.createToken(authentication);
        UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
        return ResponseEntity.ok(new JwtResponse(token, userPrinciple.getName(), userPrinciple.getAuthorities()));
    }
}
