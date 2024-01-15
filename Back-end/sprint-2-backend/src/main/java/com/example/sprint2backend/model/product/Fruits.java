package com.example.sprint2backend.model.product;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Fruits {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @Column(name = "description", columnDefinition = "LONGTEXT")
    private String description;
    private double price;
    private int inventory;
    private int qualityControl;
    @ManyToOne
    private FruitType fruitType;
    @ManyToOne
    private FruitOrigin fruitOrigin;

}
