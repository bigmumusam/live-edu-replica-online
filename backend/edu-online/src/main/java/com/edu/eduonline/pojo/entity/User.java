package com.edu.eduonline.pojo.entity;

import java.io.Serializable;
import java.util.Date;

import com.mybatisflex.annotation.Column;
import com.mybatisflex.annotation.Id;
import com.mybatisflex.annotation.KeyType;
import com.mybatisflex.annotation.Table;
import com.mybatisflex.core.keygen.KeyGenerators;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * user
 */
@Data
@Table("user")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {

    @Id(keyType = KeyType.Generator, value = KeyGenerators.snowFlakeId)
    private String userId;

    private String userName;

    private String email;

    private String phone;

    private String password;

    private String role;

    private String avatar;

    private String bio;

    private String gender;

    private Integer age;

    private String school;

    private String grade;

    private String major;

    private String address;

    private String interests;

    private String certificates;

    private Date joinDate;

    private String status;

    private Boolean verified;

    private String createBy;

    @Column(onInsertValue = "now()")
    private Date createTime;

    private String updateBy;

    @Column(onUpdateValue = "now()")
    private Date updateTime;

    private static final long serialVersionUID = 1L;
}