
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ChevronRight, MoreHorizontal, ChevronLeft } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const CoursePage = () => {
  const navigate = useNavigate();

  const courses = [
    { id: 1, title: "代数2学习实验室", instructor: "JuanD MeGon", students: "2581人报名", rating: 4.8, price: "¥998", status: "即将开始", color: "bg-red-500" },
    { id: 2, title: "计算机工程", instructor: "John", students: "3579人参与", rating: 4.9, price: "¥1288", status: "已结束", color: "bg-yellow-500" },
    { id: 3, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.7, price: "¥1288", status: "进行中", color: "bg-red-500" },
    { id: 4, title: "数据统计", instructor: "Debra Liver", students: "3579人参与", rating: 4.8, price: "¥1288", status: "进行中", color: "bg-blue-500" },
    { id: 5, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.7, price: "¥998", status: "进行中", color: "bg-blue-500" },
    { id: 6, title: "计算机工程", instructor: "Janice Carroll", students: "3579人参与", rating: 4.9, price: "¥998", status: "已结束", color: "bg-yellow-500" },
    { id: 7, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.7, price: "¥998", status: "进行中", color: "bg-red-500" },
    { id: 8, title: "计算机工程", instructor: "Janice Carroll", students: "3579人参与", rating: 4.9, price: "¥998", status: "已结束", color: "bg-yellow-500" },
    { id: 9, title: "化学基础", instructor: "李老师", students: "1200人参与", rating: 4.6, price: "¥799", status: "进行中", color: "bg-green-500" },
    { id: 10, title: "物理力学", instructor: "王教授", students: "850人参与", rating: 4.9, price: "¥1199", status: "即将开始", color: "bg-purple-500" },
    { id: 11, title: "英语语法", instructor: "张老师", students: "2100人参与", rating: 4.5, price: "¥699", status: "进行中", color: "bg-pink-500" },
    { id: 12, title: "历史文化", instructor: "陈教授", students: "750人参与", rating: 4.7, price: "¥899", status: "已结束", color: "bg-cyan-500" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "即将开始": return "bg-orange-500";
      case "进行中": return "bg-blue-500";
      case "已结束": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title="课程" />
        
        <main className="p-6 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">全部课程</h2>
            <div className="flex items-center space-x-4">
              <span className="text-slate-400">筛选：</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">难易程度</SelectItem>
                  <SelectItem value="easy">简单</SelectItem>
                  <SelectItem value="medium">中等</SelectItem>
                  <SelectItem value="hard">困难</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="type">
                <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="type">课程类型</SelectItem>
                  <SelectItem value="live">直播课</SelectItem>
                  <SelectItem value="record">录播课</SelectItem>
                  <SelectItem value="hybrid">混合课</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="direction">
                <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="direction">课程方向</SelectItem>
                  <SelectItem value="math">数学</SelectItem>
                  <SelectItem value="science">科学</SelectItem>
                  <SelectItem value="language">语言</SelectItem>
                  <SelectItem value="history">历史</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="status">
                <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="status">课程状态</SelectItem>
                  <SelectItem value="ongoing">进行中</SelectItem>
                  <SelectItem value="completed">已结束</SelectItem>
                  <SelectItem value="upcoming">即将开始</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-colors cursor-pointer group aspect-square" onClick={() => navigate(`/course/${course.id}`)}>
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-10 h-10 ${course.color} rounded-full flex items-center justify-center text-white font-bold`}>
                          {course.title.charAt(0)}
                        </div>
                        <Badge className={`${getStatusColor(course.status)} text-white text-xs`}>
                          {course.status}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="h-4 w-4 text-slate-400" />
                      </Button>
                    </div>
                    
                    <h3 className="text-white text-lg font-medium mb-3 line-clamp-2">{course.title}</h3>
                    
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                      {course.title === "计算机工程" ? "Learn Php Codeigniter and understand working with MVC and HMVC from zero to hero" :
                       course.title === "生物学" ? "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills" :
                       course.title === "数据统计" ? "Dive in and learn React 16.8 from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js" :
                       course.title === "化学基础" ? "掌握化学基础知识，从原子结构到化学反应，系统学习化学原理" :
                       course.title === "物理力学" ? "深入理解力学原理，掌握牛顿定律、动量守恒等核心概念" :
                       course.title === "英语语法" ? "系统学习英语语法规则，提高英语表达能力和写作水平" :
                       course.title === "历史文化" ? "探索人类文明发展历程，了解重要历史事件和文化传承" :
                       "探索代数 2 学习实验室概念难懂？依靠同伴辅导来提升学习进度探索代数 2 学习实验室概念难懂"}
                    </p>
                  </div>
                  
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
                        <span className="text-slate-400 text-sm ml-2">难度系数</span>
                      </div>
                      <span className="text-green-400 font-bold">{course.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-y-4">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-slate-400 text-sm">1 / 3</span>
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursePage;
