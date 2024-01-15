package com.example.sprint2backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RespondContentDto {
    private int code;
    private String message;
    private Object data;

    public RespondContentDto() {
    }

    public RespondContentDto(int code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
