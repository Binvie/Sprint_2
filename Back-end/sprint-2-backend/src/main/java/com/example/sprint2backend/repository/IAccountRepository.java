package com.example.sprint2backend.repository;

import com.example.sprint2backend.model.Accounts;
import com.example.sprint2backend.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAccountRepository extends JpaRepository<Accounts, Integer> {

}
