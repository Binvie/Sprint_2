package com.example.sprint2backend.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ResponseContentDto {
    private int code;
    private String message;
    private Object data;

    public ResponseContentDto() {
    }

    public ResponseContentDto(int code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

}
