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
  const { t } = useLanguage();
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
    { id: 1, title: "编程俱乐部", instructor: "李老师", students: "156人参与", rating: 4.8, price: "免费", status: "进行中", color: "bg-purple-500" },
    { id: 2, title: "数学建模俱乐部", instructor: "王教授", students: "89人参与", rating: 4.9, price: "免费", status: "即将开始", color: "bg-blue-500" },
    { id: 3, title: "英语角俱乐部", instructor: "张老师", students: "203人参与", rating: 4.7, price: "免费", status: "进行中", color: "bg-green-500" }
  ];

  const tutorCourses = [
    { id: 4, title: "数学1V1辅导", instructor: "刘老师", students: "个人定制", rating: 4.9, price: "¥299/小时", status: "可预约", color: "bg-orange-500" },
    { id: 5, title: "英语1V1辅导", instructor: "陈老师", students: "个人定制", rating: 4.8, price: "¥199/小时", status: "可预约", color: "bg-cyan-500" },
    { id: 6, title: "编程1V1辅导", instructor: "赵老师", students: "个人定制", rating: 4.9, price: "¥399/小时", status: "可预约", color: "bg-pink-500" }
  ];

  const lectureCourses = [
    { id: 7, title: "AI前沿技术讲座", instructor: "业界专家", students: "500人参与", rating: 4.9, price: "免费", status: "即将开始", color: "bg-indigo-500" },
    { id: 8, title: "职业规划讲座", instructor: "职场导师", students: "300人参与", rating: 4.8, price: "免费", status: "报名中", color: "bg-teal-500" },
    { id: 9, title: "创业经验分享", instructor: "创业导师", students: "200人参与", rating: 4.7, price: "免费", status: "报名中", color: "bg-red-500" }
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
