package com.edu.eduonline.pojo.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author pro
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginInfo {
    private String token;
    private String userId;
    private String userName;
    private String email;
    private String role;
}
