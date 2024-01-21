package com.example.sprint2backend.model.account;

import java.util.List;

public class JwtResponse {
    private String accessToken;
    private String tokenType="Bearer";
    private Integer id;
    private String username;
    private List<String> roles;

    public JwtResponse() {
    }

    public JwtResponse(String accessToken, String tokenType, Integer id, String username, List<String> roles) {
        this.accessToken = accessToken;
        this.tokenType = tokenType;
        this.id = id;
        this.username = username;
        this.roles = roles;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
