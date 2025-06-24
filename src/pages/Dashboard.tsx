
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Play, ArrowRight, MessageSquare, Eye, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

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

  const discussions = [
    {
      id: 1,
      user: "Nicholas Simmons",
      time: "23分 2秒前 回答",
      title: "AP生物考试时间管理有什么技巧?",
      content: "我看到网上有人说考了7分，但呢我觉得快速溜题目，再快速回人想该，而且让他们。我需要在不去分的情况下，花更多时间做题通过。",
      likes: 40,
      views: 75,
      replies: 3,
      tag: "生物"
    },
    {
      id: 2,
      user: "Lori Rodriguez",
      time: "19分钟前回答",
      title: "Escriba, plugin for Copy&Paste selected overrides",
      content: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl.",
      likes: -81,
      views: 75,
      replies: 3,
      tag: "物理"
    }
  ];

  const categories = [
    { name: "全部讨论", count: "", color: "bg-transparent", active: true },
    { name: "代数", count: "383", color: "bg-blue-500" },
    { name: "几何学", count: "268", color: "bg-yellow-500" },
    { name: "SAT", count: "197", color: "bg-red-500" },
    { name: "生物学", count: "661", color: "bg-green-500" },
    { name: "物理学", count: "845", color: "bg-blue-400" },
    { name: "统计数据", count: "108", color: "bg-purple-500" },
    { name: "微积分实验室", count: "232", color: "bg-orange-500" }
  ];

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Content - My Courses */}
            <div className="lg:col-span-2 space-y-6">
              {/* My Courses */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">我的课程</h3>
                  <div className="flex items-center space-x-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white text-xs">
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
                      <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="type">课程类型</SelectItem>
                        <SelectItem value="live">直播课</SelectItem>
                        <SelectItem value="record">录播课</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="direction">
                      <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="direction">课程方向</SelectItem>
                        <SelectItem value="math">数学</SelectItem>
                        <SelectItem value="science">科学</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {courses.map((course) => (
                    <Card key={course.id} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-colors cursor-pointer">
                      <CardContent className="p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className={`w-6 h-6 ${course.color} rounded-full flex items-center justify-center text-white font-bold text-xs`}>
                            A
                          </div>
                          <Badge variant={course.status === "即将开始" ? "secondary" : course.status === "进行中" ? "default" : "outline"} className="text-xs">
                            {course.status}
                          </Badge>
                        </div>
                        <h4 className="text-white font-medium mb-1 text-sm">{course.title}</h4>
                        <p className="text-slate-400 text-xs mb-2 line-clamp-2">
                          探索代数 2 学习实验室概念难懂？依靠同伴辅导来提升学习进度
                        </p>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-400 text-xs">{course.instructor}</span>
                          <span className="text-slate-400 text-xs">{course.students}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-2 w-2 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                            ))}
                            <span className="text-slate-400 text-xs ml-1">难度系数</span>
                          </div>
                          <span className="text-green-400 font-bold text-xs">{course.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center space-x-2">
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-slate-400 text-sm">1 / 5</span>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Sidebar - User Info and Tasks */}
            <div className="space-y-6">
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
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700 mt-4">
                      成为一名讲师
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4 space-y-3">
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
                  <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white text-xs">
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
                  <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="type">课程类型</SelectItem>
                    <SelectItem value="live">直播课</SelectItem>
                    <SelectItem value="record">录播课</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="direction">
                  <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="direction">课程方向</SelectItem>
                    <SelectItem value="math">数学</SelectItem>
                    <SelectItem value="science">科学</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {latestCourses.map((course) => (
                <Card key={course.id} className="bg-slate-800/50 border-slate-700">
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

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2">
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-slate-400 text-sm">1 / 5</span>
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Discussion Area */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Hot Discussions */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex space-x-6">
                  <h3 className="text-xl font-bold text-green-400 border-b-2 border-green-400 pb-1">热门话题</h3>
                  <h3 className="text-xl text-slate-400 pb-1">最新话题</h3>
                </div>
                <Button variant="ghost" size="sm" className="text-slate-400">
                  查看全部
                </Button>
              </div>

              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex-shrink-0"></div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-white font-medium text-sm">{discussion.user}</h4>
                              <p className="text-slate-400 text-xs">{discussion.time}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">{discussion.tag}</Badge>
                          </div>
                          <h5 className="text-white font-medium text-sm">{discussion.title}</h5>
                          <p className="text-slate-400 text-xs line-clamp-2">{discussion.content}</p>
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="sm" className="text-green-400 p-0 h-auto text-xs">
                                  👍 +{Math.abs(discussion.likes)}
                                </Button>
                                <Button variant="ghost" size="sm" className="text-slate-400 p-0 h-auto text-xs">
                                  👎 -81
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-slate-400 text-xs">
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>阅读 {discussion.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageSquare className="h-3 w-3" />
                                <span>评论 {discussion.replies}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              <Button className="w-full bg-green-600 hover:bg-green-700 h-12">
                发起话题讨论
              </Button>
              
              {/* Discussion Categories */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-sm">讨论专区</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className={`flex items-center justify-between p-2 rounded cursor-pointer hover:bg-slate-700/50 ${category.active ? 'text-green-400' : 'text-slate-300'}`}>
                      <div className="flex items-center space-x-2">
                        {category.color !== "bg-transparent" && (
                          <div className={`w-3 h-3 ${category.color} rounded-full`}></div>
                        )}
                        <span className="text-sm">{category.name}</span>
                      </div>
                      {category.count && (
                        <span className={`text-xs px-2 py-1 rounded-full ${category.active ? 'bg-green-600 text-white' : 'bg-slate-600 text-slate-300'}`}>
                          {category.count}
                        </span>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
