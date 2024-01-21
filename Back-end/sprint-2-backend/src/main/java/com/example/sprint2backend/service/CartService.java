package com.example.sprint2backend.service;

import com.example.sprint2backend.dto.ICartDto;
import com.example.sprint2backend.model.Cart;
import com.example.sprint2backend.model.OrderDto;
import com.example.sprint2backend.model.ResponseContentDto;
import com.example.sprint2backend.model.OrderDetailDto;
import com.example.sprint2backend.model.account.Account;
import com.example.sprint2backend.model.product.Fruits;
import com.example.sprint2backend.repository.IAccountRepository;
import com.example.sprint2backend.repository.ICartRepository;
import com.example.sprint2backend.repository.IFruitRepository;
import jakarta.transaction.Transactional;
import org.hibernate.TransactionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;
import java.util.Optional;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
    @Autowired
    private IAccountRepository accountRepository;
    @Autowired
    private IFruitRepository fruitRepository;
    private static final Logger logger = LoggerFactory.getLogger(CartService.class);

    @Override
    public List<Cart> findAll() {
        return null;
    }

    @Override
    public Optional<Cart> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void save(Cart cart) {

    }

    @Override
    public void remove(Integer id) {

    }

    @Override
    public List<ICartDto> getCartDetailsByUserId(Integer userId) {
        return cartRepository.getAllCart(userId);
    }

    @Override
    public boolean addToCart(Integer userId, Integer productId, Integer quantityOrder) {
        try {
            Optional<Account> existAccount = accountRepository.findById(userId);
            Optional<Fruits> existProduct = fruitRepository.findById(productId);
            Optional<Cart> existCart = this.cartRepository.checkExistProductInCart(userId, productId);

            boolean isDatavalid = existAccount.isPresent() && existProduct.isPresent();

            if (isDatavalid && existCart.isPresent()) {
                Optional<Cart> cart = this.cartRepository.checkExistProductInCart(userId, productId);


                if (cart.isPresent()) {
                    Integer prevQuantity = cart.get().getQuantity();
                    cart.get().setQuantity(prevQuantity + quantityOrder);
                    this.cartRepository.save(cart.get());
                    return true;
                }

            } else if (isDatavalid && !existCart.isPresent()) {
                Cart newCart = new Cart(quantityOrder, existProduct.get(), existAccount.get());
                this.cartRepository.save(newCart);
                return true;
            } else {
                return false;
            }
        } catch (IllegalArgumentException e) {
            logger.warn("IllegalArgumentException: {}", e.getMessage());
        } catch (TransactionException e) {
            logger.warn("TransactionException: {}", e.getMessage());
        } catch (Exception e) {
            logger.warn("Error while add new cart: {}", e.getMessage());
        }
        return false;
    }

    @Transactional
    @Override
    public boolean adjustmentProductInCart(String actionCase, Integer userId, Integer productId, Integer quantityOrder) {
        switch (actionCase) {
            case "addToCart":
                System.out.println("------------ add");
                return this.addToCart(userId, productId, quantityOrder);
            case "removeFromCart":
                System.out.println("------------ remove");
                return this.addToCart(userId, productId, -quantityOrder);
            default:
                return false;
        }
    }

    @Override
    public boolean removeFromCart(Integer userId, Integer productId) {
        try {
            Optional<Cart> existCart = this.cartRepository.checkExistProductInCart(userId, productId);
            if (existCart.isPresent()) {
                this.cartRepository.deleteFruits(userId, productId);
                return true;
            }
        } catch (IllegalArgumentException e) {
            logger.warn("IllegalArgumentException: {}", e.getMessage());
        } catch (TransactionException e) {
            logger.warn("TransactionException: {}", e.getMessage());
        } catch (Exception e) {
            logger.warn("Error while remove product from cart: {}", e.getMessage());
        }
        return false;
    }
}
