import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
        
        <main className="p-6 space-y-8">
          {/* Enhanced Hero Section */}
          <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-4 right-4 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
            <div className="relative p-12 text-center">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                开启你的学习之旅
                <span className="block text-3xl font-normal text-blue-300 mt-2">与50,000+学习者一起成长</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                探索世界级课程，掌握前沿技能，打造属于你的职业生涯
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full transform hover:scale-105 transition-all">
                  开始学习
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full">
                  免费试听
                </Button>
              </div>
              <div className="flex justify-center items-center gap-8 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>1000+ 门课程</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>专业认证</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>终身学习</span>
                </div>
              </div>
            </div>
          </div>

          {/* 学习路径推荐 */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-3">选择你的学习路径</h2>
              <p className="text-gray-400 text-lg">根据你的目标和兴趣，找到最适合的课程</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "💻", title: "编程开发", desc: "掌握前沿技术", courses: "528门课程", color: "from-blue-500 to-cyan-500" },
                { icon: "🎨", title: "设计创意", desc: "释放创造力", courses: "342门课程", color: "from-purple-500 to-pink-500" },
                { icon: "📊", title: "数据科学", desc: "洞察数据价值", courses: "256门课程", color: "from-green-500 to-teal-500" },
                { icon: "🤖", title: "人工智能", desc: "拥抱AI时代", courses: "189门课程", color: "from-orange-500 to-red-500" }
              ].map((path, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className={`relative bg-gradient-to-br ${path.color} p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
                    <div className="text-4xl mb-4">{path.icon}</div>
                    <h3 className="text-white font-bold text-lg mb-2">{path.title}</h3>
                    <p className="text-white/80 text-sm mb-3">{path.desc}</p>
                    <p className="text-white/60 text-xs">{path.courses}</p>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 热门推荐区域 - 优化版 */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  🔥
                </div>
                热门推荐
                <span className="text-sm font-normal text-gray-400 ml-2">本周最受欢迎</span>
              </h3>
              <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
                查看全部 →
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.slice(0, 4).map((course) => (
                <div key={course.id} className="relative group">
                  <CourseCard 
                    course={course}
                    onClick={handleCourseClick}
                  />
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                    🔥 热门
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* 限时优惠专区 - 增强版 */}
          <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 rounded-2xl p-6 border border-red-500/20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center animate-pulse">
                    ⚡
                  </div>
                  限时优惠专区
                </h3>
                <p className="text-gray-300">错过今天，再等一年</p>
              </div>
              <div className="text-right">
                <div className="text-red-400 text-sm font-semibold">距离结束还有</div>
                <div className="text-2xl font-mono text-white bg-red-500/20 px-4 py-2 rounded-lg">
                  23:45:12
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestCourses.slice(0, 3).map((course) => (
                <div key={course.id} className="relative group">
                  <CourseCard 
                    course={course}
                    onClick={handleCourseClick}
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm px-3 py-1 rounded-full font-bold shadow-lg">
                    7折
                  </div>
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse font-semibold">
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

          {/* 成功案例展示 */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 border border-indigo-500/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">学员成功故事</h3>
              <p className="text-gray-300">看看他们是如何通过学习改变职业生涯的</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "李明", role: "全栈工程师", company: "字节跳动", avatar: "👨‍💻", story: "从零基础到大厂工程师", growth: "+300% 薪资增长" },
                { name: "王小雅", role: "UI设计师", company: "腾讯", avatar: "👩‍🎨", story: "设计思维的完美转变", growth: "6个月转行成功" },
                { name: "张浩", role: "数据科学家", company: "阿里巴巴", avatar: "👨‍🔬", story: "AI让我重新定义可能", growth: "获得业界认可" }
              ].map((success, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{success.avatar}</div>
                    <div>
                      <h4 className="text-white font-semibold">{success.name}</h4>
                      <p className="text-gray-400 text-sm">{success.role} @ {success.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">"{success.story}"</p>
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-2">
                    <span className="text-green-400 text-xs font-semibold">{success.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 平台数据展示 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50,000+", label: "活跃学员", icon: "👥" },
              { number: "1,000+", label: "精品课程", icon: "📚" },
              { number: "98%", label: "完成率", icon: "🎯" },
              { number: "24/7", label: "在线支持", icon: "🛟" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-slate-800/30 rounded-xl p-6 hover:bg-slate-700/30 transition-colors">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* 最新课程 - 重新设计 */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  ✨
                </div>
                最新上线
                <span className="text-sm font-normal text-gray-400 ml-2">抢先体验最新内容</span>
              </h3>
              <CourseFilters />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestCourses.map((course) => (
                <div key={course.id} className="relative group">
                  <CourseCard 
                    course={course}
                    onClick={handleCourseClick}
                  />
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    NEW
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 底部CTA区域 */}
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-50" style={{
              backgroundImage: "url('data:image/svg+xml;charset=utf-8,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
            }}></div>
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-4">准备好开始你的学习之旅了吗？</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                加入我们的学习社区，获得个性化学习路径和专业指导
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-full">
                  立即开始免费试学
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full">
                  了解更多详情
                </Button>
              </div>
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
