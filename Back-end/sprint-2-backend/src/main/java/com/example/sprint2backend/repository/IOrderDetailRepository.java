package com.example.sprint2backend.repository;

import com.example.sprint2backend.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail, Integer> {

    @Query(value = "select * from order_detail where orders_id = :id ", nativeQuery = true)
    List<OrderDetail> getOrdersDetailByOrderId(@Param("id") int id);
}
