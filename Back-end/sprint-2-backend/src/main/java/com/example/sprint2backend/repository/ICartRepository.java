package com.example.sprint2backend.repository;

import com.example.sprint2backend.dto.ICartDto;
import com.example.sprint2backend.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart, Integer> {
    @Query(value = "select cart.fruits_id as fruitsId, cart.quantity, fruits.name, fruits.description, " +
            "fruits.price, fruits.inventory, cart.id as cartId, " +
            "(SELECT i.image " +
            "     FROM fruit_image as i " +
            "     WHERE i.fruits_id = f.id " +
            "     ORDER BY i.id LIMIT 1) AS image " +
            "FROM cart " +
            "JOIN fruits on fruit.id = cart.fruits_id " +
            "WHERE cart.account_id LIKE :userId ", nativeQuery = true)
    List<ICartDto> getCart(@Param("userId") int userId);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO `cart` (quantity, account_id, fruits_id) VALUES " +
            "(:#{#cart.quantity}, :#{#cart.accountId}, :#{#cart.fruitsId})",nativeQuery = true)
    void addCart(Cart cart);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO `cart` (quantity, account_id, fruits_id) VALUES " +
            "(:#{#cart.quantity}, :#{#cart.accountId}, :#{#cart.fruitsId})",nativeQuery = true)
    void addOder();
}
