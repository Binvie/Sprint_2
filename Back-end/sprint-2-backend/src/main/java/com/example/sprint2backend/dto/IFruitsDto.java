package com.example.sprint2backend.dto;

import lombok.Getter;
import lombok.Setter;
public interface IFruitsDto {
    int getIdFruits();
    String getFruitsName();
    double getFruitsPrice();
    String getFruitImage();
    String getDescription();
}
