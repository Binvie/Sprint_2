package com.example.sprint2backend.service;
import com.example.sprint2backend.model.OrderDetail;
import com.example.sprint2backend.model.Orders;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IOrderDetailService extends IGenerate<OrderDetail> {
    List<OrderDetail> getOrdersDetailByOrderId( int id);

}
