
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
  Users, 
  BookOpen, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Search,
  Bell,
  TrendingUp,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  FileText,
  Activity,
  Filter
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const stats = [
    { title: "总用户数", value: "1,234", change: "+12", icon: Users, color: "text-blue-500", bgColor: "bg-blue-500/10" },
    { title: "总课程数", value: "56", change: "+3", icon: BookOpen, color: "text-green-500", bgColor: "bg-green-500/10" },
    { title: "活跃讨论", value: "789", change: "+45", icon: MessageSquare, color: "text-orange-500", bgColor: "bg-orange-500/10" },
    { title: "今日访问", value: "2,345", change: "+156", icon: TrendingUp, color: "text-purple-500", bgColor: "bg-purple-500/10" }
  ];

  const users = [
    { id: 1, name: "陈俊杰", email: "chen@example.com", role: "学生", status: "活跃", courses: 3, lastLogin: "2小时前", verified: true },
    { id: 2, name: "李小明", email: "li@example.com", role: "教师", status: "活跃", courses: 8, lastLogin: "30分钟前", verified: true },
    { id: 3, name: "王丽", email: "wang@example.com", role: "学生", status: "非活跃", courses: 1, lastLogin: "3天前", verified: false },
    { id: 4, name: "张教授", email: "zhang@example.com", role: "教师", status: "活跃", courses: 12, lastLogin: "1小时前", verified: true }
  ];

  const courses = [
    { 
      id: 1, 
      title: "代数2学习实验室", 
      instructor: "JuanD MeGon", 
      students: 258, 
      status: "进行中", 
      price: 998,
      type: "直播课",
      difficulty: "中等",
      category: "数学",
      completion: 75
    },
    { 
      id: 2, 
      title: "微积分微分学习实验室", 
      instructor: "Debra Liver", 
      students: 357, 
      status: "即将开始", 
      price: 1288,
      type: "录播课",
      difficulty: "困难",
      category: "数学",
      completion: 0
    },
    { 
      id: 3, 
      title: "PHP工程", 
      instructor: "John", 
      students: 125, 
      status: "已结束", 
      price: 899,
      type: "混合课",
      difficulty: "中等",
      category: "编程",
      completion: 100
    }
  ];

  const topics = [
    { 
      id: 1, 
      title: "AP生物考试时间管理有什么技巧?", 
      author: "Nicholas Simmons", 
      category: "生物", 
      replies: 15, 
      status: "正常",
      reports: 0,
      views: 234,
      created: "2小时前"
    },
    { 
      id: 2, 
      title: "如何提高数学解题速度？", 
      author: "Sarah Johnson", 
      category: "数学", 
      replies: 8, 
      status: "热门",
      reports: 1,
      views: 567,
      created: "4小时前"
    },
    { 
      id: 3, 
      title: "物理力学部分重难点总结", 
      author: "David Chen", 
      category: "物理", 
      replies: 22, 
      status: "精华",
      reports: 0,
      views: 892,
      created: "1天前"
    }
  ];

  const pendingReviews = [
    { id: 1, type: "话题", title: "关于考试作弊的讨论", author: "匿名用户", reports: 3, severity: "高" },
    { id: 2, type: "评论", title: "不当言论举报", author: "测试用户", reports: 1, severity: "中" },
    { id: 3, type: "课程", title: "课程内容质量问题", author: "学生A", reports: 2, severity: "低" }
  ];

  const handleLogout = () => {
    toast({
      title: "退出成功",
      description: "已安全退出管理后台",
    });
    navigate("/admin/login");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "进行中": return <Badge className="bg-blue-500">进行中</Badge>;
      case "即将开始": return <Badge className="bg-green-500">即将开始</Badge>;
      case "已结束": return <Badge className="bg-gray-500">已结束</Badge>;
      case "活跃": return <Badge className="bg-green-500">活跃</Badge>;
      case "非活跃": return <Badge className="bg-gray-500">非活跃</Badge>;
      case "正常": return <Badge variant="outline">正常</Badge>;
      case "热门": return <Badge className="bg-orange-500">热门</Badge>;
      case "精华": return <Badge className="bg-purple-500">精华</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex">
        {/* Modern Sidebar */}
        <div className="w-64 bg-white shadow-xl border-r border-slate-200 min-h-screen">
          {/* Logo */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎓</span>
              </div>
              <div>
                <h1 className="font-bold text-slate-800">Online Studies</h1>
                <p className="text-xs text-slate-500">管理后台</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            <Button 
              variant={activeTab === "overview" ? "default" : "ghost"} 
              className="w-full justify-start text-slate-700 hover:bg-slate-50"
              onClick={() => setActiveTab("overview")}
            >
              <BarChart3 className="mr-3 h-4 w-4" />
              数据概览
            </Button>
            <Button 
              variant={activeTab === "users" ? "default" : "ghost"} 
              className="w-full justify-start text-slate-700 hover:bg-slate-50"
              onClick={() => setActiveTab("users")}
            >
              <Users className="mr-3 h-4 w-4" />
              用户管理
            </Button>
            <Button 
              variant={activeTab === "courses" ? "default" : "ghost"} 
              className="w-full justify-start text-slate-700 hover:bg-slate-50"
              onClick={() => setActiveTab("courses")}
            >
              <BookOpen className="mr-3 h-4 w-4" />
              课程管理
            </Button>
            <Button 
              variant={activeTab === "topics" ? "default" : "ghost"} 
              className="w-full justify-start text-slate-700 hover:bg-slate-50"
              onClick={() => setActiveTab("topics")}
            >
              <MessageSquare className="mr-3 h-4 w-4" />
              话题管理
            </Button>
            <Button 
              variant={activeTab === "analytics" ? "default" : "ghost"} 
              className="w-full justify-start text-slate-700 hover:bg-slate-50"
              onClick={() => setActiveTab("analytics")}
            >
              <Activity className="mr-3 h-4 w-4" />
              数据分析
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-slate-700 hover:bg-slate-50"
            >
              <Settings className="mr-3 h-4 w-4" />
              系统设置
            </Button>
          </nav>

          {/* Logout Button */}
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

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Header */}
          <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">管理面板</h1>
                <p className="text-slate-600">欢迎使用 Online Studies 教育管理系统</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="搜索用户、课程、话题..."
                    className="pl-10 w-80 bg-slate-50 border-slate-200"
                  />
                </div>
                
                <Button variant="outline" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    3
                  </span>
                </Button>
                
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <main className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <Card key={stat.title} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-600 text-sm">{stat.title}</p>
                        <div className="flex items-center space-x-2">
                          <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                          <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Content Moderation */}
                <Card className="border-slate-200 shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-slate-800">
                      <Shield className="h-5 w-5 mr-2" />
                      内容审核
                      <Badge className="ml-2 bg-red-500">{pendingReviews.length}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {pendingReviews.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <Badge variant="outline">{item.type}</Badge>
                              <Badge variant={item.severity === "高" ? "destructive" : item.severity === "中" ? "default" : "secondary"}>
                                {item.severity}风险
                              </Badge>
                            </div>
                            <p className="text-sm font-medium text-slate-800">{item.title}</p>
                            <p className="text-xs text-slate-600">举报次数: {item.reports}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-green-500 hover:bg-green-600">
                              <CheckCircle className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="destructive">
                              <XCircle className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activities */}
                <Card className="border-slate-200 shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-slate-800">
                      <Activity className="h-5 w-5 mr-2" />
                      最近活动
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">新用户注册</p>
                          <p className="text-xs text-slate-600">12名用户在过去24小时内注册</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">课程发布</p>
                          <p className="text-xs text-slate-600">3门新课程等待审核</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">热门讨论</p>
                          <p className="text-xs text-slate-600">45个新话题今日发布</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "users" && (
              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-slate-800">用户管理</CardTitle>
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
                        <TableHead>角色</TableHead>
                        <TableHead>状态</TableHead>
                        <TableHead>课程数</TableHead>
                        <TableHead>最后登录</TableHead>
                        <TableHead>认证</TableHead>
                        <TableHead>操作</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                {user.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium text-slate-800">{user.name}</p>
                                <p className="text-xs text-slate-600">{user.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={user.role === "教师" ? "default" : "secondary"}>
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(user.status)}</TableCell>
                          <TableCell className="text-slate-800">{user.courses}</TableCell>
                          <TableCell className="text-slate-600 text-sm">{user.lastLogin}</TableCell>
                          <TableCell>
                            {user.verified ? (
                              <Badge className="bg-green-500">已认证</Badge>
                            ) : (
                              <Badge variant="outline">未认证</Badge>
                            )}
                          </TableCell>
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
                </CardContent>
              </Card>
            )}

            {activeTab === "courses" && (
              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-slate-800">课程管理</CardTitle>
                    <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          创建课程
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>创建新课程</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">课程类型</label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="选择课程类型" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="live">直播课</SelectItem>
                                  <SelectItem value="recorded">录播课</SelectItem>
                                  <SelectItem value="hybrid">混合课</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">难度等级</label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="选择难度等级" />
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
                            <label className="text-sm font-medium mb-2 block">课程标题</label>
                            <Input placeholder="请输入课程标题" />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">课程简介</label>
                            <Textarea placeholder="请输入课程简介" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">价格</label>
                              <Input placeholder="0" type="number" />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">分类</label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="选择分类" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="math">数学</SelectItem>
                                  <SelectItem value="science">科学</SelectItem>
                                  <SelectItem value="language">语言</SelectItem>
                                  <SelectItem value="programming">编程</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                              取消
                            </Button>
                            <Button>创建课程</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>课程信息</TableHead>
                        <TableHead>类型</TableHead>
                        <TableHead>难度</TableHead>
                        <TableHead>学生数</TableHead>
                        <TableHead>状态</TableHead>
                        <TableHead>完成率</TableHead>
                        <TableHead>价格</TableHead>
                        <TableHead>操作</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {courses.map((course) => (
                        <TableRow key={course.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium text-slate-800">{course.title}</p>
                              <p className="text-xs text-slate-600">{course.instructor}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{course.type}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary">{course.difficulty}</Badge>
                          </TableCell>
                          <TableCell className="text-slate-800">{course.students}</TableCell>
                          <TableCell>{getStatusBadge(course.status)}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-slate-200 rounded-full h-2">
                                <div 
                                  className="bg-blue-500 h-2 rounded-full" 
                                  style={{ width: `${course.completion}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-slate-600">{course.completion}%</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-slate-800">¥{course.price}</TableCell>
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
                </CardContent>
              </Card>
            )}

            {activeTab === "topics" && (
              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-slate-800">话题管理</CardTitle>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      创建板块
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>话题信息</TableHead>
                        <TableHead>分类</TableHead>
                        <TableHead>状态</TableHead>
                        <TableHead>数据</TableHead>
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
                              <p className="font-medium text-slate-800 max-w-xs truncate">{topic.title}</p>
                              <p className="text-xs text-slate-600">{topic.author}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{topic.category}</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(topic.status)}</TableCell>
                          <TableCell>
                            <div className="text-xs text-slate-600">
                              <div>浏览: {topic.views}</div>
                              <div>回复: {topic.replies}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            {topic.reports > 0 ? (
                              <Badge variant="destructive">{topic.reports}</Badge>
                            ) : (
                              <span className="text-slate-400">无</span>
                            )}
                          </TableCell>
                          <TableCell className="text-slate-600 text-sm">{topic.created}</TableCell>
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
