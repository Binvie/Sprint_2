package com.example.sprint2backend.controller;

import com.example.sprint2backend.dto.ICartDto;
import com.example.sprint2backend.model.Cart;
import com.example.sprint2backend.model.account.Account;
import com.example.sprint2backend.model.product.Fruits;
import com.example.sprint2backend.service.*;
import com.example.sprint2backend.service.account.IAccountsService;
import com.example.sprint2backend.service.product.IFruitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private ICartService cartService;

    @Autowired
    private IFruitService fruitService;

    @Autowired
    private IAccountsService accountsService;

    @GetMapping("/{accountId}")
    public ResponseEntity<List<ICartDto>> getCart(@PathVariable int accountId) {
        List<ICartDto> cartDtoList = cartService.getCartDetailsByUserId(accountId);
        if (cartDtoList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(cartDtoList, HttpStatus.OK);
    }


    @GetMapping("/{userId}/{productId}/{quantity}")
    public ResponseEntity<?> addNewProductToCart(
            @PathVariable(name = "userId") Integer userId,
            @PathVariable(name = "productId") Integer productId,
            @PathVariable(name = "quantity") Integer quantity) {

        boolean flag = this.cartService.addToCart(userId, productId, quantity);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/add/{userId}/{productId}/{quantity}")
    public ResponseEntity<?> addProductsToCart(
            @PathVariable(name = "userId") Integer userId,
            @PathVariable(name = "productId") Integer productId,
            @PathVariable(name = "quantity") Integer quantity) {

        boolean flag = this.cartService.adjustmentProductInCart("addToCart", userId, productId, quantity);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/remove/{userId}/{productId}/{quantity}")
    public ResponseEntity<?> removeProductsInCart(
            @PathVariable(name = "userId") Integer userId,
            @PathVariable(name = "productId") Integer productId,
            @PathVariable(name = "quantity") Integer quantity) {

        boolean flag = this.cartService.adjustmentProductInCart("removeFromCart", userId, productId, quantity);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping("/{userId}/{productId}")
    public ResponseEntity<?> removeProduct(@PathVariable(name = "userId") Integer userId,
                                           @PathVariable(name = "productId") Integer productId) {

        boolean flag = this.cartService.removeFromCart(userId, productId);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
