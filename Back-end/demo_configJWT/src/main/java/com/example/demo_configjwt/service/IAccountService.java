package com.example.demo_configjwt.service;

import java.util.Optional;

public interface IAccountService {
    Optional<Accounts> findByUsername(String username);

    Boolean existsAccountsByUsername(String username);

    Boolean existsAccountsByEmail(String email);

    Accounts save(Accounts accounts);
}
