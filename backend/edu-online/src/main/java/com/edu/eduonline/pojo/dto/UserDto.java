package com.edu.eduonline.pojo.dto;

import lombok.Data;

@Data
public class UserDto {
    private String userId;
    private String username;
    private String email;
    private String role;
    private String password;
}
