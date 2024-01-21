package com.example.sprint2backend.controller;

import com.example.sprint2backend.service.*;
import com.example.sprint2backend.service.product.IFruitService;
import com.example.sprint2backend.service.product.IFruitTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private IOrderService orderService;

    @Transactional
    @PostMapping("/payment/{userId}")
    public ResponseEntity<Object> paymentOrder(@PathVariable int userId){
        try {
            orderService.createOrder(userId);
            orderService.createOrderDetail(userId);
            orderService.updateTotalMoney(userId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>("Thanh toán thành công", HttpStatus.OK);
    }
}
