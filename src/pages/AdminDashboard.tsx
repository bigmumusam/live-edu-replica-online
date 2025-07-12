import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AdminLanguageProvider, useAdminLanguage } from "@/contexts/AdminLanguageContext";
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
  Activity,
  Filter,
  Globe,
  Menu,
  Home,
  RefreshCw,
  Download
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AdminDashboardContent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, language, setLanguage } = useAdminLanguage();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Sample data
  const stats = [
    { 
      title: t('dashboard.totalUsers'), 
      value: "1,234", 
      change: "+12", 
      icon: Users, 
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    { 
      title: t('dashboard.totalCourses'), 
      value: "56", 
      change: "+3", 
      icon: BookOpen, 
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    { 
      title: t('dashboard.activeTopics'), 
      value: "789", 
      change: "+45", 
      icon: MessageSquare, 
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    { 
      title: t('dashboard.dailyVisits'), 
      value: "2,345", 
      change: "+156", 
      icon: TrendingUp, 
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  const users = [
    { 
      id: 1, 
      name: "陈俊杰", 
      email: "chen@example.com", 
      role: t('users.student'), 
      status: t('users.active'), 
      lastLogin: language === 'zh' ? "2小时前" : "2 hours ago"
    },
    { 
      id: 2, 
      name: "李小明", 
      email: "li@example.com", 
      role: t('users.teacher'), 
      status: t('users.active'), 
      lastLogin: language === 'zh' ? "30分钟前" : "30 minutes ago"
    },
    { 
      id: 3, 
      name: "王丽", 
      email: "wang@example.com", 
      role: t('users.student'), 
      status: t('users.inactive'), 
      lastLogin: language === 'zh' ? "3天前" : "3 days ago"
    }
  ];

  const courses = [
    { 
      id: 1, 
      title: language === 'zh' ? "代数2学习实验室" : "Algebra 2 Learning Lab", 
      instructor: "JuanD MeGon", 
      students: 258, 
      status: t('courses.inProgress'), 
      price: 998
    },
    { 
      id: 2, 
      title: language === 'zh' ? "微积分微分学习实验室" : "Calculus Learning Lab", 
      instructor: "Debra Liver", 
      students: 357, 
      status: t('courses.upcoming'), 
      price: 1288
    },
    { 
      id: 3, 
      title: language === 'zh' ? "PHP工程" : "PHP Engineering", 
      instructor: "John Smith", 
      students: 125, 
      status: t('courses.completed'), 
      price: 899
    }
  ];

  const handleLogout = () => {
    toast({
      title: t('login.success'),
      description: language === 'zh' ? "已安全退出管理后台" : "Safely logged out from admin panel",
    });
    navigate("/admin/login");
  };

  const getStatusBadge = (status: string) => {
    if (status === t('users.active') || status === t('courses.inProgress')) {
      return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{status}</Badge>;
    } else if (status === t('users.inactive') || status === t('courses.upcoming')) {
      return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">{status}</Badge>;
    } else if (status === t('courses.completed')) {
      return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">{status}</Badge>;
    }
    return <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30">{status}</Badge>;
  };

  const menuItems = [
    { id: 'dashboard', label: t('nav.dashboard'), icon: Home },
    { id: 'users', label: t('nav.users'), icon: Users },
    { id: 'courses', label: t('nav.courses'), icon: BookOpen },
    { id: 'topics', label: t('nav.topics'), icon: MessageSquare },
    { id: 'activities', label: t('nav.activities'), icon: Calendar },
    { id: 'analytics', label: t('nav.analytics'), icon: BarChart3 },
    { id: 'settings', label: t('nav.settings'), icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Tech Grid Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-gray-900/50 backdrop-blur-xl border-r border-cyan-500/20 min-h-screen transition-all duration-300 fixed left-0 top-0 z-40`}>
          {/* Logo */}
          <div className="p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              {!sidebarCollapsed && (
                <div>
                  <h1 className="font-bold text-white">Admin Panel</h1>
                  <p className="text-xs text-cyan-400">v2.0</p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className={`w-full justify-start text-left ${
                  activeTab === item.id 
                    ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' 
                    : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10'
                } ${sidebarCollapsed ? 'px-3' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="h-4 w-4" />
                {!sidebarCollapsed && <span className="ml-3">{item.label}</span>}
              </Button>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-4 left-4 right-4">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10"
            >
              <LogOut className="h-4 w-4" />
              {!sidebarCollapsed && <span className="ml-3">{t('nav.logout')}</span>}
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 ${sidebarCollapsed ? 'ml-16' : 'ml-64'} transition-all duration-300`}>
          {/* Top Header */}
          <header className="bg-gray-900/30 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-4 sticky top-0 z-30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                >
                  <Menu className="h-4 w-4" />
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-white">
                    {activeTab === 'dashboard' && t('dashboard.title')}
                    {activeTab === 'users' && t('users.title')}
                    {activeTab === 'courses' && t('courses.title')}
                    {activeTab === 'topics' && t('topics.title')}
                    {activeTab === 'activities' && t('activities.title')}
                    {activeTab === 'analytics' && t('analytics.title')}
                  </h1>
                  <p className="text-cyan-400 text-sm">
                    {activeTab === 'dashboard' && t('dashboard.subtitle')}
                    {activeTab === 'users' && t('users.subtitle')}
                    {activeTab === 'courses' && t('courses.subtitle')}
                    {activeTab === 'topics' && t('topics.subtitle')}
                    {activeTab === 'activities' && t('activities.subtitle')}
                    {activeTab === 'analytics' && t('analytics.subtitle')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-32 bg-gray-800/50 border-cyan-500/30 text-cyan-400">
                    <Globe className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-cyan-500/30">
                    <SelectItem value="zh" className="text-cyan-400">中文</SelectItem>
                    <SelectItem value="en" className="text-cyan-400">English</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-cyan-400" />
                  <Input
                    placeholder={t('common.search')}
                    className="pl-10 w-80 bg-gray-800/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400"
                  />
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="relative bg-gray-800/50 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                >
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs"></span>
                </Button>
                
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <main className="p-6">
            {/* Dashboard Tab */}
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <Card key={index} className={`bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300`}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-400 text-sm">{stat.title}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <p className="text-2xl font-bold text-white">{stat.value}</p>
                              <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full border border-green-500/30">
                                {stat.change}
                              </span>
                            </div>
                          </div>
                          <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg shadow-lg`}>
                            <stat.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Activity className="h-5 w-5 mr-2 text-cyan-400" />
                        {language === 'zh' ? '快速操作' : 'Quick Actions'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30">
                        <Plus className="h-4 w-4 mr-2" />
                        {t('users.addUser')}
                      </Button>
                      <Button className="w-full justify-start bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30">
                        <Plus className="h-4 w-4 mr-2" />
                        {t('courses.addCourse')}
                      </Button>
                      <Button className="w-full justify-start bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 border border-orange-500/30">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        {t('common.refresh')}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
                        {language === 'zh' ? '系统状态' : 'System Status'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">{language === 'zh' ? '服务器状态' : 'Server Status'}</span>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          {language === 'zh' ? '正常' : 'Online'}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">{language === 'zh' ? '数据库' : 'Database'}</span>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          {language === 'zh' ? '连接正常' : 'Connected'}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">{language === 'zh' ? 'CPU使用率' : 'CPU Usage'}</span>
                        <span className="text-cyan-400">23%</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-purple-400" />
                        {language === 'zh' ? '最近活动' : 'Recent Activity'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-400">
                          {language === 'zh' ? '用户 陈俊杰 登录系统' : 'User Chen Junjie logged in'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-400">
                          {language === 'zh' ? '新课程发布' : 'New course published'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-400">
                          {language === 'zh' ? '系统备份完成' : 'System backup completed'}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === "users" && (
              <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white">{t('users.title')}</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="bg-gray-800/50 border-cyan-500/30 text-cyan-400">
                        <Filter className="h-4 w-4 mr-2" />
                        {t('common.filter')}
                      </Button>
                      <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                        <Plus className="h-4 w-4 mr-2" />
                        {t('users.addUser')}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700">
                        <TableHead className="text-gray-400">{t('users.name')}</TableHead>
                        <TableHead className="text-gray-400">{t('users.role')}</TableHead>
                        <TableHead className="text-gray-400">{t('users.status')}</TableHead>
                        <TableHead className="text-gray-400">{t('users.lastLogin')}</TableHead>
                        <TableHead className="text-gray-400">{t('users.actions')}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id} className="border-gray-700 hover:bg-gray-800/50">
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                {user.name.charAt(0)}
                              </div>
                              <div>
                                <div className="font-medium text-white">{user.name}</div>
                                <div className="text-sm text-gray-400">{user.email}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-cyan-400 border-cyan-500/30">{user.role}</Badge>
                          </TableCell>
                          <TableCell>
                            {getStatusBadge(user.status)}
                          </TableCell>
                          <TableCell className="text-gray-400">{user.lastLogin}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="bg-gray-800/50 border-gray-600 text-gray-400 hover:text-cyan-400">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="bg-gray-800/50 border-gray-600 text-gray-400 hover:text-cyan-400">
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="bg-gray-800/50 border-gray-600 text-gray-400 hover:text-red-400">
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

            {/* Courses Tab */}
            {activeTab === "courses" && (
              <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white">{t('courses.title')}</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="bg-gray-800/50 border-cyan-500/30 text-cyan-400">
                        <Download className="h-4 w-4 mr-2" />
                        {t('common.export')}
                      </Button>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600">
                        <Plus className="h-4 w-4 mr-2" />
                        {t('courses.addCourse')}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700">
                        <TableHead className="text-gray-400">{t('courses.courseName')}</TableHead>
                        <TableHead className="text-gray-400">{t('courses.instructor')}</TableHead>
                        <TableHead className="text-gray-400">{t('courses.students')}</TableHead>
                        <TableHead className="text-gray-400">{t('courses.status')}</TableHead>
                        <TableHead className="text-gray-400">{t('courses.price')}</TableHead>
                        <TableHead className="text-gray-400">{t('courses.actions')}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {courses.map((course) => (
                        <TableRow key={course.id} className="border-gray-700 hover:bg-gray-800/50">
                          <TableCell>
                            <div className="font-medium text-white">{course.title}</div>
                          </TableCell>
                          <TableCell className="text-gray-400">{course.instructor}</TableCell>
                          <TableCell className="text-gray-400">{course.students}</TableCell>
                          <TableCell>
                            {getStatusBadge(course.status)}
                          </TableCell>
                          <TableCell className="text-gray-400">¥{course.price}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="bg-gray-800/50 border-gray-600 text-gray-400 hover:text-cyan-400">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="bg-gray-800/50 border-gray-600 text-gray-400 hover:text-cyan-400">
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="bg-gray-800/50 border-gray-600 text-gray-400 hover:text-red-400">
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

const AdminDashboard = () => {
  return (
    <AdminLanguageProvider>
      <AdminDashboardContent />
    </AdminLanguageProvider>
  );
};

export default AdminDashboard;