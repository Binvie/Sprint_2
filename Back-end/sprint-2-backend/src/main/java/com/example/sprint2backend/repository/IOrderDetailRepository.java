package com.example.sprint2backend.repository;

import com.example.sprint2backend.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail, Integer> {

}
