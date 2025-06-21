
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ChevronRight, MoreHorizontal } from "lucide-react";
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
    { id: 8, title: "计算机工程", instructor: "Janice Carroll", students: "3579人参与", rating: 4.9, price: "¥998", status: "已结束", color: "bg-yellow-500" }
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
              <span className="text-slate-400">选择：</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部</SelectItem>
                  <SelectItem value="ongoing">进行中</SelectItem>
                  <SelectItem value="completed">已结束</SelectItem>
                  <SelectItem value="upcoming">即将开始</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-colors cursor-pointer group" onClick={() => navigate(`/course/${course.id}`)}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 ${course.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                        {course.title.charAt(0)}
                      </div>
                      <Badge className={`${getStatusColor(course.status)} text-white`}>
                        {course.status}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="h-4 w-4 text-slate-400" />
                    </Button>
                  </div>
                  <CardTitle className="text-white text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-400 text-sm">
                    探索代数 2 学习实验室概念难懂？依靠同伴辅导来提升学习进度探索代数 2 学习实验室概念难懂
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{course.instructor.charAt(0)}</span>
                    </div>
                    <span className="text-slate-400 text-sm">{course.instructor}</span>
                    <span className="text-slate-400 text-sm">{course.students}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                      ))}
                      <span className="text-slate-400 text-sm ml-2">难度系数</span>
                    </div>
                    <span className="text-green-400 font-bold">{course.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white">
              加载更多课程
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursePage;
