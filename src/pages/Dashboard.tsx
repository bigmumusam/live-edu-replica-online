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
        
        <main className="p-6 space-y-6">
          <HeroSection />

          {/* 热门推荐区域 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-orange-400">🔥</span>
                热门推荐
              </h3>
              <button className="text-sm text-blue-400 hover:text-blue-300">查看全部</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {courses.slice(0, 4).map((course) => (
                <div key={course.id} className="relative">
                  <CourseCard 
                    course={course}
                    onClick={handleCourseClick}
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    热门
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 限时优惠专区 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-green-400">💰</span>
                限时优惠
              </h3>
              <div className="text-sm text-red-400">
                距离结束还有 <span className="font-mono">23:45:12</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {latestCourses.slice(0, 3).map((course) => (
                <div key={course.id} className="relative">
                  <CourseCard 
                    course={course}
                    onClick={handleCourseClick}
                  />
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded">
                    7折
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded animate-pulse">
                    限时
                  </div>
                </div>
              ))}
            </div>
          </div>

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

          {/* 课程分类推荐 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-purple-400">📚</span>
              分类推荐
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:bg-slate-700/50 transition-colors cursor-pointer">
                <div className="text-2xl mb-2">💻</div>
                <h4 className="text-white font-semibold mb-1">编程开发</h4>
                <p className="text-slate-400 text-sm">528门课程</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:bg-slate-700/50 transition-colors cursor-pointer">
                <div className="text-2xl mb-2">🎨</div>
                <h4 className="text-white font-semibold mb-1">设计创意</h4>
                <p className="text-slate-400 text-sm">342门课程</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:bg-slate-700/50 transition-colors cursor-pointer">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="text-white font-semibold mb-1">数据分析</h4>
                <p className="text-slate-400 text-sm">256门课程</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:bg-slate-700/50 transition-colors cursor-pointer">
                <div className="text-2xl mb-2">🤖</div>
                <h4 className="text-white font-semibold mb-1">人工智能</h4>
                <p className="text-slate-400 text-sm">189门课程</p>
              </div>
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
