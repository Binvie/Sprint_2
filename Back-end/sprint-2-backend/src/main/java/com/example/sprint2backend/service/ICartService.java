package com.example.sprint2backend.service;

import com.example.sprint2backend.dto.ICartDto;
import com.example.sprint2backend.model.Cart;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ICartService extends IGenerate<Cart> {
    List<ICartDto> getCart(int userId);

}
