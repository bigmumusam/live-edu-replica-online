package com.edu.eduonline.controller;

import com.edu.eduonline.common.result.Result;
import com.edu.eduonline.pojo.dto.UserDto;
import com.edu.eduonline.pojo.dto.UserQueryDto;
import com.edu.eduonline.service.UserService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Resource
    private UserService userService;


    @PostMapping("/login")
    public Result<?> login(@RequestBody UserDto userDto) {
        return Result.success(userService.login(userDto));
    }

    @PostMapping("/register")
    public Result<?> register(@RequestBody UserDto userDto) {
        userService.addUser(userDto);
        return Result.success();
    }
    @PostMapping("/userList")
    public Result<?> userList(@RequestBody UserQueryDto userQueryDto) {
        return Result.success(userService.queryUsers(userQueryDto));
    }

    @PostMapping("/updateUser")
    public Result<?> updateUser(@RequestBody UserDto userDto) {
        userService.updateUser(userDto);
        return Result.success();
    }

}
