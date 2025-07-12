# API 接口文档

## 概述
本文档描述了在线教育平台的API接口规范。

## 基础信息
- 基础URL: `http://localhost:8000/api`
- 请求格式: JSON
- 响应格式: JSON
- 认证方式: JWT Token

## 通用响应格式
```json
{
  "code": 200,
  "message": "操作成功",
  "data": {}
}
```

## 错误码说明
- 200: 成功
- 400: 请求参数错误
- 401: 未授权
- 403: 禁止访问
- 404: 资源不存在
- 500: 服务器内部错误

## 接口列表

### 1. 用户认证相关

#### 1.1 用户登录
- **接口**: `POST /auth/login`
- **描述**: 用户登录
- **请求参数**:
```json
{
  "userName": "string",
  "password": "string"
}
```
- **响应示例**:
```json
{
  "code": 200,
  "message": "登录成功",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userInfo": {
      "userId": "string",
      "userName": "string",
      "role": "string"
    }
  }
}
```

#### 1.2 用户注册
- **接口**: `POST /auth/register`
- **描述**: 用户注册
- **请求参数**:
```json
{
  "userName": "string",
  "email": "string",
  "phone": "string",
  "password": "string",
  "role": "string"
}
```
- **响应示例**:
```json
{
  "code": 200,
  "message": "注册成功",
  "data": {
    "userId": "string"
  }
}
```

### 2. 课程相关

#### 2.1 获取课程列表
- **接口**: `GET /courses`
- **描述**: 获取课程列表
- **请求参数**:
  - `page`: 页码 (可选)
  - `size`: 每页数量 (可选)
  - `category`: 课程分类 (可选)
  - `status`: 课程状态 (可选)
- **响应示例**:
```json
{
  "code": 200,
  "message": "获取成功",
  "data": {
    "total": 100,
    "list": [
      {
        "courseId": "string",
        "title": "string",
        "instructor": "string",
        "students": "string",
        "rating": 4.8,
        "price": "string",
        "status": "string",
        "color": "string"
      }
    ]
  }
}
```

#### 2.2 获取课程详情
- **接口**: `GET /courses/{courseId}`
- **描述**: 获取课程详情
- **响应示例**:
```json
{
  "code": 200,
  "message": "获取成功",
  "data": {
    "courseId": "string",
    "title": "string",
    "description": "string",
    "instructor": "string",
    "students": "string",
    "rating": 4.8,
    "price": "string",
    "status": "string",
    "category": "string",
    "difficulty": "string",
    "duration": "string",
    "sections": []
  }
}
```

### 3. 论坛相关

#### 3.1 获取话题列表
- **接口**: `GET /forum/topics`
- **描述**: 获取话题列表
- **请求参数**:
  - `page`: 页码 (可选)
  - `size`: 每页数量 (可选)
  - `category`: 话题分类 (可选)
  - `sort`: 排序方式 (可选)
- **响应示例**:
```json
{
  "code": 200,
  "message": "获取成功",
  "data": {
    "total": 100,
    "list": [
      {
        "topicId": "string",
        "title": "string",
        "content": "string",
        "author": "string",
        "category": "string",
        "likes": 40,
        "dislikes": 0,
        "replies": 5,
        "views": 75,
        "createdTime": "string"
      }
    ]
  }
}
```

#### 3.2 创建话题
- **接口**: `POST /forum/topics`
- **描述**: 创建新话题
- **请求参数**:
```json
{
  "title": "string",
  "content": "string",
  "category": "string",
  "tags": ["string"]
}
```
- **响应示例**:
```json
{
  "code": 200,
  "message": "创建成功",
  "data": {
    "topicId": "string"
  }
}
```

### 4. 用户中心相关

#### 4.1 获取用户信息
- **接口**: `GET /user/profile`
- **描述**: 获取当前用户信息
- **响应示例**:
```json
{
  "code": 200,
  "message": "获取成功",
  "data": {
    "userId": "string",
    "userName": "string",
    "email": "string",
    "phone": "string",
    "avatar": "string",
    "bio": "string",
    "school": "string",
    "grade": "string",
    "joinDate": "string",
    "status": "string"
  }
}
```

#### 4.2 更新用户信息
- **接口**: `PUT /user/profile`
- **描述**: 更新用户信息
- **请求参数**:
```json
{
  "userName": "string",
  "email": "string",
  "phone": "string",
  "bio": "string",
  "school": "string",
  "grade": "string"
}
```
- **响应示例**:
```json
{
  "code": 200,
  "message": "更新成功",
  "data": null
}
```

### 5. 直播相关

#### 5.1 获取直播列表
- **接口**: `GET /livestreams`
- **描述**: 获取直播列表
- **响应示例**:
```json
{
  "code": 200,
  "message": "获取成功",
  "data": {
    "total": 10,
    "list": [
      {
        "streamId": "string",
        "title": "string",
        "instructor": "string",
        "status": "string",
        "participants": 15,
        "startTime": "string",
        "endTime": "string"
      }
    ]
  }
}
```

### 6. 管理后台相关

#### 6.1 管理员登录
- **接口**: `POST /admin/login`
- **描述**: 管理员登录
- **请求参数**:
```json
{
  "username": "string",
  "password": "string"
}
```
- **响应示例**:
```json
{
  "code": 200,
  "message": "登录成功",
  "data": {
    "token": "string",
    "adminInfo": {
      "adminId": "string",
      "username": "string",
      "role": "admin"
    }
  }
}
```

#### 6.2 获取统计数据
- **接口**: `GET /admin/stats`
- **描述**: 获取管理后台统计数据
- **响应示例**:
```json
{
  "code": 200,
  "message": "获取成功",
  "data": {
    "totalUsers": 1234,
    "totalCourses": 56,
    "activeDiscussions": 789,
    "todayVisits": 2345
  }
}
```

## 认证说明
- 需要在请求头中携带 `Authorization: Bearer {token}`
- Token 通过登录接口获取
- Token 有效期为24小时

## 注意事项
1. 所有时间格式均为 ISO 8601 格式
2. 分页参数默认值：page=1, size=10
3. 文件上传接口需要设置 Content-Type 为 multipart/form-data
4. 错误响应会包含具体的错误信息 