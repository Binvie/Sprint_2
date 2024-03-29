package com.example.sprint2backend.service.product;

import com.example.sprint2backend.dto.DetailFruit;
import com.example.sprint2backend.dto.IFruitsDto;
import com.example.sprint2backend.dto.IImageDto;
import com.example.sprint2backend.model.Cart;
import com.example.sprint2backend.model.product.Fruits;
import com.example.sprint2backend.service.IGenerate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IFruitService extends IGenerate<Fruits> {
    List<Fruits> findFruitsByTypeAndOrigin(String type, String origin);

    List<IFruitsDto> findFruitsByFruitTypeHomePage(String type);

    Page<IFruitsDto> findFruitsByFruitTypeProductsPage(String type, String origin, String maxPrice, Pageable pageable, String name);

    DetailFruit findDetailFruitsById(Integer id);

    List<IImageDto> findImageByFruits(int id);
    Cart findProductInCart( int fruitId, int accountId);

}
