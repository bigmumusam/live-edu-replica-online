
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, BookOpen, MessageSquare, BarChart3, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "总用户数", value: "1,234", icon: Users, color: "text-blue-500" },
    { title: "总课程数", value: "56", icon: BookOpen, color: "text-green-500" },
    { title: "活跃讨论", value: "789", icon: MessageSquare, color: "text-orange-500" },
    { title: "今日访问", value: "2,345", icon: BarChart3, color: "text-purple-500" }
  ];

  const handleLogout = () => {
    navigate("/admin/login");
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
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
              <BarChart3 className="mr-3 h-4 w-4" />
              数据概览
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
              <Users className="mr-3 h-4 w-4" />
              用户管理
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
              <BookOpen className="mr-3 h-4 w-4" />
              课程管理
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
              <MessageSquare className="mr-3 h-4 w-4" />
              话题管理
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
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
          <Tabs defaultValue="overview" className="space-y-6">
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
                  <p>这里显示系统的整体数据统计和分析图表...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users" className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">用户管理</CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <p>用户列表、角色管理、权限设置等功能...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="courses" className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">课程管理</CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <p>课程创建、编辑、发布、学员管理等功能...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="topics" className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">话题管理</CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <p>板块管理、内容审核、用户管理、数据分析等功能...</p>
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
