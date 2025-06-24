import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Star, ChevronRight, BookOpen, Calendar, Clock, Users, MessageSquare, TrendingUp, CheckCircle, AlertCircle, ChevronLeft, Plus } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState("最新话题");
  const [isCreateTopicOpen, setIsCreateTopicOpen] = useState(false);

  const myCourses = [
    { id: 1, title: "代数2学习实验室", instructor: "JuanD MeGon", progress: 75, status: "进行中", color: "bg-red-500" },
    { id: 2, title: "计算机工程", instructor: "John", progress: 50, status: "已结束", color: "bg-yellow-500" },
    { id: 3, title: "生物学", instructor: "JuanD MeGon", progress: 25, status: "进行中", color: "bg-red-500" },
    { id: 4, title: "数据统计", instructor: "Debra Liver", progress: 90, status: "进行中", color: "bg-blue-500" },
  ];

  const latestCourses = [
    { id: 5, title: "生物学", instructor: "JuanD MeGon", rating: 4.7, students: "3579人参与", price: "¥998", status: "进行中", color: "bg-blue-500" },
    { id: 6, title: "计算机工程", instructor: "Janice Carroll", rating: 4.9, students: "3579人参与", price: "¥998", status: "已结束", color: "bg-yellow-500" },
    { id: 7, title: "生物学", instructor: "JuanD MeGon", rating: 4.7, students: "3579人参与", price: "¥998", status: "进行中", color: "bg-red-500" },
    { id: 8, title: "计算机工程", instructor: "Janice Carroll", rating: 4.9, students: "3579人参与", price: "¥998", status: "已结束", color: "bg-yellow-500" },
  ];

  const todoTasks = [
    { id: 1, title: "完成代数作业", course: "代数2学习实验室", deadline: "明天 23:59", completed: false, urgent: true },
    { id: 2, title: "阅读计算机工程导论", course: "计算机工程", deadline: "后天 18:00", completed: false, urgent: false },
    { id: 3, title: "提交生物学实验报告", course: "生物学", deadline: "下周一 9:00", completed: true, urgent: false },
  ];

  const topics = [
    { id: 1, title: "AP生物考试时间管理有什么技巧?", author: "Nicholas Simmons", category: "生物", replies: 15, time: "2小时前" },
    { id: 2, title: "如何提高数学解题速度？", author: "Sarah Johnson", category: "数学", replies: 8, time: "4小时前" },
    { id: 3, title: "物理力学部分重难点总结", author: "David Chen", category: "物理", replies: 22, time: "1天前" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "即将开始": return "bg-orange-500";
      case "进行中": return "bg-blue-500";
      case "已结束": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getCurrentTopics = () => {
    if (selectedTopic === "最新话题") {
      return topics;
    } else if (selectedTopic === "热门讨论") {
      return topics.slice().sort((a, b) => b.replies - a.replies);
    } else {
      return topics.slice(0, 2);
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title="首页" />
        
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - My Courses */}
            <div className="col-span-8">
              {/* My Courses Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white">我的课程</h2>
                  <div className="flex items-center space-x-3">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-28 bg-slate-800/50 border-slate-600 text-white">
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
                      <SelectTrigger className="w-28 bg-slate-800/50 border-slate-600 text-white">
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
                      <SelectTrigger className="w-28 bg-slate-800/50 border-slate-600 text-white">
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
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 h-80">
                  {myCourses.slice(0, 4).map((course) => (
                    <Card key={course.id} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-colors cursor-pointer group h-36" onClick={() => navigate(`/course/${course.id}`)}>
                      <CardContent className="p-4 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className={`w-8 h-8 ${course.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                              {course.title.charAt(0)}
                            </div>
                            <Badge className={`${getStatusColor(course.status)} text-white text-xs`}>
                              {course.status}
                            </Badge>
                          </div>
                          <h3 className="text-white text-sm font-medium mb-2 line-clamp-2">{course.title}</h3>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-400">进度</span>
                            <span className="text-green-400">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-1.5">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Latest Courses Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white">最新课程</h2>
                  <div className="flex items-center space-x-3">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-28 bg-slate-800/50 border-slate-600 text-white">
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
                      <SelectTrigger className="w-28 bg-slate-800/50 border-slate-600 text-white">
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
                      <SelectTrigger className="w-28 bg-slate-800/50 border-slate-600 text-white">
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
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                  {latestCourses.slice(0, 4).map((course) => (
                    <Card key={course.id} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-colors cursor-pointer" onClick={() => navigate(`/course/${course.id}`)}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-8 h-8 ${course.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                            {course.title.charAt(0)}
                          </div>
                          <Badge className={`${getStatusColor(course.status)} text-white text-xs`}>
                            {course.status}
                          </Badge>
                        </div>
                        <h3 className="text-white text-sm font-medium mb-2 line-clamp-2">{course.title}</h3>
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                          ))}
                          <span className="text-slate-400 text-xs ml-1">{course.rating}</span>
                        </div>
                        <div className="text-slate-400 text-xs mb-2">{course.students}</div>
                        <div className="text-green-400 font-bold text-sm">{course.price}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-4 space-y-6">
              {/* Personal Info Card */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">陈</span>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-medium">陈俊杰</h3>
                      <p className="text-slate-400 text-sm">高三 (1) 班</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-green-400 text-xl font-bold">4</div>
                      <div className="text-slate-400 text-xs">已学课程</div>
                    </div>
                    <div>
                      <div className="text-blue-400 text-xl font-bold">256</div>
                      <div className="text-slate-400 text-xs">学习时长</div>
                    </div>
                    <div>
                      <div className="text-yellow-400 text-xl font-bold">89</div>
                      <div className="text-slate-400 text-xs">学习积分</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Discussion Area */}
              <div className="space-y-4">
                {/* Create Topic Button */}
                <div className="flex justify-end">
                  <Dialog open={isCreateTopicOpen} onOpenChange={setIsCreateTopicOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        发起话题讨论
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>发起话题讨论</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">标题</label>
                          <Input placeholder="请输入讨论标题" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">分类</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="选择讨论分类" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="math">数学</SelectItem>
                              <SelectItem value="physics">物理</SelectItem>
                              <SelectItem value="chemistry">化学</SelectItem>
                              <SelectItem value="biology">生物</SelectItem>
                              <SelectItem value="other">其他</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">内容</label>
                          <Textarea placeholder="请输入讨论内容..." rows={8} />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" onClick={() => setIsCreateTopicOpen(false)}>
                            取消
                          </Button>
                          <Button className="bg-green-500 hover:bg-green-600">
                            发布讨论
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Discussion Area Card */}
                <Card className="bg-slate-800/50 border-slate-700 h-80">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-lg">讨论专区</CardTitle>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-green-400 hover:text-green-300"
                        onClick={() => navigate('/forum')}
                      >
                        查看全部 <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      {["最新话题", "热门讨论", "我的参与"].map((tab) => (
                        <Button
                          key={tab}
                          variant={selectedTopic === tab ? "default" : "ghost"}
                          size="sm"
                          className={selectedTopic === tab ? "bg-green-500 text-white" : "text-slate-400"}
                          onClick={() => setSelectedTopic(tab)}
                        >
                          {tab}
                        </Button>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 max-h-48 overflow-y-auto">
                      {getCurrentTopics().map((topic) => (
                        <div 
                          key={topic.id} 
                          className="p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                          onClick={() => navigate('/forum')}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-white text-sm font-medium line-clamp-2 flex-1 mr-2">{topic.title}</h4>
                            <Badge variant="outline" className="text-xs shrink-0">{topic.category}</Badge>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-400">{topic.author}</span>
                            <div className="flex items-center space-x-3 text-slate-400">
                              <span className="flex items-center">
                                <MessageSquare className="h-3 w-3 mr-1" />
                                {topic.replies}
                              </span>
                              <span>{topic.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Todo Tasks */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg">待办任务</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {todoTasks.map((task) => (
                      <div key={task.id} className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                        <div className="shrink-0">
                          {task.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : task.urgent ? (
                            <AlertCircle className="h-5 w-5 text-orange-500" />
                          ) : (
                            <Clock className="h-5 w-5 text-blue-500" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium ${task.completed ? 'text-slate-400 line-through' : 'text-white'}`}>
                            {task.title}
                          </p>
                          <p className="text-xs text-slate-400">{task.course} • {task.deadline}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
