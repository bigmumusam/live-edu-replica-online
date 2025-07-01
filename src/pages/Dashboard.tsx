
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isBecomeTutorDialogOpen, setIsBecomeTutorDialogOpen] = useState(false);

  const courses = [
    { id: 1, title: "代数2学习实验室", instructor: "JuanD MeGon", students: "2581人参与", rating: 4.8, price: "¥998", status: "即将开始", color: "bg-red-500" },
    { id: 2, title: "微积分微分学习实验室", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.9, price: "¥1288", status: "进行中", color: "bg-yellow-500" },
    { id: 3, title: "代数2学习实验室", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.7, price: "¥1288", status: "进行中", color: "bg-red-500" },
    { id: 4, title: "微积分微分学习实验室", instructor: "Debra Liver", students: "3579人参与", rating: 4.8, price: "¥1288", status: "进行中", color: "bg-blue-500" }
  ];

  const latestCourses = [
    { id: 1, title: "代数2学习实验室", instructor: "JuanD MeGon", students: "258人参与", rating: 4.0, price: "¥998", status: "即将开始" },
    { id: 2, title: "PHP工程", instructor: "John", students: "3579人参与", rating: 4.0, price: "¥1288", status: "已结束" },
    { id: 3, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.0, price: "¥1288", status: "进行中" },
    { id: 4, title: "数据统计", instructor: "Debra Liver", students: "3579人参与", rating: 4.0, price: "¥1288", status: "进行中" }
  ];

  const handleCourseClick = (courseId: number) => {
    navigate(`/course/${courseId}`);
  };

  const handleBecomeTutor = () => {
    setIsBecomeTutorDialogOpen(true);
  };

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title="首页" />
        
        <main className="p-6 space-y-6">
          {/* Hero Section */}
          <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 border-0 text-white relative overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="space-y-4 flex-1">
                  <h2 className="text-3xl font-bold">探索代数 2 学习实验室</h2>
                  <p className="text-lg opacity-90">概念难懂？依靠同伴辅导来提升学习进度</p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">
                    立即开始
                  </Button>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="/lovable-uploads/4be6a4ab-2cbe-48f8-9bbb-68870a714213.png" 
                    alt="学习插图" 
                    className="w-48 h-32 object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Content - My Courses (占3列) */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">我的课程</h3>
                  <div className="flex items-center space-x-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">全部难易度</SelectItem>
                        <SelectItem value="g1-5">G1-5</SelectItem>
                        <SelectItem value="g6-8">G6-8</SelectItem>
                        <SelectItem value="g9-12">G9-12</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="all-subject">
                      <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-subject">全部课程类别</SelectItem>
                        <SelectItem value="english">英语</SelectItem>
                        <SelectItem value="math">数学</SelectItem>
                        <SelectItem value="science">科学</SelectItem>
                        <SelectItem value="economics">经济</SelectItem>
                        <SelectItem value="humanities">人文</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="all-time">
                      <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-time">课程时间段</SelectItem>
                        <SelectItem value="morning">7:00-9:00</SelectItem>
                        <SelectItem value="afternoon">16:00-19:00</SelectItem>
                        <SelectItem value="evening">19:00-22:00</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="all-language">
                      <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-language">授课语言</SelectItem>
                        <SelectItem value="english">英语</SelectItem>
                        <SelectItem value="chinese">中文</SelectItem>
                        <SelectItem value="french">法语</SelectItem>
                        <SelectItem value="german">德语</SelectItem>
                        <SelectItem value="spanish">西班牙语</SelectItem>
                        <SelectItem value="italian">意大利语</SelectItem>
                        <SelectItem value="japanese">日语</SelectItem>
                        <SelectItem value="korean">韩语</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex items-center space-x-2 ml-4">
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 p-2">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 p-2">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courses.map((course) => (
                    <Card 
                      key={course.id} 
                      className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-colors cursor-pointer h-[180px] flex flex-col"
                      onClick={() => handleCourseClick(course.id)}
                    >
                      <CardContent className="p-4 flex flex-col h-full">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${course.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                            A
                          </div>
                          <Badge variant={course.status === "即将开始" ? "secondary" : course.status === "进行中" ? "default" : "outline"} className="text-xs">
                            {course.status}
                          </Badge>
                        </div>
                        <h4 className="text-white font-medium mb-2 text-sm leading-relaxed">{course.title}</h4>
                        <p className="text-slate-400 text-xs mb-3 line-clamp-2 flex-1">
                          探索代数 2 学习实验室概念难懂？依靠同伴辅导来提升学习进度。
                        </p>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-400 text-xs">{course.instructor}</span>
                          <span className="text-slate-400 text-xs">{course.students}</span>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                            ))}
                            <span className="text-slate-400 text-xs ml-1">难度系数</span>
                          </div>
                          <span className="text-green-400 font-bold text-sm">{course.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - User Info (占1列) */}
            <div className="lg:col-span-1 space-y-6 flex flex-col">
              {/* User Info Card */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">陈</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">陈俊杰 👋</h4>
                      <p className="text-slate-400 text-sm">Fake it until you make it, fighting~</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">我做的课程分析</span>
                      <span className="text-slate-400 text-sm">我做的个数据</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">固定了几个数据</span>
                      <span className="text-slate-400 text-sm">完成不个数字</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 mt-4"
                      onClick={handleBecomeTutor}
                    >
                      成为一名讲师
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-slate-800/50 border-slate-700 flex-1">
                <CardContent className="p-4 space-y-3 h-full">
                  <h4 className="text-white font-medium">待办任务</h4>
                  <div className="space-y-2">
                    <div className="bg-slate-700/50 p-3 rounded">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white text-sm">作业课程：代数2学习实验室</span>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs px-2 py-1">
                          立即上传
                        </Button>
                      </div>
                      <p className="text-slate-400 text-xs">第一部分学业提升工作推荐</p>
                    </div>
                    
                    <div className="bg-slate-700/50 p-3 rounded">
                      <h5 className="text-white text-sm mb-1">今日课程：微积分微分学习实验室</h5>
                      <p className="text-slate-400 text-xs">精华分析的内容，基本涉及主要</p>
                      <p className="text-green-400 text-xs">距离上课还有4小时</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Latest Courses - Full Width */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">最新课程</h3>
              <div className="flex items-center space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">全部难易度</SelectItem>
                    <SelectItem value="g1-5">G1-5</SelectItem>
                    <SelectItem value="g6-8">G6-8</SelectItem>
                    <SelectItem value="g9-12">G9-12</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-subject">
                  <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-subject">全部课程类别</SelectItem>
                    <SelectItem value="english">英语</SelectItem>
                    <SelectItem value="math">数学</SelectItem>
                    <SelectItem value="science">科学</SelectItem>
                    <SelectItem value="economics">经济</SelectItem>
                    <SelectItem value="humanities">人文</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-time">
                  <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-time">课程时间段</SelectItem>
                    <SelectItem value="morning">7:00-9:00</SelectItem>
                    <SelectItem value="afternoon">16:00-19:00</SelectItem>
                    <SelectItem value="evening">19:00-22:00</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-language">
                  <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-language">授课语言</SelectItem>
                    <SelectItem value="english">英语</SelectItem>
                    <SelectItem value="chinese">中文</SelectItem>
                    <SelectItem value="french">法语</SelectItem>
                    <SelectItem value="german">德语</SelectItem>
                    <SelectItem value="spanish">西班牙语</SelectItem>
                    <SelectItem value="italian">意大利语</SelectItem>
                    <SelectItem value="japanese">日语</SelectItem>
                    <SelectItem value="korean">韩语</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 p-2">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 p-2">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {latestCourses.map((course) => (
                <Card 
                  key={course.id} 
                  className="bg-slate-800/50 border-slate-700 cursor-pointer hover:border-green-500 transition-colors"
                  onClick={() => handleCourseClick(course.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        A
                      </div>
                      <Badge variant={course.status === "即将开始" ? "secondary" : course.status === "进行中" ? "default" : "outline"} className="text-xs">
                        {course.status}
                      </Badge>
                    </div>
                    <h4 className="text-white font-medium mb-2 text-sm">{course.title}</h4>
                    <p className="text-slate-400 text-xs mb-3 line-clamp-2">
                      {course.title === "PHP工程" ? "Learn Php Codeigniter and understand working with MVC and HMVC code by using to hero" : 
                       course.title === "生物学" ? "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills..." :
                       course.title === "数据统计" ? "Dive in and learn React 16.8 from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js..." : 
                       "探索代数 2 学习实验室概念难懂？依靠同伴辅导来提升学习进度"}
                    </p>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-400 text-xs">{course.instructor}</span>
                      <span className="text-slate-400 text-xs">{course.students}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                        ))}
                      </div>
                      <span className="text-green-400 font-bold text-xs">{course.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Become Tutor Dialog */}
          <Dialog open={isBecomeTutorDialogOpen} onOpenChange={setIsBecomeTutorDialogOpen}>
            <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-md">
              <DialogHeader>
                <DialogTitle className="text-white text-center">当前经验值 80/300</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-center text-slate-300 text-sm">
                  加油！积满300经验值就可以申请成为小老师啦
                </p>
                
                <div className="space-y-3">
                  <div className="bg-slate-700/50 p-3 rounded flex items-center justify-between">
                    <div>
                      <div className="text-white text-sm">任务一 上线满15分钟</div>
                      <div className="text-green-400 text-xs">经验值 +5 （一天一次，不叠加）</div>
                    </div>
                    <div className="text-green-400 text-xl">✓</div>
                  </div>
                  
                  <div className="bg-slate-700/50 p-3 rounded flex items-center justify-between">
                    <div>
                      <div className="text-white text-sm">任务二 完整上完一节课</div>
                      <div className="text-green-400 text-xs">经验值 +15 （每个课程都可一次）</div>
                    </div>
                    <div className="text-green-400 text-xl">✓</div>
                  </div>
                  
                  <div className="bg-slate-700/50 p-3 rounded flex items-center justify-between">
                    <div>
                      <div className="text-white text-sm">任务三 完整参加一次讨论</div>
                      <div className="text-green-400 text-xs">经验值 +20 （次数不限）</div>
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">
                      去完成
                    </Button>
                  </div>
                  
                  <div className="bg-slate-700/50 p-3 rounded flex items-center justify-between">
                    <div>
                      <div className="text-white text-sm">任务四 完整参加一次1V1老师辅导</div>
                      <div className="text-green-400 text-xs">经验值 +15 （一周仅限一次）</div>
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">
                      去完成
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
