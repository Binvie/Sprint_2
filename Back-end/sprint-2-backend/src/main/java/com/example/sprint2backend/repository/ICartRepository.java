package com.example.sprint2backend.repository;

import com.example.sprint2backend.model.Cart;
import com.example.sprint2backend.model.Fruits;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICartRepository extends JpaRepository<Cart, Integer> {

}
