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
    'header.my': '我的',
    
    // Sidebar
    'sidebar.home': '首页',
    'sidebar.courses': '课程/课堂',
    'sidebar.forum': '话题中心',
    'sidebar.livestream': '直播',
    'sidebar.personal': '个人中心',
    'sidebar.membership': '会员中心',
    'sidebar.admin': '管理后台',
    'sidebar.upgrade': '开会员 低至 ¥198',
    
    // Welcome Banner
    'welcome.greeting': '早上好，小明！',
    'welcome.subtitle': '今天是学习的好日子，继续保持您的学习节奏',
    'welcome.becomeTutor': '成为讲师',
    'welcome.fillInfo': '填写资料得奖励',
    'welcome.weeklyGoal': '本周目标',
    'welcome.studyTime': '学习时长 8.5/12h',
    'welcome.studyPoints': '学习积分',
    'welcome.pointsValue': '2,340',
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
    'course.clubCourses': '俱乐部课程',
    'course.oneOnOneTutor': '1V1导师',
    'course.specialLectures': '专题讲座',
    'course.liveNow': '直播中',
    'course.upcoming': '即将开始',
    'course.inProgress': '进行中',
    'course.free': '免费',
    'course.participants': '人参与',
    'course.online': '人在线',
    
    // Registration
    'register.title': '注册账户',
    'register.subtitle': '加入Tutorloop在线学习平台',
    'register.email': '邮箱',
    'register.school': '学校',
    'register.grade': '年级',
    'register.age': '年龄',
    'register.phone': '手机号',
    'register.address': '邮寄地址',
    'register.submit': '注册',
    'register.login': '已有账户？立即登录',
    
    // Personal Info Modal
    'profile.title': '个人信息',
    'profile.name': '姓名',
    'profile.email': '邮箱',
    'profile.phone': '手机号',
    'profile.school': '学校',
    'profile.grade': '年级',
    'profile.address': '地址',
    'profile.edit': '编辑资料',
    'profile.close': '关闭',
    
    // Footer (original)
    'footer.progress': 'PROGRESS',
    'footer.follow': 'FOLLOW',
    'footer.contact': 'CONTACT',
    
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
    
    // Homepage
    'home.hero.badge': '个性化学习体验',
    'home.hero.title.start': '开启您的',
    'home.hero.title.learning': '在线学习',
    'home.hero.title.journey': '之旅',
    'home.hero.subtitle': '与全球50,000+学习者一起，通过我们的实战课程掌握核心技能，获得1对1指导和认证，让学习变得高效且有趣。',
    'home.hero.startLearning': '免费开始学习',
    'home.hero.watchVideo': '观看介绍视频',
    'home.stats.students': '活跃学员',
    'home.stats.courses': '精品课程',
    'home.stats.rating': '平均评分',
    
    'home.clubCourses.title': '俱乐部课程',
    'home.clubCourses.subtitle': '加入学习俱乐部，与同学一起进步，享受免费的集体学习体验',
    'home.oneOnOne.title': '1V1导师',
    'home.oneOnOne.subtitle': '专业导师一对一指导，个性化学习方案，快速突破学习瓶颈',
    'home.lectures.title': '专题讲座',
    'home.lectures.subtitle': '行业专家分享前沿知识，拓宽视野，把握行业发展趋势',
    
    'home.cta.title': '准备好开始您的学习之旅了吗？',
    'home.cta.subtitle': '加入我们的学习社区，与全球学员一起成长，掌握未来必备技能',
    'home.cta.register': '立即免费注册',
    'home.cta.learnMore': '了解更多课程',
    'home.cta.gift': '新用户注册即送价值 ¥299 的精品课程',
    
    // Student Stories
    'home.studentStories.title': '学员成功故事',
    'home.studentStories.subtitle': '看看我们的学员如何通过学习改变人生',
    'home.studentStories.student1.name': '李小明',
    'home.studentStories.student1.role': '从零基础到数据分析师',
    'home.studentStories.student1.content': '通过3个月的学习，我成功转行成为数据分析师，薪资提升了60%。',
    'home.studentStories.student1.company': '阿里巴巴',
    'home.studentStories.student2.name': '张小花',
    'home.studentStories.student2.role': '高中生考入清华',
    'home.studentStories.student2.content': '数学成绩从60分提升到145分，最终考入清华大学计算机系。',
    'home.studentStories.student2.company': '清华大学',
    'home.studentStories.student3.name': '王小强',
    'home.studentStories.student3.role': '创业者技能提升',
    'home.studentStories.student3.content': '学会了编程和数据分析，为我的创业项目提供了技术支持。',
    'home.studentStories.student3.company': '自主创业',
    
    // Footer (updated)
    'footer.progress.new': 'Progress',
    'footer.contact.new': 'CONTACT',
    'footer.email': '联系邮箱',
    'footer.terms': 'Terms of Service',
    'footer.conditions': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.safety': 'Trust & Safety',
    
    // Login page
    'login.title': '欢迎登录Tutorloop在线学习平台',
    'login.role': '角色',
    'login.selectRole': '请选择角色',
    'login.student': '学生',
    'login.parent': '家长',
    'login.mobile': '手机号',
    'login.mobilePlaceholder': '请输入手机号',
    'login.verifyCode': '验证码',
    'login.verifyCodePlaceholder': '请输入验证码',
    'login.submit': '立即登录',
    
    // Register page placeholders
    'register.emailPlaceholder': 'example@email.com',
    'register.schoolPlaceholder': '学校名称',
    'register.gradePlaceholder': '年级',
    'register.agePlaceholder': '年龄',
    'register.phonePlaceholder': '手机号码',
    'register.addressPlaceholder': '邮寄地址',
    
    // Dashboard - Limited Time Offers & Hot Recommendations
    'dashboard.limitedOffers.title': '限时优惠',
    'dashboard.limitedOffers.subtitle': '精选课程特价中',
    'dashboard.hotRecommendations.title': '热门推荐',
    'dashboard.hotRecommendations.subtitle': '为您推荐热门课程',
    
    // Course page
    'course.allCourses': '全部课程',
    'course.allLiveStreams': '全部直播',
    'course.learnSketch': 'Learn sketch',
    'course.fromScratchToBuild': 'from scratch to build web',
    
    // Forum page
    'forum.topicCenter': '话题中心',
    'forum.all': '全部',
    'forum.latest': '最新',
    'forum.hot': '最热',
    'forum.createTopic': '发起话题讨论',
    'forum.specialClubs': '专区俱乐部',
    'forum.allDiscussions': '全部讨论',
    'forum.hotTags': '热门标签',
    'forum.latestContent': '最新话题内容',
    'forum.hotContent': '热门话题内容',
    
    // Personal Center
    'personal.myCourses': '我的课程',
    'personal.discussions': '参与的讨论', 
    'personal.favorites': '我的收藏',
    'personal.points': '我的积分',
    'personal.following': '我的关注',
    'personal.teaching': '我的课时',
    'personal.status': '状态',
    'personal.category': '分类',
    'personal.allStatus': '全部',
    'personal.notStarted': '未开始',
    'personal.inProgress': '进行中',
    'personal.completed': '已完成',
    'personal.allCategory': '全部',
    'personal.algebra': '代数',
    'personal.computer': '计算机',
    'personal.statistics': '统计学',
    'personal.programming': '代码程序',
    'personal.allFollowing': '全部关注',
    'personal.unfollow': '取消关注',
    'personal.userInfo': '用户信息',
    'personal.education': '教育',
    'personal.addNew': '新增',
    'personal.certificates': '证书',
    'personal.edit': '编辑',
    'personal.achievement': '成就',
    'personal.completedAll': '完成全部',
    'personal.studyExpert': '学习达人',
    'personal.honorCertificate': '承荣证书',
    
    // Membership page
    'membership.title': '开会员',
    'membership.subtitle': '订阅Tutorloop,解锁更多权益',
    'membership.free': '免费',
    'membership.forever': '永久',
    'membership.currentPlan': '当前套餐',
    'membership.paidVersion': '收费版',
    'membership.monthly': '每月',
    'membership.quarterly': '每季',
    'membership.yearly': '每年',
    'membership.monthlyPlan': '包月',
    'membership.quarterlyPlan': '包季',
    'membership.yearlyPlan': '包年',
    'membership.recommended': '推荐',
    'membership.canCancel': '包月可随时取消',
    'membership.orderNow': '立即订购',
    'membership.paymentTitle': '支付订单',
    'membership.qrCode': '二维码',
    'membership.scanToPay': '扫码支付',
    'membership.paymentDesc': '请使用微信或支付宝扫码支付',
    'membership.cancelPayment': '取消支付',
    'membership.paymentComplete': '支付完成',
    'membership.successMessage': '开通会员成功！',
  },
  en: {
    // Header
    'header.home': 'Home',
    'header.search.placeholder': 'Please search',
    'header.logout': 'Logout',
    'header.my': 'My',
    
    // Sidebar
    'sidebar.home': 'Home',
    'sidebar.courses': 'Courses/Classes',
    'sidebar.forum': 'Discussion Center',
    'sidebar.livestream': 'Live Stream',
    'sidebar.personal': 'Personal Center',
    'sidebar.membership': 'Membership',
    'sidebar.admin': 'Admin Dashboard',
    'sidebar.upgrade': 'Upgrade from ¥198',
    
    // Welcome Banner
    'welcome.greeting': 'Good morning, Xiao Ming!',
    'welcome.subtitle': 'Today is a great day for learning, keep up your study pace',
    'welcome.becomeTutor': 'Become Tutor',
    'welcome.fillInfo': 'Complete Profile for Rewards',
    'welcome.weeklyGoal': 'Weekly Goal',
    'welcome.studyTime': 'Study Time 8.5/12h',
    'welcome.studyPoints': 'Study Points',
    'welcome.pointsValue': '2,340',
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
    'course.clubCourses': 'Club Courses',
    'course.oneOnOneTutor': '1V1 Tutor',
    'course.specialLectures': 'Special Lectures',
    'course.liveNow': 'Live Now',
    'course.upcoming': 'Coming Soon',
    'course.inProgress': 'In Progress',
    'course.free': 'Free',
    'course.participants': ' participants',
    'course.online': ' online',
    
    // Registration
    'register.title': 'Create Account',
    'register.subtitle': 'Join Tutorloop Online Learning Platform',
    'register.email': 'Email',
    'register.school': 'School',
    'register.grade': 'Grade',
    'register.age': 'Age',
    'register.phone': 'Phone',
    'register.address': 'Mailing Address',
    'register.submit': 'Register',
    'register.login': 'Already have an account? Login',
    
    // Personal Info Modal
    'profile.title': 'Personal Information',
    'profile.name': 'Name',
    'profile.email': 'Email',
    'profile.phone': 'Phone',
    'profile.school': 'School',
    'profile.grade': 'Grade',
    'profile.address': 'Address',
    'profile.edit': 'Edit Profile',
    'profile.close': 'Close',
    
    // Footer
    'footer.progress': 'PROGRESS',
    'footer.follow': 'FOLLOW',
    'footer.contact': 'CONTACT',
    
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
    
    // Homepage
    'home.hero.badge': 'Personalized Learning Experience',
    'home.hero.title.start': 'Start Your',
    'home.hero.title.learning': 'Online Learning',
    'home.hero.title.journey': 'Journey',
    'home.hero.subtitle': 'Join 50,000+ learners worldwide, master core skills through our practical courses, get 1-on-1 guidance and certification, making learning efficient and fun.',
    'home.hero.startLearning': 'Start Learning Free',
    'home.hero.watchVideo': 'Watch Intro Video',
    'home.stats.students': 'Active Students',
    'home.stats.courses': 'Premium Courses',
    'home.stats.rating': 'Average Rating',
    
    'home.clubCourses.title': 'Club Courses',
    'home.clubCourses.subtitle': 'Join learning clubs, progress with classmates, enjoy free collaborative learning experiences',
    'home.oneOnOne.title': '1V1 Tutors',
    'home.oneOnOne.subtitle': 'Professional one-on-one tutoring, personalized learning plans, quickly breakthrough learning bottlenecks',
    'home.lectures.title': 'Special Lectures',
    'home.lectures.subtitle': 'Industry experts share cutting-edge knowledge, broaden horizons, grasp industry trends',
    
    'home.cta.title': 'Ready to Start Your Learning Journey?',
    'home.cta.subtitle': 'Join our learning community, grow with global students, master essential future skills',
    'home.cta.register': 'Register Free Now',
    'home.cta.learnMore': 'Learn More Courses',
    'home.cta.gift': '🎁 New users get premium courses worth ¥299 upon registration',
    
    // Student Stories
    'home.studentStories.title': 'Student Success Stories',
    'home.studentStories.subtitle': 'See how our students transform their lives through learning',
    'home.studentStories.student1.name': 'Li Xiaoming',
    'home.studentStories.student1.role': 'From Zero to Data Analyst',
    'home.studentStories.student1.content': 'Through 3 months of study, I successfully transitioned to a data analyst role with a 60% salary increase.',
    'home.studentStories.student1.company': 'Alibaba',
    'home.studentStories.student2.name': 'Zhang Xiaohua',
    'home.studentStories.student2.role': 'High School Student to Tsinghua',
    'home.studentStories.student2.content': 'My math scores improved from 60 to 145, and I was admitted to Tsinghua University Computer Science.',
    'home.studentStories.student2.company': 'Tsinghua University',
    'home.studentStories.student3.name': 'Wang Xiaoqiang',
    'home.studentStories.student3.role': 'Entrepreneur Skill Enhancement',
    'home.studentStories.student3.content': 'I learned programming and data analysis, providing technical support for my startup project.',
    'home.studentStories.student3.company': 'Self-employed',
    
    // Footer (updated)
    'footer.progress.new': 'Progress',
    'footer.contact.new': 'CONTACT',
    'footer.email': 'Contact Email',
    'footer.terms': 'Terms of Service',
    'footer.conditions': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.safety': 'Trust & Safety',
    
    // Login page
    'login.title': 'Welcome to Tutorloop Online Learning Platform',
    'login.role': 'Role',
    'login.selectRole': 'Please select role',
    'login.student': 'Student',
    'login.parent': 'Parent',
    'login.mobile': 'Mobile Phone',
    'login.mobilePlaceholder': 'Please enter mobile phone',
    'login.verifyCode': 'Verification Code',
    'login.verifyCodePlaceholder': 'Please enter verification code',
    'login.submit': 'Login Now',
    
    // Register page placeholders
    'register.emailPlaceholder': 'example@email.com',
    'register.schoolPlaceholder': 'School name',
    'register.gradePlaceholder': 'Grade',
    'register.agePlaceholder': 'Age',
    'register.phonePlaceholder': 'Phone number',
    'register.addressPlaceholder': 'Mailing address',
    
    // Dashboard - Limited Time Offers & Hot Recommendations
    'dashboard.limitedOffers.title': 'Limited Time Offers',
    'dashboard.limitedOffers.subtitle': 'Selected courses on special price',
    'dashboard.hotRecommendations.title': 'Hot Recommendations',
    'dashboard.hotRecommendations.subtitle': 'Recommended popular courses for you',
    
    // Course page
    'course.allCourses': 'All Courses',
    'course.allLiveStreams': 'All Live Streams',
    'course.learnSketch': 'Learn sketch',
    'course.fromScratchToBuild': 'from scratch to build web',
    
    // Forum page
    'forum.topicCenter': 'Discussion Center',
    'forum.all': 'All',
    'forum.latest': 'Latest',
    'forum.hot': 'Hot',
    'forum.createTopic': 'Create Topic Discussion',
    'forum.specialClubs': 'Special Clubs',
    'forum.allDiscussions': 'All Discussions',
    'forum.hotTags': 'Hot Tags',
    'forum.latestContent': 'Latest topic content',
    'forum.hotContent': 'Hot topic content',
    
    // Personal Center
    'personal.myCourses': 'My Courses',
    'personal.discussions': 'Discussions Participated', 
    'personal.favorites': 'My Favorites',
    'personal.points': 'My Points',
    'personal.following': 'My Following',
    'personal.teaching': 'My Teaching Hours',
    'personal.status': 'Status',
    'personal.category': 'Category',
    'personal.allStatus': 'All',
    'personal.notStarted': 'Not Started',
    'personal.inProgress': 'In Progress',
    'personal.completed': 'Completed',
    'personal.allCategory': 'All',
    'personal.algebra': 'Algebra',
    'personal.computer': 'Computer',
    'personal.statistics': 'Statistics',
    'personal.programming': 'Programming',
    'personal.allFollowing': 'All Following',
    'personal.unfollow': 'Unfollow',
    'personal.userInfo': 'User Information',
    'personal.education': 'Education',
    'personal.addNew': 'Add New',
    'personal.certificates': 'Certificates',
    'personal.edit': 'Edit',
    'personal.achievement': 'Achievement',
    'personal.completedAll': 'Complete All',
    'personal.studyExpert': 'Study Expert',
    'personal.honorCertificate': 'Honor Certificate',
    
    // Membership page
    'membership.title': 'Membership',
    'membership.subtitle': 'Subscribe to Tutorloop, unlock more benefits',
    'membership.free': 'Free',
    'membership.forever': 'Forever',
    'membership.currentPlan': 'Current Plan',
    'membership.paidVersion': 'Paid Version',
    'membership.monthly': 'Monthly',
    'membership.quarterly': 'Quarterly', 
    'membership.yearly': 'Yearly',
    'membership.monthlyPlan': 'Monthly Plan',
    'membership.quarterlyPlan': 'Quarterly Plan',
    'membership.yearlyPlan': 'Yearly Plan',
    'membership.recommended': 'Recommended',
    'membership.canCancel': 'Monthly plan can be cancelled anytime',
    'membership.orderNow': 'Order Now',
    'membership.paymentTitle': 'Payment Order',
    'membership.qrCode': 'QR Code',
    'membership.scanToPay': 'Scan to Pay',
    'membership.paymentDesc': 'Please use WeChat or Alipay to scan and pay',
    'membership.cancelPayment': 'Cancel Payment',
    'membership.paymentComplete': 'Payment Complete',
    'membership.successMessage': 'Membership activated successfully!',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

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