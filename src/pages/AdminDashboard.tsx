
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  MessageSquare, 
  BookOpen, 
  Users, 
  Shield, 
  Search,
  Bell,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  Filter,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Calendar,
  FileText,
  UserCheck,
  UserX,
  Star,
  TrendingUp,
  BarChart3,
  Activity
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedSection, setSelectedSection] = useState("topics");

  // 模拟数据
  const stats = [
    { title: "总话题数", value: "1,245", change: "+18", icon: MessageSquare, color: "text-blue-500" },
    { title: "总课程数", value: "89", change: "+5", icon: BookOpen, color: "text-green-500" },
    { title: "总用户数", value: "3,567", change: "+125", icon: Users, color: "text-purple-500" },
    { title: "待审核内容", value: "23", change: "+7", icon: AlertTriangle, color: "text-orange-500" }
  ];

  const topics = [
    { 
      id: 1, 
      title: "AP生物考试时间管理技巧分享", 
      author: "张小明", 
      category: "生物", 
      status: "已发布", 
      replies: 15, 
      views: 234,
      reportCount: 0,
      created: "2024-01-15",
      lastReply: "2小时前"
    },
    { 
      id: 2, 
      title: "数学微积分学习方法讨论", 
      author: "李老师", 
      category: "数学", 
      status: "待审核", 
      replies: 8, 
      views: 156,
      reportCount: 1,
      created: "2024-01-14",
      lastReply: "30分钟前"
    },
    { 
      id: 3, 
      title: "物理力学重难点总结", 
      author: "王同学", 
      category: "物理", 
      status: "已发布", 
      replies: 22, 
      views: 456,
      reportCount: 0,
      created: "2024-01-13",
      lastReply: "1小时前"
    }
  ];

  const courses = [
    {
      id: 1,
      title: "高等数学微积分基础",
      instructor: "张教授",
      type: "直播课",
      difficulty: "中等",
      grade: "高三",
      status: "进行中",
      students: 156,
      rating: 4.8,
      chapters: 12,
      duration: "120小时",
      price: 1299
    },
    {
      id: 2,
      title: "AP生物学习实验室",
      instructor: "李老师",
      type: "录播课",
      difficulty: "困难",
      grade: "高二",
      status: "已发布",
      students: 89,
      rating: 4.6,
      chapters: 8,
      duration: "80小时",
      price: 999
    }
  ];

  const users = [
    {
      id: 1,
      name: "陈俊杰",
      email: "chen@example.com",
      role: "学生",
      grade: "高三(1)班",
      status: "活跃",
      coursesEnrolled: 5,
      completionRate: 85,
      lastLogin: "2小时前",
      totalStudyTime: "156小时",
      phoneVerified: true,
      wechatBound: true
    },
    {
      id: 2,
      name: "李小明",
      email: "li@example.com",
      role: "教师",
      grade: "高中部",
      status: "活跃",
      coursesEnrolled: 12,
      completionRate: 95,
      lastLogin: "30分钟前",
      totalStudyTime: "320小时",
      phoneVerified: true,
      wechatBound: true
    }
  ];

  const handleLogout = () => {
    toast({
      title: "退出成功",
      description: "已安全退出管理系统",
    });
    navigate("/admin/login");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "已发布": return <Badge className="bg-green-500">已发布</Badge>;
      case "待审核": return <Badge className="bg-orange-500">待审核</Badge>;
      case "已下架": return <Badge className="bg-gray-500">已下架</Badge>;
      case "进行中": return <Badge className="bg-blue-500">进行中</Badge>;
      case "活跃": return <Badge className="bg-green-500">活跃</Badge>;
      case "非活跃": return <Badge className="bg-gray-500">非活跃</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* 侧边栏 */}
        <div className="w-64 bg-white shadow-lg border-r border-gray-200 min-h-screen">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎓</span>
              </div>
              <div>
                <h1 className="font-bold text-gray-800 text-lg">教育管理系统</h1>
                <p className="text-xs text-gray-500">Admin Dashboard</p>
              </div>
            </div>
          </div>

          {/* 导航菜单 */}
          <nav className="p-4 space-y-2">
            <Button 
              variant={selectedSection === "overview" ? "default" : "ghost"} 
              className="w-full justify-start"
              onClick={() => setSelectedSection("overview")}
            >
              <BarChart3 className="mr-3 h-4 w-4" />
              数据概览
            </Button>
            <Button 
              variant={selectedSection === "topics" ? "default" : "ghost"} 
              className="w-full justify-start"
              onClick={() => setSelectedSection("topics")}
            >
              <MessageSquare className="mr-3 h-4 w-4" />
              话题管理
            </Button>
            <Button 
              variant={selectedSection === "courses" ? "default" : "ghost"} 
              className="w-full justify-start"
              onClick={() => setSelectedSection("courses")}
            >
              <BookOpen className="mr-3 h-4 w-4" />
              课程管理
            </Button>
            <Button 
              variant={selectedSection === "users" ? "default" : "ghost"} 
              className="w-full justify-start"
              onClick={() => setSelectedSection("users")}
            >
              <Users className="mr-3 h-4 w-4" />
              用户管理
            </Button>
            <Button 
              variant={selectedSection === "permissions" ? "default" : "ghost"} 
              className="w-full justify-start"
              onClick={() => setSelectedSection("permissions")}
            >
              <Shield className="mr-3 h-4 w-4" />
              权限管理
            </Button>
          </nav>

          {/* 退出按钮 */}
          <div className="absolute bottom-4 left-4 right-4">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="mr-3 h-4 w-4" />
              退出登录
            </Button>
          </div>
        </div>

        {/* 主内容区 */}
        <div className="flex-1">
          {/* 顶部导航 */}
          <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">管理面板</h1>
                <p className="text-gray-600">在线教育平台管理系统</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="搜索内容..."
                    className="pl-10 w-80 bg-gray-50 border-gray-200"
                  />
                </div>
                
                <Button variant="outline" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    5
                  </span>
                </Button>
                
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </div>
            </div>
          </header>

          {/* 内容区域 */}
          <main className="p-6">
            {/* 统计卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <Card key={stat.title} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">{stat.title}</p>
                        <div className="flex items-center space-x-2">
                          <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                          <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <div className={`${stat.color} p-3 bg-gray-50 rounded-lg`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 主要内容区域 */}
            {selectedSection === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="h-5 w-5 mr-2" />
                      最近活动
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <MessageSquare className="h-5 w-5 text-blue-500" />
                        <div>
                          <p className="font-medium">新话题发布</p>
                          <p className="text-sm text-gray-600">15个新话题今日发布</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <BookOpen className="h-5 w-5 text-green-500" />
                        <div>
                          <p className="font-medium">课程更新</p>
                          <p className="text-sm text-gray-600">3门课程等待审核</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      待处理事项
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <div>
                          <p className="font-medium">内容举报</p>
                          <p className="text-sm text-gray-600">3条内容等待审核</p>
                        </div>
                        <Button size="sm" variant="outline">处理</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <div>
                          <p className="font-medium">课程审核</p>
                          <p className="text-sm text-gray-600">2门课程等待审核</p>
                        </div>
                        <Button size="sm" variant="outline">审核</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {selectedSection === "topics" && (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>话题管理</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        筛选
                      </Button>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        创建板块
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="posts" className="space-y-4">
                    <TabsList>
                      <TabsTrigger value="posts">帖子管理</TabsTrigger>
                      <TabsTrigger value="categories">板块管理</TabsTrigger>
                      <TabsTrigger value="reports">举报处理</TabsTrigger>
                      <TabsTrigger value="activities">活动管理</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="posts">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>话题信息</TableHead>
                            <TableHead>分类</TableHead>
                            <TableHead>状态</TableHead>
                            <TableHead>数据统计</TableHead>
                            <TableHead>举报</TableHead>
                            <TableHead>创建时间</TableHead>
                            <TableHead>操作</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {topics.map((topic) => (
                            <TableRow key={topic.id}>
                              <TableCell>
                                <div>
                                  <p className="font-medium max-w-xs truncate">{topic.title}</p>
                                  <p className="text-sm text-gray-600">{topic.author}</p>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">{topic.category}</Badge>
                              </TableCell>
                              <TableCell>{getStatusBadge(topic.status)}</TableCell>
                              <TableCell>
                                <div className="text-sm">
                                  <div>浏览: {topic.views}</div>
                                  <div>回复: {topic.replies}</div>
                                </div>
                              </TableCell>
                              <TableCell>
                                {topic.reportCount > 0 ? (
                                  <Badge variant="destructive">{topic.reportCount}</Badge>
                                ) : (
                                  <span className="text-gray-400">无</span>
                                )}
                              </TableCell>
                              <TableCell className="text-sm">{topic.created}</TableCell>
                              <TableCell>
                                <div className="flex space-x-1">
                                  <Button variant="ghost" size="sm">
                                    <Eye className="h-3 w-3" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Edit className="h-3 w-3" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TabsContent>

                    <TabsContent value="categories">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Card className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">数学讨论</h3>
                                <p className="text-sm text-gray-600">125个话题</p>
                              </div>
                              <div className="flex space-x-1">
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </Card>
                          <Card className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">物理答疑</h3>
                                <p className="text-sm text-gray-600">89个话题</p>
                              </div>
                              <div className="flex space-x-1">
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="reports">
                      <div className="space-y-4">
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">不当言论举报</h4>
                              <p className="text-sm text-gray-600">用户举报内容包含不当言论</p>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                通过
                              </Button>
                              <Button size="sm" variant="destructive">
                                <XCircle className="h-3 w-3 mr-1" />
                                删除
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="activities">
                      <div className="space-y-4">
                        <Card className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">数学竞赛报名</h4>
                              <p className="text-sm text-gray-600">156人已报名</p>
                            </div>
                            <Badge className="bg-green-500">进行中</Badge>
                          </div>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}

            {selectedSection === "courses" && (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>课程管理</CardTitle>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      创建课程
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="list" className="space-y-4">
                    <TabsList>
                      <TabsTrigger value="list">课程列表</TabsTrigger>
                      <TabsTrigger value="create">创建课程</TabsTrigger>
                      <TabsTrigger value="schedule">排课管理</TabsTrigger>
                      <TabsTrigger value="feedback">评价反馈</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="list">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>课程信息</TableHead>
                            <TableHead>类型/难度</TableHead>
                            <TableHead>学生数</TableHead>
                            <TableHead>评分</TableHead>
                            <TableHead>状态</TableHead>
                            <TableHead>价格</TableHead>
                            <TableHead>操作</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {courses.map((course) => (
                            <TableRow key={course.id}>
                              <TableCell>
                                <div>
                                  <p className="font-medium">{course.title}</p>
                                  <p className="text-sm text-gray-600">{course.instructor} • {course.grade}</p>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="space-y-1">
                                  <Badge variant="outline">{course.type}</Badge>
                                  <Badge variant="secondary">{course.difficulty}</Badge>
                                </div>
                              </TableCell>
                              <TableCell>{course.students}</TableCell>
                              <TableCell>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                  <span className="text-sm">{course.rating}</span>
                                </div>
                              </TableCell>
                              <TableCell>{getStatusBadge(course.status)}</TableCell>
                              <TableCell>¥{course.price}</TableCell>
                              <TableCell>
                                <div className="flex space-x-1">
                                  <Button variant="ghost" size="sm">
                                    <Eye className="h-3 w-3" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Edit className="h-3 w-3" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TabsContent>

                    <TabsContent value="create">
                      <div className="space-y-6 max-w-2xl">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">课程类型</label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="选择课程类型" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="live">直播课</SelectItem>
                                <SelectItem value="recorded">录播课</SelectItem>
                                <SelectItem value="text">图文课</SelectItem>
                                <SelectItem value="practice">实践课</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">难度等级</label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="选择难度" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="easy">简单</SelectItem>
                                <SelectItem value="medium">中等</SelectItem>
                                <SelectItem value="hard">困难</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">课程标题</label>
                          <Input placeholder="请输入课程标题" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">课程简介</label>
                          <Textarea placeholder="请输入课程简介" rows={4} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">适用年级</label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="选择年级" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="grade1">高一</SelectItem>
                                <SelectItem value="grade2">高二</SelectItem>
                                <SelectItem value="grade3">高三</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">课程价格</label>
                            <Input placeholder="0" type="number" />
                          </div>
                        </div>
                        <Button className="w-full">创建课程</Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}

            {selectedSection === "users" && (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>用户管理</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        筛选
                      </Button>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        添加用户
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>用户信息</TableHead>
                        <TableHead>角色/年级</TableHead>
                        <TableHead>状态</TableHead>
                        <TableHead>学习数据</TableHead>
                        <TableHead>绑定信息</TableHead>
                        <TableHead>最后登录</TableHead>
                        <TableHead>操作</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                {user.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <Badge variant={user.role === "教师" ? "default" : "secondary"}>
                                {user.role}
                              </Badge>
                              <p className="text-sm text-gray-600 mt-1">{user.grade}</p>
                            </div>
                          </TableCell>
                          <TableCell>{getStatusBadge(user.status)}</TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>课程: {user.coursesEnrolled}</div>
                              <div>完成率: {user.completionRate}%</div>
                              <div>学习时长: {user.totalStudyTime}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              {user.phoneVerified && (
                                <Badge variant="outline" className="text-xs">手机</Badge>
                              )}
                              {user.wechatBound && (
                                <Badge variant="outline" className="text-xs">微信</Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-sm">{user.lastLogin}</TableCell>
                          <TableCell>
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <UserX className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}

            {selectedSection === "permissions" && (
              <Card>
                <CardHeader>
                  <CardTitle>权限管理</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">管理员</h3>
                            <p className="text-sm text-gray-600">全部权限</p>
                          </div>
                          <Badge>3人</Badge>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">教师</h3>
                            <p className="text-sm text-gray-600">课程管理权限</p>
                          </div>
                          <Badge>25人</Badge>
                        </div>
                      </Card>
                      <Card className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">学生</h3>
                            <p className="text-sm text-gray-600">基础权限</p>
                          </div>
                          <Badge>1,245人</Badge>
                        </div>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
