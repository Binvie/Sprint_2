package com.example.sprint2backend.service;

import java.util.List;
import java.util.Optional;

public interface IGenerate<T>{
    List<T> findAll();

    Optional<T> findById(Integer id);

    void save(T t);

    void remove(Integer id);
}
