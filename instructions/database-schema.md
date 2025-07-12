检查# 数据库表结构文档

## 概述
本文档描述了在线教育平台的数据库表结构设计，适配MySQL数据库。

## 通用字段说明
所有表都包含以下通用字段：
- `create_by`: 创建人
- `create_time`: 创建时间
- `update_by`: 更新人
- `update_time`: 更新时间

## 表结构设计

### 1. 用户表 (user)
```sql
CREATE TABLE `user` (
  `user_id` varchar(32) NOT NULL COMMENT '用户ID，雪花算法生成',
  `user_name` varchar(100) NOT NULL COMMENT '用户名',
  `email` varchar(100) DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(20) DEFAULT NULL COMMENT '手机号',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `role` varchar(20) NOT NULL DEFAULT 'student' COMMENT '角色：student-学生，teacher-教师，admin-管理员',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像URL',
  `bio` text COMMENT '个人简介',
  `gender` varchar(10) DEFAULT NULL COMMENT '性别：male-男，female-女',
  `age` int DEFAULT NULL COMMENT '年龄',
  `school` varchar(100) DEFAULT NULL COMMENT '学校',
  `grade` varchar(50) DEFAULT NULL COMMENT '年级',
  `major` varchar(100) DEFAULT NULL COMMENT '专业',
  `address` varchar(255) DEFAULT NULL COMMENT '地址',
  `interests` text COMMENT '兴趣爱好，JSON格式',
  `certificates` text COMMENT '证书，JSON格式',
  `join_date` datetime DEFAULT NULL COMMENT '加入时间',
  `status` varchar(20) DEFAULT 'active' COMMENT '状态：active-活跃，inactive-非活跃，banned-禁用',
  `verified` tinyint(1) DEFAULT 0 COMMENT '是否认证：0-未认证，1-已认证',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`user_id`),
  KEY `idx_user_name` (`user_name`),
  KEY `idx_email` (`email`),
  KEY `idx_phone` (`phone`),
  KEY `idx_role` (`role`),
  KEY `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';
```

### 2. 课程表 (course)
```sql
CREATE TABLE `course` (
  `course_id` varchar(32) NOT NULL COMMENT '课程ID，雪花算法生成',
  `title` varchar(200) NOT NULL COMMENT '课程标题',
  `description` text COMMENT '课程描述',
  `instructor_id` varchar(32) NOT NULL COMMENT '讲师ID',
  `category` varchar(50) NOT NULL COMMENT '课程分类',
  `difficulty` varchar(20) DEFAULT 'medium' COMMENT '难度：easy-简单，medium-中等，hard-困难',
  `price` decimal(10,2) DEFAULT 0.00 COMMENT '价格',
  `original_price` decimal(10,2) DEFAULT 0.00 COMMENT '原价',
  `duration` varchar(50) DEFAULT NULL COMMENT '课程时长',
  `students_count` int DEFAULT 0 COMMENT '学生数量',
  `rating` decimal(3,2) DEFAULT 0.00 COMMENT '评分',
  `status` varchar(20) DEFAULT 'draft' COMMENT '状态：draft-草稿，published-已发布，archived-已归档',
  `type` varchar(20) DEFAULT 'live' COMMENT '类型：live-直播，recorded-录播，mixed-混合',
  `cover_image` varchar(255) DEFAULT NULL COMMENT '封面图片URL',
  `tags` text COMMENT '标签，JSON格式',
  `sections` text COMMENT '课程章节，JSON格式',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`course_id`),
  KEY `idx_instructor_id` (`instructor_id`),
  KEY `idx_category` (`category`),
  KEY `idx_status` (`status`),
  KEY `idx_type` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='课程表';
