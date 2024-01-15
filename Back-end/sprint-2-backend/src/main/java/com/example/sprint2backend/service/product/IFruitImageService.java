package com.example.sprint2backend.service.product;

import com.example.sprint2backend.model.product.FruitImage;
import com.example.sprint2backend.service.IGenerate;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IFruitImageService extends IGenerate<FruitImage> {
    List<FruitImage> findFruitImagesByFruits(String name);

}
