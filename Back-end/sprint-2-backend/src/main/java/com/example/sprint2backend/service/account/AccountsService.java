package com.example.sprint2backend.service.account;

import com.example.sprint2backend.dto.JwtResponseUserDetail;
import com.example.sprint2backend.model.account.AccountRole;
import com.example.sprint2backend.model.account.Account;
import com.example.sprint2backend.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AccountsService implements IAccountsService {
    @Autowired
    private IAccountRepository accountRepository;
    @Override
    public Account findAccountById(Integer id) {
        return accountRepository.findAccountsById(id);
    }

    @Override
    public Account findByUsername(String username) {
        return accountRepository.findByUsername("%" + username + "%");
    }

}