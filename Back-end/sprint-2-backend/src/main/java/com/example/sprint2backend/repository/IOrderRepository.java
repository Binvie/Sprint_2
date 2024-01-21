package com.example.sprint2backend.repository;

import com.example.sprint2backend.dto.IOrdersDetailDto;
import com.example.sprint2backend.model.OrderDetail;
import com.example.sprint2backend.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IOrderRepository extends JpaRepository<Orders, Integer> {
    @Transactional
    @Modifying
    @Query(value = "insert into `orders` (name,order_date,total_amount,account_id,payment_status) " +
            "values (:#{#orders.name},:#{#orders.orderDate},:#{#orders.totalAmount},:#{#orders.account.id},0)",nativeQuery = true)
    void createOrder(Orders orders);


    @Query(value = "select * from `orders` where account_id = :id and payment_status = 0",nativeQuery = true)
    Orders findOrderById(@Param("id") int userId);

    @Transactional
    @Modifying
    @Query(value = "insert into order_detail (price,quantity,fruits_id,orders_id) " +
            "values (:#{#orderDetail.price},:#{#orderDetail.quantity},:#{#orderDetail.fruits.id},:#{#orderDetail.orders.id})",nativeQuery = true)
    int createOrderDetail(OrderDetail orderDetail);

    @Query(value = "select price as quantityFruits, quantity as priceFruits " +
            "from order_detail " +
            "where orders_id = :id",nativeQuery = true)
    List<IOrdersDetailDto> findOrderDetailById(@Param("id") int id);

    @Modifying
    @Transactional
    @Query(value = "update `orders` set payment_status = 1, total_amount = :total where id = :id", nativeQuery = true)
    void updateTotalMoney(@Param("total") double total,@Param("id") int id);

    
}
