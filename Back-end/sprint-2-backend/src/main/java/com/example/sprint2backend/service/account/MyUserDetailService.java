package com.example.sprint2backend.service.account;

import com.example.sprint2backend.model.account.Account;
import com.example.sprint2backend.model.auth.MyUserDetail;
import com.example.sprint2backend.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    private IAccountRepository accountRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account=accountRepository.findByUsername(username);
        return new MyUserDetail(account);
    }
}
