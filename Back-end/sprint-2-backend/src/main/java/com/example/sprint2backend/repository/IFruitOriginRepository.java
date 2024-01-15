package com.example.sprint2backend.repository;

import com.example.sprint2backend.model.product.FruitOrigin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IFruitOriginRepository extends JpaRepository<FruitOrigin, Integer> {

}
