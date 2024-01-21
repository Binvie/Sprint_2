package com.example.sprint2backend.model;

public interface OrderDetailDto {
    int getId();
    int getProductId();
    String getName();
    int getQuantity();
    int getPrice();
    int getOrderId();
    int getFeedbackStatus();
}
