package com.example.sprint2backend.repository;

import com.example.sprint2backend.dto.ICartDto;
import com.example.sprint2backend.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface ICartRepository extends JpaRepository<Cart, Integer> {
    @Query(value = "select cart.fruits_id as fruitsId, cart.quantity, fruits.name, fruits.description, " +
            "            fruits.price, fruits.inventory, cart.id as cartId, account.phone_number as phone, " +
            "            account.address, " +
            "            MIN(i.image) AS image " +
            "            FROM cart " +
            "            JOIN fruits on fruits.id = cart.fruits_id " +
            "            JOIN account on account.id = cart.account_id " +
            "            JOIN fruit_image as i ON fruits.id = i.fruits_id " +
            "            WHERE cart.account_id LIKE :userId " +
            "            GROUP BY cart.id ", nativeQuery = true)
    List<ICartDto> getAllCart(@Param("userId") int userId);

    @Query(value = "SELECT * " +
            "FROM cart " +
            "WHERE account_id = :accountId AND fruits_id = :fruitId ", nativeQuery = true)
    Optional<Cart> checkExistProductInCart(@Param("accountId") Integer userId,
                                           @Param("fruitId") Integer productId);

    @Modifying
    @Transactional
    @Query(value = "delete from cart where account_id = :accountId and fruits_id = :id ",nativeQuery = true)
    void deleteFruits(@Param("accountId") int idAccount,@Param("id") int idFruit);

    @Modifying
    @Transactional
    @Query(value = "delete from cart where account_id = :id",nativeQuery = true)
    void deleteCart(@Param("id") int userId);

    @Query(value = "select * from cart where account_id = :id",nativeQuery = true)
    List<Cart> findCartById(@Param("id") int userId);
}
