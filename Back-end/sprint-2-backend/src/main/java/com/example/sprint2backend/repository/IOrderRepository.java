package com.example.sprint2backend.repository;

import com.example.sprint2backend.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderRepository extends JpaRepository<Orders, Integer> {

}
