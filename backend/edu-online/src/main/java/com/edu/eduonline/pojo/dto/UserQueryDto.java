package com.edu.eduonline.pojo.dto;

import lombok.Data;

@Data
public class UserQueryDto {

    private String userName;
    private String role;
    private String school;
    private Integer pageNumber;
    private Integer pageSize;
}
