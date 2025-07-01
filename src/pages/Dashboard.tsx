import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import HeroSection from "@/components/dashboard/HeroSection";
import CourseFilters from "@/components/dashboard/CourseFilters";
import CourseCard from "@/components/dashboard/CourseCard";
import UserInfoCard from "@/components/dashboard/UserInfoCard";
import TodoCard from "@/components/dashboard/TodoCard";
import BecomeTutorModal from "@/components/dashboard/BecomeTutorModal";
import MembershipModal from "@/components/dashboard/MembershipModal";
import ProfileSetupModal from "@/components/dashboard/ProfileSetupModal";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isBecomeTutorDialogOpen, setIsBecomeTutorDialogOpen] = useState(false);
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [isProfileSetupOpen, setIsProfileSetupOpen] = useState(false);

  // 检查是否需要显示个人资料设置弹窗
  useEffect(() => {
    const hasCompletedProfile = localStorage.getItem('profileCompleted');
    if (!hasCompletedProfile) {
      setIsProfileSetupOpen(true);
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
        
        <main className="p-6 space-y-6">
          <HeroSection />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">我的课程</h3>
                  <CourseFilters />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courses.map((course) => (
                    <div key={course.id} className="h-48">
                      <CourseCard 
                        course={course}
                        onClick={handleCourseClick}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6 flex flex-col h-fit">
              <UserInfoCard onBecomeTutor={handleBecomeTutor} />
              <TodoCard />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">最新课程</h3>
              <CourseFilters />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {latestCourses.map((course) => (
                <CourseCard 
                  key={course.id}
                  course={course}
                  onClick={handleCourseClick}
                />
              ))}
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
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
