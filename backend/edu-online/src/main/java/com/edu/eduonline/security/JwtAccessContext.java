package com.edu.eduonline.security;


import com.alibaba.ttl.TransmittableThreadLocal;
import com.edu.eduonline.pojo.vo.LoginInfo;

public class JwtAccessContext {
    /**
     * 使用TransmittableThreadLocal解决线程池中线程之间信息无法共享问题
     * 阿里开源依赖
     */
    private static final ThreadLocal<LoginInfo> customTokenInfo = new TransmittableThreadLocal<>();

    public JwtAccessContext() {
    }

    public static LoginInfo getLoginInfo() {
        return customTokenInfo.get();
    }

    public static void setLoginInfo(LoginInfo customInfo) {
        customTokenInfo.set(customInfo);
    }

    public static void clearLoginInfo() {
        customTokenInfo.remove();
    }
}
