package com.example.demo_configjwt.security.userPrinciple;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserPrinciple implements UserDetails {
    private Integer id;
    private String name;
    private String username;
    private String email;
    @JsonIgnore
    private String password;
    private Collection<? extends GrantedAuthority> roles;

    public static UserPrinciple build(Accounts accounts){
        List<GrantedAuthority> authorities = accounts.getAccountRoles().stream().map(accountRole ->
                new SimpleGrantedAuthority(accountRole.getRoles().getName())).collect(Collectors.toList());
        return new UserPrinciple(
                accounts.getId(),
                accounts.getName(),
                accounts.getUsername(),
                accounts.getPassword(),
                accounts.getEmail(),
                authorities
        );
    };
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
