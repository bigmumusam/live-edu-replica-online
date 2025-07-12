package com.edu.eduonline.service;

import cn.hutool.core.util.ObjectUtil;
import com.edu.eduonline.common.exception.CustomException;
import com.edu.eduonline.mapper.UserMapper;
import com.edu.eduonline.pojo.dto.UserDto;
import com.edu.eduonline.pojo.dto.UserQueryDto;
import com.edu.eduonline.pojo.entity.User;
import com.edu.eduonline.pojo.vo.LoginInfo;
import com.edu.eduonline.security.JwtAccessContext;
import com.edu.eduonline.security.JwtUtil;
import com.mybatisflex.core.paginate.Page;
import com.mybatisflex.core.query.QueryWrapper;
import jakarta.annotation.Resource;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import static com.edu.eduonline.pojo.entity.table.UserTableDef.USER;

@Service
public class UserService {
    @Resource
    private UserMapper userMapper;

    @Resource
    private JwtUtil jwtUtil;

    public LoginInfo login(UserDto userDto) {

        User user = userMapper.selectOneByQuery(QueryWrapper.create()
                .where(USER.EMAIL.eq(userDto.getEmail()))
                .and(USER.STATUS.eq("active")));
        if(ObjectUtil.isEmpty(user)){
            throw new CustomException("未找到该用户");
        }

        // 生成JWT令牌
        String token = jwtUtil.generateToken(
                user.getUserId(),
                user.getUserName(),
                user.getRole()
        );

        return LoginInfo.builder()
                .token(token)
                .userId(user.getUserId())
                .userName(user.getUserName())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }


    public void addUser(UserDto userDto){
        LoginInfo loginInfo = JwtAccessContext.getLoginInfo();
        User user = User.builder().build();
        BeanUtils.copyProperties(userDto,user);
        user.setCreateBy(loginInfo.getUserName());
        userMapper.insert(user);
    }

    public void updateUser(UserDto userDto){
        LoginInfo loginInfo = JwtAccessContext.getLoginInfo();
        User user = User.builder().build();
        BeanUtils.copyProperties(userDto,user);
        user.setUpdateBy(loginInfo.getUserName());
        userMapper.update(user);
    }

    public Page<User> queryUsers(UserQueryDto userQueryDto){

        return userMapper.paginate(userQueryDto.getPageNumber(),userQueryDto.getPageSize(),
                QueryWrapper.create().where(USER.STATUS.eq("1")
                        .and(USER.USER_NAME.like(userQueryDto.getUserName())))
        );
    }

}
