package com.example.sprint2backend.controller;

import com.example.sprint2backend.model.OrderDetail;
import com.example.sprint2backend.model.Orders;
import com.example.sprint2backend.service.*;
import com.example.sprint2backend.service.product.IFruitService;
import com.example.sprint2backend.service.product.IFruitTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private IOrderService orderService;
    @Autowired
    private IOrderDetailService orderDetailService;

    @Transactional
    @PostMapping("/payment/{userId}")
    public ResponseEntity<Object> paymentOrder(@PathVariable int userId) {
        try {
            orderService.createOrder(userId);
            orderService.createOrderDetail(userId);
            orderService.updateTotalMoney(userId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>("Thanh toán thành công", HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getOrderList(@PathVariable int userId) {
        List<Orders> orders = orderService.getOrdersByAccountId(userId);
        if (!orders.isEmpty()) {
            return new ResponseEntity<>(orders, HttpStatus.OK);
        }
        return new ResponseEntity<>("Không tìm thấy danh sách", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/detail/{orderId}")
    public ResponseEntity<Object> getOrderDetailList(@PathVariable int orderId) {
        List<OrderDetail> orderDetails = orderDetailService.getOrdersDetailByOrderId(orderId);
        if (!orderDetails.isEmpty()) {
            return new ResponseEntity<>(orderDetails, HttpStatus.OK);
        }
        return new ResponseEntity<>("Không tìm thấy danh sách", HttpStatus.NOT_FOUND);
    }
}
