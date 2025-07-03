import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  zh: {
    // Header
    'header.home': '首页',
    'header.search.placeholder': '请搜索',
    'header.logout': '退出登录',
    
    // Sidebar
    'sidebar.home': '首页',
    'sidebar.courses': '我的课程',
    'sidebar.forum': '论坛',
    'sidebar.livestream': '直播',
    'sidebar.personal': '个人中心',
    'sidebar.membership': '会员中心',
    'sidebar.admin': '管理后台',
    'sidebar.upgrade': '升级会员',
    
    // Welcome Banner
    'welcome.greeting': '早上好，小明！',
    'welcome.subtitle': '今天是学习的好日子，继续保持您的学习节奏',
    'welcome.becomeTutor': '成为讲师',
    'welcome.fillInfo': '填写资料得奖励',
    'welcome.weeklyGoal': '本周目标：学习时长 8.5/12h',
    'welcome.studyPoints': '学习积分：',
    'welcome.weeklyIncrease': '本周 +120',
    'welcome.checkinDays': '连续打卡',
    'welcome.days': '天',
    'welcome.checkinReward': '再坚持5天获得奖励',
    'welcome.todayTasks': '今日待办',
    'welcome.task.homework': '完成作业：数学练习',
    'welcome.task.video': '观看视频：Python基础',
    'welcome.task.checkin': '今日打卡签到',
    'welcome.complete': '去完成',
    
    // Banner Carousel
    'banner.newSemesterSale.title': '新学期特惠季',
    'banner.newSemesterSale.subtitle': '所有课程享受8折优惠',
    'banner.newSemesterSale.description': '为新学期做好准备，精选课程助你快速提升技能',
    'banner.newSemesterSale.cta': '立即查看',
    'banner.newSemesterSale.tag': '限时优惠',
    
    'banner.aiBootcamp.title': 'AI编程训练营',
    'banner.aiBootcamp.subtitle': '零基础入门人工智能',
    'banner.aiBootcamp.description': '跟随业界专家，掌握AI核心技术和实战项目',
    'banner.aiBootcamp.cta': '免费试学',
    'banner.aiBootcamp.tag': '热门课程',
    
    'banner.challenge.title': '学习成就挑战',
    'banner.challenge.subtitle': '30天学习打卡活动',
    'banner.challenge.description': '坚持学习30天，赢取丰厚奖品和证书',
    'banner.challenge.cta': '参加挑战',
    'banner.challenge.tag': '活动进行中',
    
    'banner.fillInfo.title': '填写资料领奖励',
    'banner.fillInfo.subtitle': '完善个人信息获得积分',
    'banner.fillInfo.description': '填写完整的学习资料，立即获得200积分奖励',
    'banner.fillInfo.cta': '立即填写',
    'banner.fillInfo.tag': '奖励活动',
    
    'banner.lecture.title': '春季编程大讲座',
    'banner.lecture.subtitle': '顶级专家分享最新技术',
    'banner.lecture.description': '邀请业界顶尖专家，分享前沿技术和实战经验',
    'banner.lecture.cta': '立即报名',
    'banner.lecture.tag': '专家讲座',
    
    'banner.contest.title': '春季编程挑战赛',
    'banner.contest.subtitle': '展现你的编程实力',
    'banner.contest.description': '参与编程竞赛，与全国高手同台竞技，赢取丰厚奖品',
    'banner.contest.cta': '报名参赛',
    'banner.contest.tag': '竞赛活动',
    
    'banner.learnMore': '了解详情',
    
    // Course Section
    'course.myCourses': '我的课程',
    'course.liveNow': '直播中',
    'course.upcoming': '即将开始',
    'course.inProgress': '进行中',
    'course.free': '免费',
    'course.participants': '人参与',
    'course.online': '人在线',
    
    // Buttons
    'button.viewDetails': '查看详情',
    'button.joinLive': '加入直播',
    'button.enroll': '立即报名',
    'button.continue': '继续学习',
    'button.submit': '确认提交',
    'button.cancel': '取消',
    'button.save': '保存',
    
    // Common
    'common.loading': '加载中...',
    'common.error': '出错了',
    'common.success': '成功',
    'common.confirm': '确认',
    'common.back': '返回',
    'common.next': '下一步',
    'common.previous': '上一步',
    'common.finish': '完成',
  },
  en: {
    // Header
    'header.home': 'Home',
    'header.search.placeholder': 'Please search',
    'header.logout': 'Logout',
    
    // Sidebar
    'sidebar.home': 'Home',
    'sidebar.courses': 'My Courses',
    'sidebar.forum': 'Forum',
    'sidebar.livestream': 'Live Stream',
    'sidebar.personal': 'Personal Center',
    'sidebar.membership': 'Membership',
    'sidebar.admin': 'Admin Dashboard',
    'sidebar.upgrade': 'Upgrade Membership',
    
    // Welcome Banner
    'welcome.greeting': 'Good morning, Xiao Ming!',
    'welcome.subtitle': 'Today is a great day for learning, keep up your study pace',
    'welcome.becomeTutor': 'Become Tutor',
    'welcome.fillInfo': 'Complete Profile for Rewards',
    'welcome.weeklyGoal': 'Weekly Goal: Study Time 8.5/12h',
    'welcome.studyPoints': 'Study Points:',
    'welcome.weeklyIncrease': 'This week +120',
    'welcome.checkinDays': 'Consecutive Days',
    'welcome.days': 'days',
    'welcome.checkinReward': 'Keep going for 5 more days to get rewards',
    'welcome.todayTasks': 'Today\'s Tasks',
    'welcome.task.homework': 'Complete Homework: Math Practice',
    'welcome.task.video': 'Watch Video: Python Basics',
    'welcome.task.checkin': 'Daily Check-in',
    'welcome.complete': 'Complete',
    
    // Banner Carousel
    'banner.newSemesterSale.title': 'New Semester Sale',
    'banner.newSemesterSale.subtitle': '20% off all courses',
    'banner.newSemesterSale.description': 'Prepare for the new semester with selected courses to rapidly improve your skills',
    'banner.newSemesterSale.cta': 'View Now',
    'banner.newSemesterSale.tag': 'Limited Time Offer',
    
    'banner.aiBootcamp.title': 'AI Programming Bootcamp',
    'banner.aiBootcamp.subtitle': 'AI for Beginners',
    'banner.aiBootcamp.description': 'Follow industry experts to master AI core technologies and practical projects',
    'banner.aiBootcamp.cta': 'Free Trial',
    'banner.aiBootcamp.tag': 'Popular Course',
    
    'banner.challenge.title': 'Learning Achievement Challenge',
    'banner.challenge.subtitle': '30-Day Learning Check-in Activity',
    'banner.challenge.description': 'Study consistently for 30 days and win great prizes and certificates',
    'banner.challenge.cta': 'Join Challenge',
    'banner.challenge.tag': 'Ongoing Activity',
    
    'banner.fillInfo.title': 'Complete Profile for Rewards',
    'banner.fillInfo.subtitle': 'Get points by completing personal information',
    'banner.fillInfo.description': 'Fill out complete learning profile and get 200 points immediately',
    'banner.fillInfo.cta': 'Fill Now',
    'banner.fillInfo.tag': 'Reward Activity',
    
    'banner.lecture.title': 'Spring Programming Lecture',
    'banner.lecture.subtitle': 'Top experts share latest technologies',
    'banner.lecture.description': 'Invite industry top experts to share cutting-edge technologies and practical experience',
    'banner.lecture.cta': 'Register Now',
    'banner.lecture.tag': 'Expert Lecture',
    
    'banner.contest.title': 'Spring Programming Contest',
    'banner.contest.subtitle': 'Show your programming skills',
    'banner.contest.description': 'Participate in programming contests, compete with national experts, and win great prizes',
    'banner.contest.cta': 'Register',
    'banner.contest.tag': 'Contest Activity',
    
    'banner.learnMore': 'Learn More',
    
    // Course Section
    'course.myCourses': 'My Courses',
    'course.liveNow': 'Live Now',
    'course.upcoming': 'Coming Soon',
    'course.inProgress': 'In Progress',
    'course.free': 'Free',
    'course.participants': ' participants',
    'course.online': ' online',
    
    // Buttons
    'button.viewDetails': 'View Details',
    'button.joinLive': 'Join Live',
    'button.enroll': 'Enroll Now',
    'button.continue': 'Continue Learning',
    'button.submit': 'Submit',
    'button.cancel': 'Cancel',
    'button.save': 'Save',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error occurred',
    'common.success': 'Success',
    'common.confirm': 'Confirm',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.finish': 'Finish',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};