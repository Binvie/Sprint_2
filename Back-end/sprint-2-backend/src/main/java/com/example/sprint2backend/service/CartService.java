package com.example.sprint2backend.service;

import com.example.sprint2backend.dto.ICartDto;
import com.example.sprint2backend.model.Cart;
import com.example.sprint2backend.repository.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository cartRepository;


    @Override
    public List<Cart> findAll() {
        return null;
    }

    @Override
    public Optional<Cart> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void save(Cart cart) {

    }

    @Override
    public void remove(Integer id) {

    }

    @Override
    public List<ICartDto> getCart(int userId) {
       return cartRepository.getCart(userId);
    }
}
