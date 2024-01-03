package com.example.sprint2backend.service;

import com.example.sprint2backend.model.Fruits;
import com.example.sprint2backend.repository.IFruitRepository;
import com.example.sprint2backend.repository.IFruitTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FruitService implements IFruitService{
    @Autowired
    private IFruitRepository fruitRepository;

    @Override
    public List<Fruits> findAll() {
        return null;
    }

    @Override
    public Optional<Fruits> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void save(Fruits fruits) {

    }

    @Override
    public void remove(Integer id) {

    }
}
