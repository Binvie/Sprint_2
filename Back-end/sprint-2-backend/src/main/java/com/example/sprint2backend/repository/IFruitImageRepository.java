package com.example.sprint2backend.repository;

import com.example.sprint2backend.model.product.FruitImage;
import com.example.sprint2backend.model.product.Fruits;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IFruitImageRepository extends JpaRepository<FruitImage, Integer> {
    @Query(value = "select * from fruit_image where fruits_id like :id ", nativeQuery = true)
    List<FruitImage> findFruitImagesByFruits(@Param("id") String id);
}
