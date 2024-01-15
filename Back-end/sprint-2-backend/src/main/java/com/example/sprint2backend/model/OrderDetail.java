package com.example.sprint2backend.model;

import com.example.sprint2backend.model.product.Fruits;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int quantity;
    private double price;
    @ManyToOne
    private Orders orders;
    @ManyToOne
    private Fruits fruits;

    public OrderDetail() {
    }

    public OrderDetail(int id, int quantity, double price, Orders orders, Fruits fruits) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
        this.orders = orders;
        this.fruits = fruits;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }

    public Fruits getFruits() {
        return fruits;
    }

    public void setFruits(Fruits fruits) {
        this.fruits = fruits;
    }
}
