package com.example.sprint2backend.repository;

import com.example.sprint2backend.model.product.FruitType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IFruitTypeRepository extends JpaRepository<FruitType, Integer> {
}
