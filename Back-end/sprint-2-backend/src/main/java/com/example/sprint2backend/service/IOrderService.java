package com.example.sprint2backend.service;
import com.example.sprint2backend.model.Orders;

public interface IOrderService extends IGenerate<Orders> {
    void createOrder(int userId) throws Exception;

    void createOrderDetail(int userId) throws Exception;

    void updateTotalMoney(int userId) throws Exception;
}
