package com.example.sprint2backend.model;

import com.example.sprint2backend.model.account.Account;
import com.example.sprint2backend.model.product.Fruits;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int quantity ;
    @ManyToOne
    private Fruits fruits;
    @OneToOne
    private Account account;

    public Cart() {
    }

    public Cart(int id, int quantity, Fruits fruits, Account account) {
        this.id = id;
        this.quantity = quantity;
        this.fruits = fruits;
        this.account = account;
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

    public Fruits getFruits() {
        return fruits;
    }

    public void setFruits(Fruits fruits) {
        this.fruits = fruits;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }


    public static void main(String[] args) {
        Fruits fruits1 = new Fruits();
        System.gc();

    }
}
