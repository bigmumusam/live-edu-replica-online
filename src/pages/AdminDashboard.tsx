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
import { useLanguage } from "@/contexts/LanguageContext";
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
  Filter,
  Globe,
  UserCheck,
  Star,
  Clock,
  Target,
  Award,
  Megaphone
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, language, setLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState("overview");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  // Sample data - in real app, this would come from API
  const stats = [
    { 
      title: t('admin.stats.totalUsers'), 
      value: "1,234", 
      change: "+12", 
      icon: Users, 
      color: "text-blue-500", 
      bgColor: "bg-blue-500/10" 
    },
    { 
      title: t('admin.stats.totalCourses'), 
      value: "56", 
      change: "+3", 
      icon: BookOpen, 
      color: "text-green-500", 
      bgColor: "bg-green-500/10" 
    },
    { 
      title: t('admin.stats.activeDiscussions'), 
      value: "789", 
      change: "+45", 
      icon: MessageSquare, 
      color: "text-orange-500", 
      bgColor: "bg-orange-500/10" 
    },
    { 
      title: t('admin.stats.todayVisits'), 
      value: "2,345", 
      change: "+156", 
      icon: TrendingUp, 
      color: "text-purple-500", 
      bgColor: "bg-purple-500/10" 
    }
  ];

  const users = [
    { 
      id: 1, 
      name: "陈俊杰", 
      email: "chen@example.com", 
      role: language === 'zh' ? "学生" : "Student", 
      status: language === 'zh' ? "活跃" : "Active", 
      courses: 3, 
      lastLogin: language === 'zh' ? "2小时前" : "2 hours ago", 
      verified: true 
    },
    { 
      id: 2, 
      name: "李小明", 
      email: "li@example.com", 
      role: language === 'zh' ? "教师" : "Teacher", 
      status: language === 'zh' ? "活跃" : "Active", 
      courses: 8, 
      lastLogin: language === 'zh' ? "30分钟前" : "30 minutes ago", 
      verified: true 
    },
    { 
      id: 3, 
      name: "王丽", 
      email: "wang@example.com", 
      role: language === 'zh' ? "学生" : "Student", 
      status: language === 'zh' ? "非活跃" : "Inactive", 
      courses: 1, 
      lastLogin: language === 'zh' ? "3天前" : "3 days ago", 
      verified: false 
    },
    { 
      id: 4, 
      name: "张教授", 
      email: "zhang@example.com", 
      role: language === 'zh' ? "教师" : "Teacher", 
      status: language === 'zh' ? "活跃" : "Active", 
      courses: 12, 
      lastLogin: language === 'zh' ? "1小时前" : "1 hour ago", 
      verified: true 
    }
  ];

  const courses = [
    { 
      id: 1, 
      title: language === 'zh' ? "代数2学习实验室" : "Algebra 2 Learning Lab", 
      instructor: "JuanD MeGon", 
      students: 258, 
      status: language === 'zh' ? "进行中" : "In Progress", 
      price: 998,
      type: language === 'zh' ? "直播课" : "Live Course",
      difficulty: language === 'zh' ? "中等" : "Medium",
      category: language === 'zh' ? "数学" : "Mathematics",
      completion: 75
    },
    { 
      id: 2, 
      title: language === 'zh' ? "微积分微分学习实验室" : "Calculus Differential Learning Lab", 
      instructor: "Debra Liver", 
      students: 357, 
      status: language === 'zh' ? "即将开始" : "Upcoming", 
      price: 1288,
      type: language === 'zh' ? "录播课" : "Recorded Course",
      difficulty: language === 'zh' ? "困难" : "Hard",
      category: language === 'zh' ? "数学" : "Mathematics",
      completion: 0
    },
    { 
      id: 3, 
      title: language === 'zh' ? "PHP工程" : "PHP Engineering", 
      instructor: "John Smith", 
      students: 125, 
      status: language === 'zh' ? "已结束" : "Completed", 
      price: 899,
      type: language === 'zh' ? "混合课" : "Mixed Course",
      difficulty: language === 'zh' ? "中等" : "Medium",
      category: language === 'zh' ? "编程" : "Programming",
      completion: 100
    }
  ];

  const topics = [
    { 
      id: 1, 
      title: language === 'zh' ? "AP生物考试时间管理有什么技巧?" : "What are the time management tips for AP Biology exam?", 
      author: "Nicholas Simmons", 
      category: language === 'zh' ? "生物" : "Biology", 
      replies: 15, 
      status: language === 'zh' ? "正常" : "Normal",
      reports: 0,
      views: 234,
      created: language === 'zh' ? "2小时前" : "2 hours ago"
    },
    { 
      id: 2, 
      title: language === 'zh' ? "如何提高数学解题速度？" : "How to improve math problem-solving speed?", 
      author: "Sarah Johnson", 
      category: language === 'zh' ? "数学" : "Mathematics", 
      replies: 8, 
      status: language === 'zh' ? "热门" : "Hot",
      reports: 1,
      views: 567,
      created: language === 'zh' ? "4小时前" : "4 hours ago"
    },
    { 
      id: 3, 
      title: language === 'zh' ? "物理力学部分重难点总结" : "Summary of key and difficult points in physics mechanics", 
      author: "David Chen", 
      category: language === 'zh' ? "物理" : "Physics", 
      replies: 22, 
      status: language === 'zh' ? "精华" : "Featured",
      reports: 0,
      views: 892,
      created: language === 'zh' ? "1天前" : "1 day ago"
    }
  ];

  const activities = [
    {
      id: 1,
      title: language === 'zh' ? "春季招生活动" : "Spring Enrollment Event",
      description: language === 'zh' ? "针对新学期的招生推广活动" : "Recruitment promotion for new semester",
      startDate: "2024-03-01",
      endDate: "2024-03-31",
      participants: 156,
      status: language === 'zh' ? "进行中" : "Active"
    },
    {
      id: 2,
      title: language === 'zh' ? "编程挑战赛" : "Programming Challenge",
      description: language === 'zh' ? "面向所有学生的编程技能竞赛" : "Programming skills competition for all students",
      startDate: "2024-04-15",
      endDate: "2024-04-30",
      participants: 89,
      status: language === 'zh' ? "即将开始" : "Upcoming"
    }
  ];

  const pendingReviews = [
    { 
      id: 1, 
      type: language === 'zh' ? "话题" : "Topic", 
      title: language === 'zh' ? "关于考试作弊的讨论" : "Discussion about exam cheating", 
      author: language === 'zh' ? "匿名用户" : "Anonymous User", 
      reports: 3, 
      severity: language === 'zh' ? "高" : "High" 
    },
    { 
      id: 2, 
      type: language === 'zh' ? "评论" : "Comment", 
      title: language === 'zh' ? "不当言论举报" : "Inappropriate comment report", 
      author: language === 'zh' ? "测试用户" : "Test User", 
      reports: 1, 
      severity: language === 'zh' ? "中" : "Medium" 
    },
    { 
      id: 3, 
      type: language === 'zh' ? "课程" : "Course", 
      title: language === 'zh' ? "课程内容质量问题" : "Course content quality issue", 
      author: language === 'zh' ? "学生A" : "Student A", 
      reports: 2, 
      severity: language === 'zh' ? "低" : "Low" 
    }
  ];

  const handleLogout = () => {
    toast({
      title: language === 'zh' ? "退出成功" : "Logged out successfully",
      description: language === 'zh' ? "已安全退出管理后台" : "Safely logged out from admin dashboard",
    });
    navigate("/admin/login");
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      '进行中': 'In Progress',
      '即将开始': 'Upcoming', 
      '已结束': 'Completed',
      '活跃': 'Active',
      '非活跃': 'Inactive',
      '正常': 'Normal',
      '热门': 'Hot',
      '精华': 'Featured'
    };
    
    const displayText = language === 'zh' ? status : (statusMap[status as keyof typeof statusMap] || status);
    
    switch (status) {
      case "进行中":
      case "In Progress": 
        return <Badge className="bg-blue-500">{displayText}</Badge>;
      case "即将开始":
      case "Upcoming": 
        return <Badge className="bg-green-500">{displayText}</Badge>;
      case "已结束":
      case "Completed": 
        return <Badge className="bg-gray-500">{displayText}</Badge>;
      case "活跃":
      case "Active": 
        return <Badge className="bg-green-500">{displayText}</Badge>;
      case "非活跃":
      case "Inactive": 
        return <Badge className="bg-gray-500">{displayText}</Badge>;
      case "正常":
      case "Normal": 
        return <Badge variant="outline">{displayText}</Badge>;
      case "热门":
      case "Hot": 
        return <Badge className="bg-orange-500">{displayText}</Badge>;
      case "精华":
      case "Featured": 
        return <Badge className="bg-purple-500">{displayText}</Badge>;
      default: 
        return <Badge variant="outline">{displayText}</Badge>;
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
                <p className="text-xs text-slate-500">{t('admin.dashboard.title')}</p>
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
              {t('admin.dashboard.overview')}
            </Button>
            <Button 
              variant={activeTab === "users" ? "default" : "ghost"} 
              className="w-full justify-start text-slate-700 hover:bg-slate-50"
              onClick={() => setActiveTab("users")}
            >
              <Users className="mr-3 h-4 w-4" />
              {t('admin.dashboard.users')}
            </Button>
            <Button 
              variant={activeTab === "courses" ? "default" : "ghost"} 
              className="w-full justify-start text-slate-700 hover:bg-slate-50"
              onClick={() => setActiveTab("courses")}
            >
              <BookOpen className="mr-3 h-4 w-4" />
              {t('admin.dashboard.courses')}
            </Button>
            <Button 
              variant={activeTab === "topics" ? "default" : "ghost"} 
              className="w-full justify-start text-slate-700 hover:bg-slate-50"
              onClick={() => setActiveTab("topics")}
            >
              <MessageSquare className="mr-3 h-4 w-4" />
              {t('admin.dashboard.topics')}
            </Button>
            <Button 
              variant={activeTab === "activities" ? "default" : "ghost"} 
              className="w-full justify-start text-slate-700 hover:bg-slate-50"
              onClick={() => setActiveTab("activities")}
            >
              <Calendar className="mr-3 h-4 w-4" />
              {language === 'zh' ? '活动管理' : 'Activities'}
            </Button>
            <Button 
              variant={activeTab === "analytics" ? "default" : "ghost"} 
              className="w-full justify-start text-slate-700 hover:bg-slate-50"
              onClick={() => setActiveTab("analytics")}
            >
              <Activity className="mr-3 h-4 w-4" />
              {language === 'zh' ? '数据分析' : 'Analytics'}
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-slate-700 hover:bg-slate-50"
            >
              <Settings className="mr-3 h-4 w-4" />
              {language === 'zh' ? '系统设置' : 'Settings'}
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
              {language === 'zh' ? '退出登录' : 'Logout'}
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Header */}
          <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">
                  {language === 'zh' ? '管理面板' : 'Management Panel'}
                </h1>
                <p className="text-slate-600">
                  {language === 'zh' ? '欢迎使用 Online Studies 教育管理系统' : 'Welcome to Online Studies Education Management System'}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Language Selector */}
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-32">
                    <Globe className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="zh">中文</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder={language === 'zh' ? '搜索用户、课程、话题...' : 'Search users, courses, topics...'}
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
                      {language === 'zh' ? '内容审核' : 'Content Moderation'}
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
                              <Badge variant={item.severity === "高" || item.severity === "High" ? "destructive" : item.severity === "中" || item.severity === "Medium" ? "default" : "secondary"}>
                                {item.severity} {language === 'zh' ? '风险' : 'Risk'}
                              </Badge>
                            </div>
                            <p className="text-sm font-medium text-slate-800">{item.title}</p>
                            <p className="text-xs text-slate-600">
                              {language === 'zh' ? '举报次数' : 'Reports'}: {item.reports}
                            </p>
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
                      {language === 'zh' ? '最近活动' : 'Recent Activities'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            {language === 'zh' ? '新用户注册' : 'New User Registration'}
                          </p>
                          <p className="text-xs text-slate-600">
                            {language === 'zh' ? '12名用户在过去24小时内注册' : '12 users registered in the past 24 hours'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            {language === 'zh' ? '课程发布' : 'Course Published'}
                          </p>
                          <p className="text-xs text-slate-600">
                            {language === 'zh' ? '3门新课程等待审核' : '3 new courses pending review'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            {language === 'zh' ? '热门讨论' : 'Hot Discussions'}
                          </p>
                          <p className="text-xs text-slate-600">
                            {language === 'zh' ? '45个新话题今日发布' : '45 new topics published today'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* User Management Tab */}
            {activeTab === "users" && (
              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-slate-800">{t('admin.dashboard.users')}</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        {language === 'zh' ? '筛选' : 'Filter'}
                      </Button>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        {language === 'zh' ? '添加用户' : 'Add User'}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t('admin.users.name')}</TableHead>
                        <TableHead>{t('admin.users.role')}</TableHead>
                        <TableHead>{t('admin.users.status')}</TableHead>
                        <TableHead>{t('admin.users.courses')}</TableHead>
                        <TableHead>{t('admin.users.lastLogin')}</TableHead>
                        <TableHead>{t('admin.users.verified')}</TableHead>
                        <TableHead>{language === 'zh' ? '操作' : 'Actions'}</TableHead>
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
                                <div className="font-medium text-slate-800">{user.name}</div>
                                <div className="text-sm text-slate-600">{user.email}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{user.role}</Badge>
                          </TableCell>
                          <TableCell>
                            {getStatusBadge(user.status)}
                          </TableCell>
                          <TableCell>{user.courses}</TableCell>
                          <TableCell className="text-sm text-slate-600">{user.lastLogin}</TableCell>
                          <TableCell>
                            {user.verified ? (
                              <UserCheck className="h-4 w-4 text-green-500" />
                            ) : (
                              <AlertTriangle className="h-4 w-4 text-orange-500" />
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline">
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

            {/* Course Management Tab */}
            {activeTab === "courses" && (
              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-slate-800">{t('admin.dashboard.courses')}</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        {language === 'zh' ? '筛选' : 'Filter'}
                      </Button>
                      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                        <DialogTrigger asChild>
                          <Button size="sm">
                            <Plus className="h-4 w-4 mr-2" />
                            {language === 'zh' ? '创建课程' : 'Create Course'}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{language === 'zh' ? '创建新课程' : 'Create New Course'}</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label className="text-right">{t('admin.courses.title')}</label>
                              <Input className="col-span-3" placeholder={language === 'zh' ? '请输入课程标题' : 'Enter course title'} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label className="text-right">{t('admin.courses.instructor')}</label>
                              <Input className="col-span-3" placeholder={language === 'zh' ? '请输入讲师姓名' : 'Enter instructor name'} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label className="text-right">{t('admin.courses.category')}</label>
                              <Select>
                                <SelectTrigger className="col-span-3">
                                  <SelectValue placeholder={language === 'zh' ? '选择分类' : 'Select category'} />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="math">{language === 'zh' ? '数学' : 'Mathematics'}</SelectItem>
                                  <SelectItem value="science">{language === 'zh' ? '科学' : 'Science'}</SelectItem>
                                  <SelectItem value="programming">{language === 'zh' ? '编程' : 'Programming'}</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid grid-cols-4 items-start gap-4">
                              <label className="text-right pt-2">{language === 'zh' ? '课程描述' : 'Description'}</label>
                              <Textarea className="col-span-3" placeholder={language === 'zh' ? '请输入课程描述' : 'Enter course description'} />
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t('admin.courses.title')}</TableHead>
                        <TableHead>{t('admin.courses.instructor')}</TableHead>
                        <TableHead>{t('admin.courses.students')}</TableHead>
                        <TableHead>{t('admin.courses.status')}</TableHead>
                        <TableHead>{t('admin.courses.type')}</TableHead>
                        <TableHead>{t('admin.courses.price')}</TableHead>
                        <TableHead>{language === 'zh' ? '操作' : 'Actions'}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {courses.map((course) => (
                        <TableRow key={course.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium text-slate-800">{course.title}</div>
                              <div className="text-sm text-slate-600">{course.category}</div>
                            </div>
                          </TableCell>
                          <TableCell>{course.instructor}</TableCell>
                          <TableCell>{course.students}</TableCell>
                          <TableCell>
                            {getStatusBadge(course.status)}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{course.type}</Badge>
                          </TableCell>
                          <TableCell>¥{course.price}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline">
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

            {/* Topic Management Tab */}
            {activeTab === "topics" && (
              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-slate-800">{t('admin.dashboard.topics')}</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        {language === 'zh' ? '筛选' : 'Filter'}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t('admin.topics.title')}</TableHead>
                        <TableHead>{t('admin.topics.author')}</TableHead>
                        <TableHead>{t('admin.topics.category')}</TableHead>
                        <TableHead>{t('admin.topics.replies')}</TableHead>
                        <TableHead>{t('admin.topics.status')}</TableHead>
                        <TableHead>{t('admin.topics.reports')}</TableHead>
                        <TableHead>{language === 'zh' ? '操作' : 'Actions'}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topics.map((topic) => (
                        <TableRow key={topic.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium text-slate-800 max-w-md truncate">{topic.title}</div>
                              <div className="text-sm text-slate-600">{topic.created}</div>
                            </div>
                          </TableCell>
                          <TableCell>{topic.author}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{topic.category}</Badge>
                          </TableCell>
                          <TableCell>{topic.replies}</TableCell>
                          <TableCell>
                            {getStatusBadge(topic.status)}
                          </TableCell>
                          <TableCell>
                            {topic.reports > 0 ? (
                              <Badge variant="destructive">{topic.reports}</Badge>
                            ) : (
                              <Badge variant="outline">0</Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline">
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

            {/* Activity Management Tab */}
            {activeTab === "activities" && (
              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-slate-800">
                      {language === 'zh' ? '活动管理' : 'Activity Management'}
                    </CardTitle>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      {language === 'zh' ? '创建活动' : 'Create Activity'}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activities.map((activity) => (
                      <Card key={activity.id} className="border border-slate-200">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-slate-800 mb-2">{activity.title}</h3>
                              <p className="text-slate-600 mb-3">{activity.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-slate-500">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {activity.startDate} - {activity.endDate}
                                </div>
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-1" />
                                  {activity.participants} {language === 'zh' ? '参与者' : 'participants'}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {getStatusBadge(activity.status)}
                              <Button size="sm" variant="outline">
                                <Edit className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Analytics Tab */}
            {activeTab === "analytics" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-800">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      {language === 'zh' ? '用户增长趋势' : 'User Growth Trend'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-slate-500">
                      {language === 'zh' ? '图表数据加载中...' : 'Chart data loading...'}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-800">
                      <BookOpen className="h-5 w-5 mr-2" />
                      {language === 'zh' ? '课程完成率统计' : 'Course Completion Statistics'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {courses.map((course) => (
                        <div key={course.id} className="flex items-center justify-between">
                          <span className="text-sm text-slate-700 truncate max-w-xs">{course.title}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-blue-500" 
                                style={{ width: `${course.completion}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-slate-600 w-12">{course.completion}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-800">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      {language === 'zh' ? '话题活跃度' : 'Topic Activity'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {topics.map((topic) => (
                        <div key={topic.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-800 truncate">{topic.title}</p>
                            <p className="text-xs text-slate-600">{topic.category}</p>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-600">
                            <div className="flex items-center">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              {topic.replies}
                            </div>
                            <div className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {topic.views}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-800">
                      <Activity className="h-5 w-5 mr-2" />
                      {language === 'zh' ? '系统活动日志' : 'System Activity Log'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 border-l-4 border-blue-500 bg-blue-50">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            {language === 'zh' ? '用户登录' : 'User Login'}
                          </p>
                          <p className="text-xs text-slate-600">
                            {language === 'zh' ? '管理员于 5 分钟前登录系统' : 'Administrator logged in 5 minutes ago'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border-l-4 border-green-500 bg-green-50">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            {language === 'zh' ? '课程审核通过' : 'Course Approved'}
                          </p>
                          <p className="text-xs text-slate-600">
                            {language === 'zh' ? '《代数2学习实验室》已通过审核' : 'Algebra 2 Learning Lab has been approved'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border-l-4 border-orange-500 bg-orange-50">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            {language === 'zh' ? '内容举报' : 'Content Reported'}
                          </p>
                          <p className="text-xs text-slate-600">
                            {language === 'zh' ? '话题《如何提高数学解题速度？》收到新举报' : 'Topic "How to improve math problem-solving speed?" received new report'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;