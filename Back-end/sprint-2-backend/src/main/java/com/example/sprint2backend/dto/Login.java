package com.example.sprint2backend.dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class Login implements Validator {
    private String username;
    private String password;

    public Login() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
//        Login login = (Login) target;
//        if (username == null || username.trim().length() == 0) {
//            errors.rejectValue(username, "", "Vui lòng nhập.");
//        } else if (username.length() > 50) {
//            errors.rejectValue(username, "", "username quá dài, vui lòng nhập lại.");
//        } else if (username.length() < 6) {
//            errors.rejectValue(username, "", "username quá ngắn, vui lòng nhập lại.");
//        }
//
//        if (password == null || password.trim().length() == 0) {
//            errors.rejectValue(password, "", "Vui lòng nhập.");
//        } else if (password.length() > 50) {
//            errors.rejectValue(password, "", "password quá dài, vui lòng nhập lại.");
//        } else if (password.length() < 6) {
//            errors.rejectValue(password, "", "password quá ngắn, vui lòng nhập lại.");
//        }
    }
}