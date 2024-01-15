package com.example.sprint2backend.service.product;

import com.example.sprint2backend.dto.IFruitsDto;
import com.example.sprint2backend.model.product.Fruits;
import com.example.sprint2backend.repository.IFruitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FruitService implements IFruitService {
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

    @Override
    public List<Fruits> findFruitsByTypeAndOrigin(String type, String origin) {
        return fruitRepository.findFruitsByFruitTypeAndFruitOrigin("%" + type + "%", "%" + origin + "%");
    }

    @Override
    public List<IFruitsDto> findFruitsByFruitTypeHomePage(String type) {
        return fruitRepository.findFruitsByFruitTypeHomePage("%" + type + "%");
    }

    @Override
    public Page<IFruitsDto> findFruitsByFruitTypeProductsPage(String type, String origin, String maxPrice, Pageable pageable, String name) {
        return fruitRepository.findFruitsByFruitTypeProductsPage("%" + type + "%", "%" + origin + "%",  maxPrice, pageable, "%" + name + "%");
    }

}
