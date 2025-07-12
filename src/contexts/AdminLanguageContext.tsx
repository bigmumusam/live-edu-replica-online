import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface AdminLanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const AdminLanguageContext = createContext<AdminLanguageContextType | undefined>(undefined);

const translations = {
  zh: {
    // 登录页面
    'login.title': '管理后台',
    'login.subtitle': '系统管理员控制面板',
    'login.username': '用户名',
    'login.password': '密码',
    'login.submit': '登录',
    'login.logging': '登录中...',
    'login.success': '登录成功',
    'login.error': '登录失败',
    'login.wrongCredentials': '用户名或密码错误',
    'login.backToSite': '返回网站',

    // 导航菜单
    'nav.dashboard': '仪表板',
    'nav.users': '用户管理',
    'nav.courses': '课程管理',
    'nav.permissions': '权限管理',
    'nav.topics': '话题管理',
    'nav.activities': '活动管理',
    'nav.analytics': '数据分析',
    'nav.settings': '系统设置',
    'nav.logout': '退出',

    // 仪表板
    'dashboard.title': '系统概览',
    'dashboard.subtitle': '实时监控平台数据',
    'dashboard.totalUsers': '总用户数',
    'dashboard.totalCourses': '课程总数',
    'dashboard.activeTopics': '活跃话题',
    'dashboard.dailyVisits': '今日访问',

    // 用户管理
    'users.title': '用户管理',
    'users.subtitle': '管理平台用户账户',
    'users.name': '姓名',
    'users.email': '邮箱',
    'users.role': '角色',
    'users.status': '状态',
    'users.lastLogin': '最后登录',
    'users.actions': '操作',
    'users.addUser': '添加用户',
    'users.student': '学生',
    'users.teacher': '教师',
    'users.admin': '管理员',
    'users.active': '活跃',
    'users.inactive': '非活跃',
    'users.banned': '已封禁',

    // 课程管理
    'courses.title': '课程管理',
    'courses.subtitle': '管理平台课程内容',
    'courses.courseName': '课程名称',
    'courses.instructor': '讲师',
    'courses.students': '学生数',
    'courses.status': '状态',
    'courses.price': '价格',
    'courses.actions': '操作',
    'courses.addCourse': '添加课程',
    'courses.inProgress': '进行中',
    'courses.completed': '已完成',
    'courses.upcoming': '即将开始',

    // 话题管理
    'topics.title': '话题管理',
    'topics.subtitle': '管理社区讨论话题',
    'topics.topicTitle': '话题标题',
    'topics.author': '作者',
    'topics.category': '分类',
    'topics.replies': '回复数',
    'topics.views': '浏览量',
    'topics.status': '状态',
    'topics.actions': '操作',

    // 活动管理
    'activities.title': '活动管理',
    'activities.subtitle': '管理平台活动和事件',
    'activities.activityName': '活动名称',
    'activities.startDate': '开始日期',
    'activities.endDate': '结束日期',
    'activities.participants': '参与人数',
    'activities.status': '状态',
    'activities.actions': '操作',
    'activities.addActivity': '添加活动',

    // 数据分析
    'analytics.title': '数据分析',
    'analytics.subtitle': '平台数据统计与分析',
    'analytics.userGrowth': '用户增长',
    'analytics.courseCompletion': '课程完成率',
    'analytics.topicActivity': '话题活跃度',
    'analytics.systemLogs': '系统日志',

    // 通用
    'common.search': '搜索...',
    'common.filter': '筛选',
    'common.export': '导出',
    'common.refresh': '刷新',
    'common.edit': '编辑',
    'common.delete': '删除',
    'common.view': '查看',
    'common.approve': '批准',
    'common.reject': '拒绝',
    'common.save': '保存',
    'common.cancel': '取消',

    // 权限管理
    'permissions.title': '权限管理',
    'permissions.subtitle': '管理用户角色和权限',
    'permissions.roleName': '角色名称',
    'permissions.description': '角色描述',
    'permissions.userCount': '用户数量',
    'permissions.permissions': '权限列表',
    'permissions.actions': '操作',
    'permissions.addRole': '添加角色',
    'permissions.admin': '管理员',
    'permissions.teacher': '教师',
    'permissions.student': '学生',
    'permissions.adminDesc': '系统管理员，拥有所有权限',
    'permissions.teacherDesc': '教师用户，可管理课程和学生',
    'permissions.studentDesc': '学生用户，可参与课程学习',
  },
  en: {
    // Login page
    'login.title': 'Admin Panel',
    'login.subtitle': 'System Administrator Control Panel',
    'login.username': 'Username',
    'login.password': 'Password',
    'login.submit': 'Login',
    'login.logging': 'Logging in...',
    'login.success': 'Login successful',
    'login.error': 'Login failed',
    'login.wrongCredentials': 'Invalid username or password',
    'login.backToSite': 'Back to Site',

    // Navigation menu
    'nav.dashboard': 'Dashboard',
    'nav.users': 'User Management',
    'nav.courses': 'Course Management',
    'nav.permissions': 'Permission Management',
    'nav.topics': 'Topic Management',
    'nav.activities': 'Activity Management',
    'nav.analytics': 'Analytics',
    'nav.settings': 'Settings',
    'nav.logout': 'Logout',

    // Dashboard
    'dashboard.title': 'System Overview',
    'dashboard.subtitle': 'Real-time platform data monitoring',
    'dashboard.totalUsers': 'Total Users',
    'dashboard.totalCourses': 'Total Courses',
    'dashboard.activeTopics': 'Active Topics',
    'dashboard.dailyVisits': 'Daily Visits',

    // User management
    'users.title': 'User Management',
    'users.subtitle': 'Manage platform user accounts',
    'users.name': 'Name',
    'users.email': 'Email',
    'users.role': 'Role',
    'users.status': 'Status',
    'users.lastLogin': 'Last Login',
    'users.actions': 'Actions',
    'users.addUser': 'Add User',
    'users.student': 'Student',
    'users.teacher': 'Teacher',
    'users.admin': 'Administrator',
    'users.active': 'Active',
    'users.inactive': 'Inactive',
    'users.banned': 'Banned',

    // Course management
    'courses.title': 'Course Management',
    'courses.subtitle': 'Manage platform course content',
    'courses.courseName': 'Course Name',
    'courses.instructor': 'Instructor',
    'courses.students': 'Students',
    'courses.status': 'Status',
    'courses.price': 'Price',
    'courses.actions': 'Actions',
    'courses.addCourse': 'Add Course',
    'courses.inProgress': 'In Progress',
    'courses.completed': 'Completed',
    'courses.upcoming': 'Upcoming',

    // Topic management
    'topics.title': 'Topic Management',
    'topics.subtitle': 'Manage community discussion topics',
    'topics.topicTitle': 'Topic Title',
    'topics.author': 'Author',
    'topics.category': 'Category',
    'topics.replies': 'Replies',
    'topics.views': 'Views',
    'topics.status': 'Status',
    'topics.actions': 'Actions',

    // Activity management
    'activities.title': 'Activity Management',
    'activities.subtitle': 'Manage platform activities and events',
    'activities.activityName': 'Activity Name',
    'activities.startDate': 'Start Date',
    'activities.endDate': 'End Date',
    'activities.participants': 'Participants',
    'activities.status': 'Status',
    'activities.actions': 'Actions',
    'activities.addActivity': 'Add Activity',

    // Analytics
    'analytics.title': 'Data Analytics',
    'analytics.subtitle': 'Platform data statistics and analysis',
    'analytics.userGrowth': 'User Growth',
    'analytics.courseCompletion': 'Course Completion',
    'analytics.topicActivity': 'Topic Activity',
    'analytics.systemLogs': 'System Logs',

    // Common
    'common.search': 'Search...',
    'common.filter': 'Filter',
    'common.export': 'Export',
    'common.refresh': 'Refresh',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.view': 'View',
    'common.approve': 'Approve',
    'common.reject': 'Reject',
    'common.save': 'Save',
    'common.cancel': 'Cancel',

    // Permission management
    'permissions.title': 'Permission Management',
    'permissions.subtitle': 'Manage user roles and permissions',
    'permissions.roleName': 'Role Name',
    'permissions.description': 'Description',
    'permissions.userCount': 'User Count',
    'permissions.permissions': 'Permissions',
    'permissions.actions': 'Actions',
    'permissions.addRole': 'Add Role',
    'permissions.admin': 'Administrator',
    'permissions.teacher': 'Teacher',
    'permissions.student': 'Student',
    'permissions.adminDesc': 'System administrator with full access',
    'permissions.teacherDesc': 'Teacher user who can manage courses and students',
    'permissions.studentDesc': 'Student user who can participate in courses',
  }
};

export const AdminLanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <AdminLanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </AdminLanguageContext.Provider>
  );
};

export const useAdminLanguage = (): AdminLanguageContextType => {
  const context = useContext(AdminLanguageContext);
  if (context === undefined) {
    throw new Error('useAdminLanguage must be used within AdminLanguageProvider');
  }
  return context;
};