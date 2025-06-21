
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Play, ArrowRight, MessageSquare, Eye, Clock } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const courses = [
    { id: 1, title: "代数2学习实验室", instructor: "JuanD MeGon", students: "2581人报名", rating: 4.8, price: "¥998", status: "即将开始", color: "bg-red-500" },
    { id: 2, title: "科科微积分学习实验室", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.9, price: "¥1288", status: "进行中", color: "bg-yellow-500" },
    { id: 3, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", rating: 4.7, price: "¥1288", status: "进行中", color: "bg-red-500" },
    { id: 4, title: "数据统计", instructor: "Debra Liver", students: "3579人参与", rating: 4.8, price: "¥1288", status: "进行中", color: "bg-blue-500" }
  ];

  const discussions = [
    {
      id: 1,
      user: "Nicholas Simmons",
      time: "2分钟前",
      title: "AP生物考试时间管理有什么技巧?",
      content: "我看到网上有人说考了7分，但呢我觉得快速溜题目，再快速回人想该，而且让他们。我需要在不去分的情况下，花更多时间做题通过。",
      likes: 40,
      views: 75,
      replies: 5,
      tag: "生物"
    },
    {
      id: 2,
      user: "Lori Rodriguez",
      time: "19分钟前",
      title: "Escriba, plugin for Copy&Paste selected overrides",
      content: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl.",
      likes: -81,
      views: 75,
      replies: 5,
      tag: "物理"
    }
  ];

  const categories = [
    { name: "代数", count: 383, color: "bg-blue-500" },
    { name: "几何学", count: 268, color: "bg-yellow-500" },
    { name: "SAT", count: 197, color: "bg-red-500" },
    { name: "生物学", count: 661, color: "bg-green-500" },
    { name: "物理学", count: 845, color: "bg-blue-400" },
    { name: "统计数据", count: 108, color: "bg-purple-500" },
    { name: "微积分实验室", count: 232, color: "bg-orange-500" }
  ];

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title="首页" />
        
        <main className="p-6 space-y-8">
          {/* Hero Section */}
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 border-0 text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">探索代数 2 学习实验室</h2>
                  <p className="text-lg opacity-90">概念难懂？依靠同伴辅导来提升学习进度</p>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    立即开始
                  </Button>
                </div>
                <div className="hidden md:block">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="text-6xl">👨‍🎓</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Info */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">我的课程</h3>
              <div className="flex items-center space-x-4 text-sm text-slate-400">
                <span>选择：全部</span>
                <Button variant="outline" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">👤</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">陈俊杰 👋</h4>
                  <p className="text-slate-400 text-sm">Fike it until you make it, fighting~</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">成就</span>
                  <span className="text-green-400">完成全部</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400">700 积分</span>
                    <span className="text-slate-400">学习达人</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">500 积分</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">300 积分</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 mt-4">
                  成为一名讲师
                </Button>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-colors cursor-pointer" onClick={() => navigate(`/course/${course.id}`)}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-8 h-8 ${course.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                      A
                    </div>
                    <Badge variant={course.status === "即将开始" ? "secondary" : "default"}>
                      {course.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-400 text-sm">
                    探索代数 2 学习实验室概念难懂？依靠同伴辅导来提升学习进度探索代数 2 学习实验室概念难懂
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
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

          {/* Hot Discussions */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-green-400">热门话题</h3>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="border-green-500 text-green-400">
                  最新话题
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400">
                  查看全部
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex-shrink-0"></div>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-white font-medium">{discussion.user}</h4>
                              <p className="text-slate-400 text-sm">{discussion.time}</p>
                            </div>
                            <Badge variant="secondary">{discussion.tag}</Badge>
                          </div>
                          <h5 className="text-white font-medium">{discussion.title}</h5>
                          <p className="text-slate-400 text-sm">{discussion.content}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Button variant="ghost" size="sm" className="text-green-400 p-0 h-auto">
                                  👍 +{Math.abs(discussion.likes)}
                                </Button>
                                <Button variant="ghost" size="sm" className="text-slate-400 p-0 h-auto">
                                  👎
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-slate-400 text-sm">
                              <div className="flex items-center space-x-1">
                                <Eye className="h-4 w-4" />
                                <span>阅读 {discussion.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageSquare className="h-4 w-4" />
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

              <div className="space-y-6">
                <Button className="w-full bg-green-600 hover:bg-green-700 h-12">
                  发起话题讨论
                </Button>
                
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">讨论专区</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="ghost" className="w-full justify-start text-green-400">
                      🗨️ 全部讨论
                    </Button>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.name} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className={`w-4 h-4 ${category.color} rounded-full`}></div>
                            <span className="text-slate-300">{category.name}</span>
                          </div>
                          <span className="text-slate-400 text-sm">{category.count}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
