
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MoreHorizontal } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CourseFilters from "@/components/dashboard/CourseFilters";
import CourseCardActions from "@/components/shared/CourseCardActions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CoursePage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const courses = [
    { id: 1, title: "代数2学习实验室", instructor: "JuanD MeGon", students: "2581人报名", rating: 4.8, price: "¥998", status: "即将开始", color: "bg-red-500" },
    { id: 2, title: "计算机工程", instructor: "John", students: "3579人参与", rating: 4.9, price: "¥1288", status: "已结束", color: "bg-yellow-500" },
    { id: 3, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.7, price: "¥1288", status: "进行中", color: "bg-red-500" },
    { id: 4, title: "数据统计", instructor: "Debra Liver", students: "3579人参与", rating: 4.8, price: "¥1288", status: "进行中", color: "bg-blue-500" },
    { id: 5, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.7, price: "¥998", status: "进行中", color: "bg-blue-500" },
    { id: 6, title: "计算机工程", instructor: "Janice Carroll", students: "3579人参与", rating: 4.9, price: "¥998", status: "已结束", color: "bg-yellow-500" },
    { id: 7, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.7, price: "¥998", status: "进行中", color: "bg-red-500" },
    { id: 8, title: "计算机工程", instructor: "Janice Carroll", students: "3579人参与", rating: 4.9, price: "¥998", status: "已结束", color: "bg-yellow-500" }
  ];

  const liveStreams = [
    { id: 1, title: "Learn sketch from scratch to build web design", instructor: "Janice Carroll", color: "bg-gradient-to-r from-pink-400 to-orange-400", letter: "B" },
    { id: 2, title: "Learn design principles for modern web applications", instructor: "Brad Traversy", color: "bg-gradient-to-r from-purple-400 to-pink-400", letter: "🔥" },
    { id: 3, title: "Advanced React patterns and best practices", instructor: "Sara Perkins", color: "bg-gradient-to-r from-blue-400 to-purple-400", letter: "📊" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "即将开始": return "bg-orange-500";
      case "进行中": return "bg-blue-500";
      case "已结束": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "即将开始": return "bg-orange-500 text-white";
      case "进行中": return "bg-blue-500 text-white";
      case "已结束": return "bg-green-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title="课程" />
        
        <main className="p-6 space-y-8">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">{t('course.allCourses')}</h2>
            <CourseFilters />
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-colors cursor-pointer group relative" onClick={() => navigate(`/course/${course.id}`)}>
                <CourseCardActions 
                  courseId={course.id} 
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                />
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 ${course.color} rounded-full flex items-center justify-center text-white font-bold`}>
                      {course.title.charAt(0)}
                    </div>
                    <Badge className={`${getStatusBadgeStyle(course.status)} text-xs`}>
                      {course.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-white text-base font-medium mb-3 line-clamp-2">{course.title}</h3>
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {course.title === "计算机工程" ? "Learn Php Codeigniter and understand working with MVC and HMVC from zero to hero" :
                     course.title === "生物学" ? "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills" :
                     course.title === "数据统计" ? "Dive in and learn React 16.8 from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js" :
                     "探索代数 2 学习实验室概念难懂？依靠同伴辅导来提升学习进度"}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{course.instructor.charAt(0)}</span>
                      </div>
                      <span className="text-slate-400 text-sm">{course.instructor}</span>
                    </div>
                    <div className="text-slate-400 text-sm">{course.students}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                        ))}
                      </div>
                      <span className="text-green-400 font-bold">{course.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Live Streams Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">{t('course.allLiveStreams')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {liveStreams.map((stream) => (
                <Card key={stream.id} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-colors cursor-pointer overflow-hidden relative group" onClick={() => navigate(`/livestream/${stream.id}`)}>
                  <CourseCardActions 
                    courseId={stream.id} 
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  />
                  <div className={`h-40 ${stream.color} flex items-center justify-center relative`}>
                    <div className="text-6xl font-bold text-white/80">
                      {stream.letter}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">Learn sketch</h3>
                      <p className="text-white/90 text-sm">from scratch to build web</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-white text-sm mb-3">{stream.title}</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{stream.instructor.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <span className="text-slate-400 text-sm">{stream.instructor}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>

    </div>
  );
};

export default CoursePage;