```

### 3. 话题表 (topic)
```sql
CREATE TABLE `topic` (
  `topic_id` varchar(32) NOT NULL COMMENT '话题ID，雪花算法生成',
  `title` varchar(200) NOT NULL COMMENT '话题标题',
  `content` text NOT NULL COMMENT '话题内容',
  `author_id` varchar(32) NOT NULL COMMENT '作者ID',
  `category` varchar(50) NOT NULL COMMENT '话题分类',
  `tags` text COMMENT '标签，JSON格式',
  `likes` int DEFAULT 0 COMMENT '点赞数',
  `dislikes` int DEFAULT 0 COMMENT '点踩数',
  `replies` int DEFAULT 0 COMMENT '回复数',
  `views` int DEFAULT 0 COMMENT '浏览量',
  `status` varchar(20) DEFAULT 'normal' COMMENT '状态：normal-正常，hot-热门，essence-精华，banned-禁用',
  `is_pinned` tinyint(1) DEFAULT 0 COMMENT '是否置顶：0-否，1-是',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`topic_id`),
  KEY `idx_author_id` (`author_id`),
  KEY `idx_category` (`category`),
  KEY `idx_status` (`status`),
  KEY `idx_create_time` (`create_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='话题表';
```

### 4. 回复表 (reply)
```sql
CREATE TABLE `reply` (
  `reply_id` varchar(32) NOT NULL COMMENT '回复ID，雪花算法生成',
  `topic_id` varchar(32) NOT NULL COMMENT '话题ID',
  `author_id` varchar(32) NOT NULL COMMENT '作者ID',
  `content` text NOT NULL COMMENT '回复内容',
  `parent_id` varchar(32) DEFAULT NULL COMMENT '父回复ID，用于回复的回复',
  `likes` int DEFAULT 0 COMMENT '点赞数',
  `dislikes` int DEFAULT 0 COMMENT '点踩数',
  `status` varchar(20) DEFAULT 'normal' COMMENT '状态：normal-正常，hidden-隐藏',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`reply_id`),
  KEY `idx_topic_id` (`topic_id`),
  KEY `idx_author_id` (`author_id`),
  KEY `idx_parent_id` (`parent_id`),
  KEY `idx_create_time` (`create_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='回复表';
```

### 5. 直播表 (livestream)
```sql
CREATE TABLE `livestream` (
  `livestream_id` varchar(32) NOT NULL COMMENT '直播ID，雪花算法生成',
  `title` varchar(200) NOT NULL COMMENT '直播标题',
  `description` text COMMENT '直播描述',
  `instructor_id` varchar(32) NOT NULL COMMENT '讲师ID',
  `course_id` varchar(32) DEFAULT NULL COMMENT '关联课程ID',
  `start_time` datetime NOT NULL COMMENT '开始时间',
  `end_time` datetime DEFAULT NULL COMMENT '结束时间',
  `status` varchar(20) DEFAULT 'scheduled' COMMENT '状态：scheduled-已安排，live-直播中，ended-已结束，cancelled-已取消',
  `participants_count` int DEFAULT 0 COMMENT '参与人数',
  `stream_url` varchar(255) DEFAULT NULL COMMENT '直播流地址',
  `record_url` varchar(255) DEFAULT NULL COMMENT '录播地址',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`livestream_id`),
  KEY `idx_instructor_id` (`instructor_id`),
  KEY `idx_course_id` (`course_id`),
  KEY `idx_status` (`status`),
  KEY `idx_start_time` (`start_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='直播表';
```

### 6. 用户课程关系表 (user_course)
```sql
CREATE TABLE `user_course` (
  `user_course_id` varchar(32) NOT NULL COMMENT '关系ID，雪花算法生成',
  `user_id` varchar(32) NOT NULL COMMENT '用户ID',
  `course_id` varchar(32) NOT NULL COMMENT '课程ID',
  `status` varchar(20) DEFAULT 'enrolled' COMMENT '状态：enrolled-已报名，in_progress-进行中，completed-已完成，dropped-已退课',
  `progress` decimal(5,2) DEFAULT 0.00 COMMENT '学习进度，百分比',
  `enroll_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '报名时间',
  `complete_time` datetime DEFAULT NULL COMMENT '完成时间',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`user_course_id`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_course_id` (`course_id`),
  KEY `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户课程关系表';
```

### 7. 积分记录表 (points_record)
```sql
CREATE TABLE `points_record` (
  `points_record_id` varchar(32) NOT NULL COMMENT '记录ID，雪花算法生成',
  `user_id` varchar(32) NOT NULL COMMENT '用户ID',
  `points` int NOT NULL COMMENT '积分变动数量，正数为获得，负数为消费',
  `type` varchar(50) NOT NULL COMMENT '类型：checkin-打卡，course_complete-课程完成，discussion-参与讨论，teaching-教学',
  `description` varchar(255) DEFAULT NULL COMMENT '描述',
  `related_id` varchar(32) DEFAULT NULL COMMENT '关联ID，如课程ID、话题ID等',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`points_record_id`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_type` (`type`),
  KEY `idx_create_time` (`create_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='积分记录表';
```

### 8. 收藏表 (favorite)
```sql
CREATE TABLE `favorite` (
  `favorite_id` varchar(32) NOT NULL COMMENT '收藏ID，雪花算法生成',
  `user_id` varchar(32) NOT NULL COMMENT '用户ID',
  `target_type` varchar(20) NOT NULL COMMENT '目标类型：course-课程，topic-话题，livestream-直播',
  `target_id` varchar(32) NOT NULL COMMENT '目标ID',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`favorite_id`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_target_type` (`target_type`),
  KEY `idx_target_id` (`target_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='收藏表';
```

### 9. 关注表 (follow)
```sql
CREATE TABLE `follow` (
  `follow_id` varchar(32) NOT NULL COMMENT '关注ID，雪花算法生成',
  `follower_id` varchar(32) NOT NULL COMMENT '关注者ID',
  `following_id` varchar(32) NOT NULL COMMENT '被关注者ID',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`follow_id`),
  KEY `idx_follower_id` (`follower_id`),
  KEY `idx_following_id` (`following_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='关注表';
```

### 10. 会员表 (membership)
```sql
CREATE TABLE `membership` (
  `membership_id` varchar(32) NOT NULL COMMENT '会员ID，雪花算法生成',
  `user_id` varchar(32) NOT NULL COMMENT '用户ID',
  `plan_type` varchar(20) NOT NULL COMMENT '套餐类型：monthly-包月，quarterly-包季，yearly-包年',
  `status` varchar(20) DEFAULT 'active' COMMENT '状态：active-有效，expired-已过期，cancelled-已取消',
  `start_time` datetime NOT NULL COMMENT '开始时间',
  `end_time` datetime NOT NULL COMMENT '结束时间',
  `price` decimal(10,2) NOT NULL COMMENT '价格',
  `payment_method` varchar(20) DEFAULT NULL COMMENT '支付方式：wechat-微信，alipay-支付宝',
  `transaction_id` varchar(100) DEFAULT NULL COMMENT '交易ID',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`membership_id`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_status` (`status`),
  KEY `idx_end_time` (`end_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='会员表';
```

### 11. 系统配置表 (system_config)
```sql
CREATE TABLE `system_config` (
  `config_id` varchar(32) NOT NULL COMMENT '配置ID，雪花算法生成',
  `config_key` varchar(100) NOT NULL COMMENT '配置键',
  `config_value` text COMMENT '配置值',
  `description` varchar(255) DEFAULT NULL COMMENT '描述',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`config_id`),
  KEY `idx_config_key` (`config_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系统配置表';
```

### 12. 操作日志表 (operation_log)
```sql
CREATE TABLE `operation_log` (
  `log_id` varchar(32) NOT NULL COMMENT '日志ID，雪花算法生成',
  `user_id` varchar(32) DEFAULT NULL COMMENT '操作用户ID',
  `operation` varchar(100) NOT NULL COMMENT '操作类型',
  `target_type` varchar(50) DEFAULT NULL COMMENT '目标类型',
  `target_id` varchar(32) DEFAULT NULL COMMENT '目标ID',
  `description` varchar(255) DEFAULT NULL COMMENT '操作描述',
  `ip_address` varchar(50) DEFAULT NULL COMMENT 'IP地址',
  `user_agent` varchar(500) DEFAULT NULL COMMENT '用户代理',
  `create_by` varchar(32) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`log_id`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_operation` (`operation`),
  KEY `idx_create_time` (`create_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='操作日志表';
```

## 索引说明
1. 所有表都使用雪花算法生成的主键ID，命名规则为：表名_id
2. 根据业务查询需求创建了相应的索引
3. 对于频繁查询的字段都建立了索引

## 注意事项
1. 所有表都使用utf8mb4字符集，支持emoji等特殊字符
2. 时间字段统一使用datetime类型
3. 金额字段使用decimal类型，保证精度
4. 状态字段使用varchar类型，便于扩展
5. JSON字段用于存储复杂数据结构
6. 所有表都包含审计字段（create_by, create_time, update_by, update_time）
7. 主键ID命名规则：表名_id（如user_id, course_id等） 