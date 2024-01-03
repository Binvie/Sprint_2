package com.example.sprint2backend.service;
import com.example.sprint2backend.model.Accounts;
import com.example.sprint2backend.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public List<Accounts> findAll() {
        return null;
    }

    @Override
    public Optional<Accounts> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void save(Accounts accounts) {

    }

    @Override
    public void remove(Integer id) {

    }
}
