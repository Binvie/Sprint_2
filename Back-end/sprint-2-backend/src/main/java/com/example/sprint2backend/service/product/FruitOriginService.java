package com.example.sprint2backend.service.product;

import com.example.sprint2backend.model.product.FruitOrigin;
import com.example.sprint2backend.model.product.FruitType;
import com.example.sprint2backend.repository.IFruitOriginRepository;
import com.example.sprint2backend.repository.IFruitTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FruitOriginService implements IFruitOriginService {
    @Autowired
    private IFruitOriginRepository fruitOriginRepository;


    @Override
    public List<FruitOrigin> findAll() {
        return fruitOriginRepository.findAll();
    }

    @Override
    public Optional<FruitOrigin> findById(Integer id) {
        return fruitOriginRepository.findById(id);
    }

    @Override
    public void save(FruitOrigin fruitOrigin) {
        fruitOriginRepository.save(fruitOrigin);
    }

    @Override
    public void remove(Integer id) {

    }
}
