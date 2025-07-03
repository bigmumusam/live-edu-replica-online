import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
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

const Dashboard = () => {
  const navigate = useNavigate();
  const [isBecomeTutorDialogOpen, setIsBecomeTutorDialogOpen] = useState(false);
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [isProfileSetupOpen, setIsProfileSetupOpen] = useState(false);
  const [isInfoCollectionOpen, setIsInfoCollectionOpen] = useState(false);

  // 移除自动弹出信息收集弹窗的逻辑

  const handleProfileSetupClose = (open: boolean) => {
    setIsProfileSetupOpen(open);
    if (!open) {
      localStorage.setItem('profileCompleted', 'true');
    }
  };

  const courses = [
    { id: 1, title: "代数2学习实验室", instructor: "JuanD MeGon", students: "2581人参与", rating: 4.8, price: "¥998", status: "即将开始", color: "bg-red-500" },
    { id: 2, title: "微积分微分学习实验室", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.9, price: "¥1288", status: "进行中", color: "bg-yellow-500" },
    { id: 3, title: "代数2学习实验室", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.7, price: "¥1288", status: "进行中", color: "bg-red-500" },
    { id: 4, title: "微积分微分学习实验室", instructor: "Debra Liver", students: "3579人参与", rating: 4.8, price: "¥1288", status: "进行中", color: "bg-blue-500" }
  ];

  const liveCourses = [
    { id: 5, title: "实时编程直播", instructor: "李老师", students: "156人在线", rating: 4.8, price: "免费", status: "直播中", color: "bg-red-500", type: "live" },
    { id: 6, title: "数学答疑直播", instructor: "王教授", students: "89人在线", rating: 4.9, price: "免费", status: "直播中", color: "bg-blue-500", type: "live" },
    { id: 7, title: "英语口语练习", instructor: "张老师", students: "203人在线", rating: 4.7, price: "免费", status: "直播中", color: "bg-green-500", type: "live" }
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

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar onMembershipClick={handleMembershipClick} />
      
      <div className="flex-1">
        <Header title="首页" />
        
        <main className="p-6 space-y-6">
          {/* Banner轮播 */}
          <BannerCarousel onInfoCollection={handleInfoCollection} />
          
          {/* 欢迎横幅 */}
          <WelcomeBanner onBecomeTutor={handleBecomeTutor} onInfoCollection={handleInfoCollection} />

          {/* 我的课程 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">我的课程</h3>
              <CourseFilters />
            </div>
            
            {/* 第一行：课程卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {courses.slice(0, 3).map((course) => (
                <div key={course.id} className="h-48">
                  <CourseCard 
                    course={course}
                    onClick={handleCourseClick}
                  />
                </div>
              ))}
            </div>
            
            {/* 第二行：直播课卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {liveCourses.map((course) => (
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
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
