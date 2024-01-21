package com.example.sprint2backend.repository;

import com.example.sprint2backend.dto.DetailFruit;
import com.example.sprint2backend.dto.IFruitsDto;
import com.example.sprint2backend.dto.IImageDto;
import com.example.sprint2backend.model.Cart;
import com.example.sprint2backend.model.product.Fruits;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

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
    @Query(value = "SELECT f.id AS idFruits, f.name AS  fruitsName, f.price AS fruitsPrice, f.description , " +
            "            MIN(i.image)  AS fruitImage, " +
            "            f.inventory, f.fruit_type_id as TypeId " +
            "            from fruits as f " +
            "            JOIN fruit_image as i ON f.id = i.fruits_id " +
            "            where f.id = :id ", nativeQuery = true)
    DetailFruit findDetailFruitsById(@Param("id") Integer id);

    @Query(value = "SELECT id, image from fruit_image where fruits_id = :id ", nativeQuery = true)
    List<IImageDto> findImageByFruits(@Param("id") int id);

    @Query(value = "select * from cart where fruits_id = :id AND account_id = :accountId ",nativeQuery = true)
    Cart findFruitInCart(@Param("id") int fruitId, @Param("accountId") int accountId);

    @Query(value = "select * from fruits where id = :id",nativeQuery = true)
    Fruits findFruitsById(@Param("id") int fruitsId);

    @Transactional
    @Modifying
    @Query(value = "update fruits set quality_control = :quantity where id = :id",nativeQuery = true)
    void updateQuantityFruitsAfterPayment(@Param("id") Integer fruitsId,@Param("quantity") Integer quantityAfterPayment);

}
