
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, BookOpen, MessageSquare, BarChart3, Settings, LogOut, Plus, Edit, Trash2, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { title: "总用户数", value: "1,234", icon: Users, color: "text-blue-500" },
    { title: "总课程数", value: "56", icon: BookOpen, color: "text-green-500" },
    { title: "活跃讨论", value: "789", icon: MessageSquare, color: "text-orange-500" },
    { title: "今日访问", value: "2,345", icon: BarChart3, color: "text-purple-500" }
  ];

  const users = [
    { id: 1, name: "陈俊杰", email: "chen@example.com", role: "学生", status: "活跃", courses: 3 },
    { id: 2, name: "李小明", email: "li@example.com", role: "教师", status: "活跃", courses: 8 },
    { id: 3, name: "王丽", email: "wang@example.com", role: "学生", status: "非活跃", courses: 1 },
    { id: 4, name: "张教授", email: "zhang@example.com", role: "教师", status: "活跃", courses: 12 }
  ];

  const courses = [
    { id: 1, title: "代数2学习实验室", instructor: "JuanD MeGon", students: 258, status: "进行中", price: 998 },
    { id: 2, title: "微积分微分学习实验室", instructor: "Debra Liver", students: 357, status: "即将开始", price: 1288 },
    { id: 3, title: "PHP工程", instructor: "John", students: 125, status: "已结束", price: 899 },
    { id: 4, title: "生物学", instructor: "Sarah", students: 89, status: "进行中", price: 1099 }
  ];

  const topics = [
    { id: 1, title: "AP生物考试时间管理有什么技巧?", author: "Nicholas Simmons", category: "生物", replies: 15, status: "正常" },
    { id: 2, title: "如何提高数学解题速度？", author: "Sarah Johnson", category: "数学", replies: 8, status: "热门" },
    { id: 3, title: "物理力学部分重难点总结", author: "David Chen", category: "物理", replies: 22, status: "精华" },
    { id: 4, title: "化学方程式配平技巧？", author: "Emma Wilson", category: "化学", replies: 6, status: "正常" }
  ];

  const handleLogout = () => {
    toast({
      title: "退出成功",
      description: "已安全退出管理后台",
    });
    navigate("/admin/login");
  };

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    toast({
      title: "切换成功",
      description: `已切换到${tab === 'overview' ? '数据概览' : tab === 'users' ? '用户管理' : tab === 'courses' ? '课程管理' : '话题管理'}`,
    });
  };

  const handleUserAction = (action: string, userId: number) => {
    toast({
      title: `${action}用户`,
      description: `用户ID: ${userId} - ${action}操作执行成功`,
    });
  };

  const handleCourseAction = (action: string, courseId: number) => {
    toast({
      title: `${action}课程`,
      description: `课程ID: ${courseId} - ${action}操作执行成功`,
    });
  };

  const handleTopicAction = (action: string, topicId: number) => {
    toast({
      title: `${action}话题`,
      description: `话题ID: ${topicId} - ${action}操作执行成功`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-black/20 backdrop-blur-sm min-h-screen p-4">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🏫</span>
            </div>
            <span className="text-white font-semibold">管理后台</span>
          </div>

          <nav className="space-y-2">
            <Button 
              variant={activeTab === "overview" ? "default" : "ghost"} 
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={() => handleNavClick("overview")}
            >
              <BarChart3 className="mr-3 h-4 w-4" />
              数据概览
            </Button>
            <Button 
              variant={activeTab === "users" ? "default" : "ghost"} 
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={() => handleNavClick("users")}
            >
              <Users className="mr-3 h-4 w-4" />
              用户管理
            </Button>
            <Button 
              variant={activeTab === "courses" ? "default" : "ghost"} 
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={() => handleNavClick("courses")}
            >
              <BookOpen className="mr-3 h-4 w-4" />
              课程管理
            </Button>
            <Button 
              variant={activeTab === "topics" ? "default" : "ghost"} 
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={() => handleNavClick("topics")}
            >
              <MessageSquare className="mr-3 h-4 w-4" />
              话题管理
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={() => toast({ title: "系统设置", description: "系统设置功能开发中..." })}
            >
              <Settings className="mr-3 h-4 w-4" />
              系统设置
            </Button>
          </nav>

          <div className="absolute bottom-4 left-4 right-4">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start text-red-300 hover:text-red-100 hover:bg-red-500/20"
            >
              <LogOut className="mr-3 h-4 w-4" />
              退出登录
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">管理后台</h1>
            <p className="text-gray-300">欢迎使用 Online Studies 教育管理系统</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.title} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">{stat.title}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-white/10 backdrop-blur-sm border-white/20">
              <TabsTrigger value="overview" className="text-white data-[state=active]:bg-white/20">数据概览</TabsTrigger>
              <TabsTrigger value="users" className="text-white data-[state=active]:bg-white/20">用户管理</TabsTrigger>
              <TabsTrigger value="courses" className="text-white data-[state=active]:bg-white/20">课程管理</TabsTrigger>
              <TabsTrigger value="topics" className="text-white data-[state=active]:bg-white/20">话题管理</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">系统概览</CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">最近活动</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                          <span>新用户注册</span>
                          <Badge variant="secondary">+12</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                          <span>课程发布</span>
                          <Badge variant="secondary">+3</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                          <span>话题讨论</span>
                          <Badge variant="secondary">+45</Badge>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">系统状态</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                          <span>服务器状态</span>
                          <Badge className="bg-green-600">正常</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                          <span>数据库连接</span>
                          <Badge className="bg-green-600">正常</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                          <span>存储空间</span>
                          <Badge className="bg-yellow-600">75%</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users" className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white">用户管理</CardTitle>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => toast({ title: "添加用户", description: "添加用户功能开发中..." })}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      添加用户
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Input 
                      placeholder="搜索用户..." 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/20">
                        <TableHead className="text-white">用户名</TableHead>
                        <TableHead className="text-white">邮箱</TableHead>
                        <TableHead className="text-white">角色</TableHead>
                        <TableHead className="text-white">状态</TableHead>
                        <TableHead className="text-white">课程数</TableHead>
                        <TableHead className="text-white">操作</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id} className="border-white/20">
                          <TableCell className="text-white">{user.name}</TableCell>
                          <TableCell className="text-white">{user.email}</TableCell>
                          <TableCell>
                            <Badge variant={user.role === "教师" ? "default" : "secondary"}>
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={user.status === "活跃" ? "default" : "secondary"}>
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-white">{user.courses}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleUserAction("查看", user.id)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleUserAction("编辑", user.id)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleUserAction("删除", user.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="courses" className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white">课程管理</CardTitle>
                    <Button 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => toast({ title: "创建课程", description: "创建课程功能开发中..." })}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      创建课程
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/20">
                        <TableHead className="text-white">课程名称</TableHead>
                        <TableHead className="text-white">讲师</TableHead>
                        <TableHead className="text-white">学生数</TableHead>
                        <TableHead className="text-white">状态</TableHead>
                        <TableHead className="text-white">价格</TableHead>
                        <TableHead className="text-white">操作</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {courses.map((course) => (
                        <TableRow key={course.id} className="border-white/20">
                          <TableCell className="text-white">{course.title}</TableCell>
                          <TableCell className="text-white">{course.instructor}</TableCell>
                          <TableCell className="text-white">{course.students}</TableCell>
                          <TableCell>
                            <Badge variant={course.status === "进行中" ? "default" : course.status === "即将开始" ? "secondary" : "outline"}>
                              {course.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-white">¥{course.price}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleCourseAction("查看", course.id)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleCourseAction("编辑", course.id)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleCourseAction("删除", course.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="topics" className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white">话题管理</CardTitle>
                    <Button 
                      className="bg-purple-600 hover:bg-purple-700"
                      onClick={() => toast({ title: "创建板块", description: "创建板块功能开发中..." })}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      创建板块
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/20">
                        <TableHead className="text-white">话题标题</TableHead>
                        <TableHead className="text-white">作者</TableHead>
                        <TableHead className="text-white">分类</TableHead>
                        <TableHead className="text-white">回复数</TableHead>
                        <TableHead className="text-white">状态</TableHead>
                        <TableHead className="text-white">操作</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topics.map((topic) => (
                        <TableRow key={topic.id} className="border-white/20">
                          <TableCell className="text-white max-w-xs truncate">{topic.title}</TableCell>
                          <TableCell className="text-white">{topic.author}</TableCell>
                          <TableCell className="text-white">{topic.category}</TableCell>
                          <TableCell className="text-white">{topic.replies}</TableCell>
                          <TableCell>
                            <Badge variant={topic.status === "热门" ? "default" : topic.status === "精华" ? "secondary" : "outline"}>
                              {topic.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleTopicAction("查看", topic.id)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleTopicAction("编辑", topic.id)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleTopicAction("删除", topic.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
