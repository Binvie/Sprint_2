package com.example.sprint2backend.service.account;

import com.example.sprint2backend.model.account.Account;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface IAccountsService{
    Account findAccountById(Integer id);
    Account findByUsername(String username);
}