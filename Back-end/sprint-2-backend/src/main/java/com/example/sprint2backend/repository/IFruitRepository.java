package com.example.sprint2backend.repository;

import com.example.sprint2backend.dto.IFruitsDto;
import com.example.sprint2backend.model.product.Fruits;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IFruitRepository extends JpaRepository<Fruits, Integer> {
    @Query(value = "select * from fruits where fruit_type_id like :type and fruit_origin_id like :origin ", nativeQuery = true)
    List<Fruits> findFruitsByFruitTypeAndFruitOrigin(@Param("type") String type, @Param("origin") String origin);

    @Query(value = " SELECT DISTINCT f.id AS idFruits, f.name AS fruitsName, " +
            "              f.price AS fruitsPrice, f.description ," +
            "              MIN(i.image)  AS fruitImage " +
            "              FROM fruits f " +
            "              JOIN fruit_image as i ON f.id = i.fruits_id " +
            "              WHERE f.fruit_type_id like :type " +
            "              GROUP BY f.id " +
            "              LIMIT 8 " , nativeQuery = true)
    List<IFruitsDto> findFruitsByFruitTypeHomePage(@Param("type") String type);

    @Query(value = "SELECT DISTINCT f.id AS idFruits, f.name AS  fruitsName, " +
            "                f.price AS fruitsPrice, f.description, " +
            "                MIN(i.image)  AS fruitImage " +
            "       FROM fruits f " +
            "       JOIN fruit_image as i ON f.id = i.fruits_id " +
            "       WHERE f.fruit_type_id like :typeId AND f.fruit_origin_id like :origin " +
            "       AND f.name like :searchName " +
            "       AND f.price < :maxPrice " +
            "       GROUP BY f.id " , nativeQuery = true)
    Page<IFruitsDto> findFruitsByFruitTypeProductsPage(@Param("typeId") String type, @Param("origin")String origin,
                                                       @Param("maxPrice") String maxPrice, Pageable pageable,
                                                       @Param("searchName") String name);


}
