package com.example.demo_configjwt.security.userPrinciple;

import com.example.demo_configjwt.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailService implements UserDetailsService {
    @Autowired
    IAccountRepository accountRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Accounts accounts = accountRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Username not found"));
        return UserPrinciple.build(accounts);
    }
}
