import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/shared/Footer";
import PersonalInfoModal from "@/components/shared/PersonalInfoModal";
import { useLanguage } from "@/contexts/LanguageContext";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import BannerCarousel from "@/components/dashboard/BannerCarousel";
import CourseFilters from "@/components/dashboard/CourseFilters";
import CourseCard from "@/components/dashboard/CourseCard";
import HotRecommendations from "@/components/dashboard/HotRecommendations";
import LimitedTimeOffers from "@/components/dashboard/LimitedTimeOffers";
import BecomeTutorModal from "@/components/dashboard/BecomeTutorModal";
import MembershipModal from "@/components/dashboard/MembershipModal";
import ProfileSetupModal from "@/components/dashboard/ProfileSetupModal";
import InfoCollectionModal from "@/components/dashboard/InfoCollectionModal";
import EventModal from "@/components/dashboard/EventModal";

const Dashboard = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [isBecomeTutorDialogOpen, setIsBecomeTutorDialogOpen] = useState(false);
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [isProfileSetupOpen, setIsProfileSetupOpen] = useState(false);
  const [isInfoCollectionOpen, setIsInfoCollectionOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState(false);

  // 移除自动弹出信息收集弹窗的逻辑

  const handleProfileSetupClose = (open: boolean) => {
    setIsProfileSetupOpen(open);
    if (!open) {
      localStorage.setItem('profileCompleted', 'true');
    }
  };

  const clubCourses = [
    { 
      id: 1, 
      title: language === 'zh' ? "编程俱乐部" : "Programming Club", 
      instructor: language === 'zh' ? "李老师" : "Mr. Li", 
      students: language === 'zh' ? "156人参与" : "156 joined", 
      rating: 4.8, 
      price: language === 'zh' ? "免费" : "Free", 
      status: language === 'zh' ? "进行中" : "In Progress", 
      color: "bg-purple-500" 
    },
    { 
      id: 2, 
      title: language === 'zh' ? "数学建模俱乐部" : "Math Modeling Club", 
      instructor: language === 'zh' ? "王教授" : "Prof. Wang", 
      students: language === 'zh' ? "89人参与" : "89 joined", 
      rating: 4.9, 
      price: language === 'zh' ? "免费" : "Free", 
      status: language === 'zh' ? "即将开始" : "Coming Soon", 
      color: "bg-blue-500" 
    },
    { 
      id: 3, 
      title: language === 'zh' ? "英语角俱乐部" : "English Corner Club", 
      instructor: language === 'zh' ? "张老师" : "Ms. Zhang", 
      students: language === 'zh' ? "203人参与" : "203 joined", 
      rating: 4.7, 
      price: language === 'zh' ? "免费" : "Free", 
      status: language === 'zh' ? "进行中" : "In Progress", 
      color: "bg-green-500" 
    }
  ];

  const tutorCourses = [
    { 
      id: 4, 
      title: language === 'zh' ? "数学1V1辅导" : "Math 1V1 Tutoring", 
      instructor: language === 'zh' ? "刘老师" : "Mr. Liu", 
      students: language === 'zh' ? "个人定制" : "Personalized", 
      rating: 4.9, 
      price: language === 'zh' ? "¥299/小时" : "¥299/hour", 
      status: language === 'zh' ? "可预约" : "Available", 
      color: "bg-orange-500" 
    },
    { 
      id: 5, 
      title: language === 'zh' ? "英语1V1辅导" : "English 1V1 Tutoring", 
      instructor: language === 'zh' ? "陈老师" : "Ms. Chen", 
      students: language === 'zh' ? "个人定制" : "Personalized", 
      rating: 4.8, 
      price: language === 'zh' ? "¥199/小时" : "¥199/hour", 
      status: language === 'zh' ? "可预约" : "Available", 
      color: "bg-cyan-500" 
    },
    { 
      id: 6, 
      title: language === 'zh' ? "编程1V1辅导" : "Programming 1V1 Tutoring", 
      instructor: language === 'zh' ? "赵老师" : "Mr. Zhao", 
      students: language === 'zh' ? "个人定制" : "Personalized", 
      rating: 4.9, 
      price: language === 'zh' ? "¥399/小时" : "¥399/hour", 
      status: language === 'zh' ? "可预约" : "Available", 
      color: "bg-pink-500" 
    }
  ];

  const lectureCourses = [
    { 
      id: 7, 
      title: language === 'zh' ? "AI前沿技术讲座" : "AI Frontier Technology Lecture", 
      instructor: language === 'zh' ? "业界专家" : "Industry Expert", 
      students: language === 'zh' ? "500人参与" : "500 joined", 
      rating: 4.9, 
      price: language === 'zh' ? "免费" : "Free", 
      status: language === 'zh' ? "即将开始" : "Coming Soon", 
      color: "bg-indigo-500" 
    },
    { 
      id: 8, 
      title: language === 'zh' ? "职业规划讲座" : "Career Planning Lecture", 
      instructor: language === 'zh' ? "职场导师" : "Career Mentor", 
      students: language === 'zh' ? "300人参与" : "300 joined", 
      rating: 4.8, 
      price: language === 'zh' ? "免费" : "Free", 
      status: language === 'zh' ? "报名中" : "Enrolling", 
      color: "bg-teal-500" 
    },
    { 
      id: 9, 
      title: language === 'zh' ? "创业经验分享" : "Entrepreneurship Experience Sharing", 
      instructor: language === 'zh' ? "创业导师" : "Startup Mentor", 
      students: language === 'zh' ? "200人参与" : "200 joined", 
      rating: 4.7, 
      price: language === 'zh' ? "免费" : "Free", 
      status: language === 'zh' ? "报名中" : "Enrolling", 
      color: "bg-red-500" 
    }
  ];


  const handleCourseClick = (courseId: number) => {
    navigate(`/course/${courseId}`);
  };

  const handleBecomeTutor = () => {
    setIsBecomeTutorDialogOpen(true);
  };

  const handleMembershipClick = () => {
    setIsMembershipModalOpen(true);
  };

  const handleInfoCollection = () => {
    setIsInfoCollectionOpen(true);
  };

  const handleEventRegister = () => {
    setIsEventModalOpen(true);
  };

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar onMembershipClick={handleMembershipClick} />
      
      <div className="flex-1">
        <Header 
          title={t('header.home')} 
          onMyClick={() => setIsPersonalInfoOpen(true)}
        />
        
        <main className="p-6 space-y-6">
          {/* Banner轮播 */}
          <BannerCarousel onInfoCollection={handleInfoCollection} onEventRegister={handleEventRegister} />
          
          {/* 欢迎横幅 */}
          <WelcomeBanner onBecomeTutor={handleBecomeTutor} onInfoCollection={handleInfoCollection} />

          {/* 俱乐部课程 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">{t('course.clubCourses')}</h3>
              <CourseFilters />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {clubCourses.map((course) => (
                <div key={course.id} className="h-48">
                  <CourseCard 
                    course={course}
                    onClick={handleCourseClick}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 1V1导师 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{t('course.oneOnOneTutor')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tutorCourses.map((course) => (
                <div key={course.id} className="h-48">
                  <CourseCard 
                    course={course}
                    onClick={handleCourseClick}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 专题讲座 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{t('course.specialLectures')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {lectureCourses.map((course) => (
                <div key={course.id} className="h-48">
                  <CourseCard 
                    course={course}
                    onClick={handleCourseClick}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 限时促销区域 */}
          <LimitedTimeOffers />

          {/* 热门推荐区域 */}
          <HotRecommendations />
        </main>

        <Footer />

        <BecomeTutorModal 
          isOpen={isBecomeTutorDialogOpen}
          onOpenChange={setIsBecomeTutorDialogOpen}
        />

        <MembershipModal
          isOpen={isMembershipModalOpen}
          onOpenChange={setIsMembershipModalOpen}
        />

        <ProfileSetupModal
          isOpen={isProfileSetupOpen}
          onOpenChange={handleProfileSetupClose}
        />
        
        <InfoCollectionModal
          isOpen={isInfoCollectionOpen}
          onOpenChange={setIsInfoCollectionOpen}
        />
        
        <EventModal
          isOpen={isEventModalOpen}
          onOpenChange={setIsEventModalOpen}
        />

        <PersonalInfoModal
          isOpen={isPersonalInfoOpen}
          onOpenChange={setIsPersonalInfoOpen}
        />
      </div>
    </div>
  );
};

export default Dashboard;
