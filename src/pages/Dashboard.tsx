import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import HeroSection from "@/components/dashboard/HeroSection";
import LearningPaths from "@/components/dashboard/LearningPaths";
import HotRecommendations from "@/components/dashboard/HotRecommendations";
import LimitedTimeOffers from "@/components/dashboard/LimitedTimeOffers";
import MyCourses from "@/components/dashboard/MyCourses";
import SuccessStories from "@/components/dashboard/SuccessStories";
import PlatformStats from "@/components/dashboard/PlatformStats";
import BottomCTA from "@/components/dashboard/BottomCTA";
import UserInfoCard from "@/components/dashboard/UserInfoCard";
import TodoCard from "@/components/dashboard/TodoCard";
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

  // 检查是否需要显示信息收集弹窗
  useEffect(() => {
    const hasCollectedInfo = localStorage.getItem('infoCollected');
    if (!hasCollectedInfo) {
      setIsInfoCollectionOpen(true);
    }
  }, []);

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

  const latestCourses = [
    { id: 1, title: "代数2学习实验室", instructor: "JuanD MeGon", students: "258人参与", rating: 4.0, price: "¥998", status: "即将开始", color: "bg-red-500" },
    { id: 2, title: "PHP工程", instructor: "John", students: "3579人参与", rating: 4.0, price: "¥1288", status: "已结束", color: "bg-red-500" },
    { id: 3, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.0, price: "¥1288", status: "进行中", color: "bg-red-500" },
    { id: 4, title: "数据统计", instructor: "Debra Liver", students: "3579人参与", rating: 4.0, price: "¥1288", status: "进行中", color: "bg-red-500" }
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

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar onMembershipClick={handleMembershipClick} />
      
      <div className="flex-1">
        <Header title="首页" />
        
        <main className="p-6 space-y-8">
          <HeroSection />

          <LearningPaths />

          {/* 我的学习仪表板 - 参考顶级教育平台布局 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 主要内容区域 */}
            <div className="lg:col-span-2 space-y-8">
              <HotRecommendations courses={courses} onCourseClick={handleCourseClick} />

              <LimitedTimeOffers courses={latestCourses} onCourseClick={handleCourseClick} />

              <MyCourses courses={courses} onCourseClick={handleCourseClick} />
            </div>

            {/* 右侧边栏 - 个人信息和待办事项 */}
            <div className="lg:col-span-1 space-y-6">
              <UserInfoCard onBecomeTutor={handleBecomeTutor} />
              <TodoCard />
            </div>
          </div>

          <SuccessStories />

          <PlatformStats />


          <BottomCTA />

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
