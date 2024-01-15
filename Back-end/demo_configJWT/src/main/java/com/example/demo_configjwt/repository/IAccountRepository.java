package com.example.demo_configjwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IAccountRepository extends JpaRepository<Accounts, Integer> {
        Optional<Accounts> findByUsername(String username);
        Boolean existsAccountsByUsername(String username);

        Boolean existsAccountsByEmail(String email);
}
