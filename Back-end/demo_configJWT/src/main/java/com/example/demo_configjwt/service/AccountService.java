package com.example.demo_configjwt.service;

import com.example.demo_configjwt.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class AccountService implements IAccountService{
    @Autowired
    private IAccountRepository accountRepository;
    @Override
    public Optional<Accounts> findByUsername(String username) {
        return accountRepository.findByUsername("%" + username + "%");
    }

    @Override
    public Boolean existsAccountsByUsername(String username) {
        return accountRepository.existsAccountsByUsername(username);
    }

    @Override
    public Boolean existsAccountsByEmail(String email) {
        return accountRepository.existsAccountsByEmail(email);
    }

    @Override
    public Accounts save(Accounts accounts) {
        return accountRepository.save(accounts);
    }
}
