package com.example.sprint2backend.model.account;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "role")
public class Roles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @JsonBackReference
    @OneToMany(mappedBy = "role")
    private Set<AccountRole> accountRoles;

    public Roles() {
    }

    public Roles(int id, String name, Set<AccountRole> accountRoles) {
        this.id = id;
        this.name = name;
        this.accountRoles = accountRoles;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<AccountRole> getAccountRoles() {
        return accountRoles;
    }

    public void setAccountRoles(Set<AccountRole> accountRoles) {
        this.accountRoles = accountRoles;
    }
}
