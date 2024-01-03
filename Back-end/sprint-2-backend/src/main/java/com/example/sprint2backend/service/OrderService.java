package com.example.sprint2backend.service;

import com.example.sprint2backend.model.Orders;
import com.example.sprint2backend.repository.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository oderRepository;


    @Override
    public List<Orders> findAll() {
        return null;
    }

    @Override
    public Optional<Orders> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void save(Orders orders) {

    }

    @Override
    public void remove(Integer id) {

    }
}
