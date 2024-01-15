package com.example.sprint2backend.service.product;

import com.example.sprint2backend.model.product.FruitImage;
import com.example.sprint2backend.model.product.FruitOrigin;
import com.example.sprint2backend.repository.IFruitImageRepository;
import com.example.sprint2backend.repository.IFruitOriginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FruitImageService implements IFruitImageService {
    @Autowired
    private IFruitImageRepository iFruitImageRepository;


    @Override
    public List<FruitImage> findAll() {
        return null;
    }

    @Override
    public Optional<FruitImage> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void save(FruitImage fruitImage) {

    }

    @Override
    public void remove(Integer id) {

    }

    @Override
    public List<FruitImage> findFruitImagesByFruits(String name) {
        return iFruitImageRepository.findFruitImagesByFruits("%" + name + "%");
    }
}
