package com.example.sprint2backend.repository;

import com.example.sprint2backend.model.account.Account;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IAccountRepository extends JpaRepository<Account, Integer> {
   @Query(value = "SELECT * FROM account as a WHERE a.username = :username ", nativeQuery = true)
   Account findByUsername(@Param("username") String username);

}
