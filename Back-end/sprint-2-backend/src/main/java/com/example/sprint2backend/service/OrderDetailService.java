package com.example.sprint2backend.service;

import com.example.sprint2backend.model.OrderDetail;
import com.example.sprint2backend.model.Orders;
import com.example.sprint2backend.repository.IOrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository oderDetailRepository;

    @Override
    public List<OrderDetail> findAll() {
        return null;
    }

    @Override
    public Optional<OrderDetail> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void save(OrderDetail orderDetail) {

    }

    @Override
    public void remove(Integer id) {

    }
}
