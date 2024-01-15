package com.example.demo_configjwt.service;

import com.example.demo_configjwt.repository.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository roleRepository;

    @Override
    public Optional<Roles> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public Optional<Roles> findByName(String name) {
        return Optional.empty();
    }
}
