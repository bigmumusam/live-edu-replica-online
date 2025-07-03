import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import HotRecommendations from "@/components/dashboard/HotRecommendations";
import MyCourses from "@/components/dashboard/MyCourses";
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
          {/* 个性化欢迎区域 */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">早上好，陈俊杰 👋</h1>
                <p className="text-gray-300">继续你的学习之旅，你已经完成了3门课程</p>
              </div>
              <div className="text-right">
                <div className="text-blue-400 text-sm">本周学习时间</div>
                <div className="text-2xl font-bold text-white">12.5小时</div>
              </div>
            </div>
          </div>

          {/* 学习仪表板 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 主要内容区域 */}
            <div className="lg:col-span-2 space-y-8">
              <MyCourses courses={courses} onCourseClick={handleCourseClick} />
              <HotRecommendations courses={courses} onCourseClick={handleCourseClick} />
            </div>

            {/* 右侧边栏 */}
            <div className="lg:col-span-1 space-y-6">
              <UserInfoCard onBecomeTutor={handleBecomeTutor} />
              <TodoCard />
            </div>
          </div>

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