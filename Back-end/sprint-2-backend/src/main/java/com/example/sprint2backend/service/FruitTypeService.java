package com.example.sprint2backend.service;

import com.example.sprint2backend.model.FruitType;
import com.example.sprint2backend.repository.IFruitTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FruitTypeService implements IFruitTypeService{
    @Autowired
    private IFruitTypeRepository fruitTypeRepository;

    @Override
    public List<FruitType> findAll() {
        return null;
    }

    @Override
    public Optional<FruitType> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void save(FruitType fruitType) {

    }

    @Override
    public void remove(Integer id) {

    }
}
