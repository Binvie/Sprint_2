package com.example.sprint2backend.service;

import com.example.sprint2backend.dto.ICartDto;
import com.example.sprint2backend.model.Cart;
import com.example.sprint2backend.model.OrderDto;
import com.example.sprint2backend.model.ResponseContentDto;
import com.example.sprint2backend.model.OrderDetailDto;

import java.util.List;

public interface ICartService extends IGenerate<Cart> {
    List<ICartDto> getCartDetailsByUserId(Integer userId);

    boolean addToCart(Integer userId, Integer productId, Integer quantityOrder);

    boolean adjustmentProductInCart(String actionCase,Integer userId, Integer productId, Integer quantityOrder);

    boolean removeFromCart(Integer userId, Integer productId);


}
