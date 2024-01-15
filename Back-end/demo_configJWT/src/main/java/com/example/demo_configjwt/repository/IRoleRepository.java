package com.example.demo_configjwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IRoleRepository extends JpaRepository<Roles, Integer> {
    @Override
    Optional<Roles> findById(Integer integer);

    Optional<Roles> findByName(String name);
}
