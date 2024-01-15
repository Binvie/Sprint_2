package com.example.demo_configjwt.service;

import java.util.Optional;

public interface IRoleService {
    Optional<Roles> findById(Integer integer);

    Optional<Roles> findByName(String name);
}
