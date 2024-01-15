package com.example.demo_configjwt.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AccountDto {
    private Integer id;
    private String name;
    private String username;
    private String email;
    private String password;
    private String address;
    private Set<AccountRole> roles;

}
