package com.example.sprint2backend.controller;

import com.example.sprint2backend.service.*;
import com.example.sprint2backend.service.account.IAccountsService;
import com.example.sprint2backend.service.product.IFruitService;
import com.example.sprint2backend.service.product.IFruitTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private ICartService cartService;

    @Autowired
    private IOrderService orderService;

    @Autowired
    private IOrderDetailService orderDetailService;

    @Autowired
    private IFruitService fruitService;

    @Autowired
    private IFruitTypeService fruitTypeService;

    @Autowired
    private IAccountsService accountsService;

    @GetMapping("/{userId}")
    public ResponseEntity<?> getCart(@PathVariable int userId ) {
        
        return void;
    }

}
