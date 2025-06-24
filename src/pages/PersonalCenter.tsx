import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Users, MessageSquare, BookOpen, Award, Plus, MoreHorizontal } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DiscussionsTab from "@/components/personal/DiscussionsTab";
import PointsTab from "@/components/personal/PointsTab";
import TeachingTab from "@/components/personal/TeachingTab";

const PersonalCenter = () => {
  const courses = [
    { id: 1, title: "代数2学习实验室", instructor: "Brad Traversy", students: "2581人报名", price: "¥998", status: "取消收藏", color: "bg-red-500" },
    { id: 2, title: "计算机工程", instructor: "InsideCodeMedia", students: "3579人参与", price: "¥1288", status: "已结束", color: "bg-yellow-500" },
    { id: 3, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", price: "¥1288", status: "取消收藏", color: "bg-red-500" },
    { id: 4, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", price: "¥998", status: "进行中", color: "bg-blue-500" },
    { id: 5, title: "计算机工程", instructor: "Janice Carroll", students: "3579人参与", price: "¥998", status: "已结束", color: "bg-yellow-500" },
    { id: 6, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", price: "¥998", status: "取消收藏", color: "bg-red-500" }
  ];

  const enrolledCourses = [
    { id: 1, title: "代数2学习实验室", subject: "代数", instructor: "Brad Traversy", description: "探索代数 2 学习实验室概念难懂？依靠同伴辅导来提升学习进度探索代数 2 学习实验室概念难懂", checked: true },
    { id: 2, title: "CodeIgniter", subject: "计算机", instructor: "InsideCodeMedia", description: "Learn Php CodeIgniter and understanding working with MVC and HMVC from zero to hero", checked: false },
    { id: 3, title: "Laravel", subject: "统计学", instructor: "JuanD MeGon", description: "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills", checked: false },
    { id: 4, title: "NodeJS", subject: "代码程序", instructor: "Anthony Alicea", description: "Dive deep under the hood of NodeJS. Learn V8, Express, Angular, MongoDB, and more!", checked: false },
    { id: 5, title: "Bootstrap", subject: "计算机", instructor: "Janice Carroll", description: "This tutorial has been prepared for beginners to help them understand the basics of Bootstrap", checked: false }
  ];

  const following = [
    { id: 1, name: "Tiffany Smith", grade: "高三学生", topics: "参与815 话题", followers: "300 关注者", avatar: "bg-orange-500" },
    { id: 2, name: "Crystal Lucas", grade: "高二学生", topics: "参与77 话题", followers: "256 关注者", avatar: "bg-blue-500" },
    { id: 3, name: "Peter Russell", grade: "大一学生", topics: "参与83 话题", followers: "368 关注者", avatar: "bg-green-500" },
    { id: 4, name: "Melissa Stevens", grade: "高一学生", topics: "参与3 话题", followers: "932 关注者", avatar: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title="个人中心" />
        
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="courses" className="w-full">
                <TabsList className="grid w-full grid-cols-6 bg-slate-800/50 mb-6">
                  <TabsTrigger value="courses" className="text-slate-300 data-[state=active]:text-green-400 data-[state=active]:border-b-2 data-[state=active]:border-green-400">我的课程</TabsTrigger>
                  <TabsTrigger value="discussions" className="text-slate-300 data-[state=active]:text-green-400">参与的讨论</TabsTrigger>
                  <TabsTrigger value="favorites" className="text-slate-300 data-[state=active]:text-green-400">我的收藏</TabsTrigger>
                  <TabsTrigger value="points" className="text-slate-300 data-[state=active]:text-green-400">我的积分</TabsTrigger>
                  <TabsTrigger value="following" className="text-slate-300 data-[state=active]:text-green-400">我的关注</TabsTrigger>
                  <TabsTrigger value="teaching" className="text-slate-300 data-[state=active]:text-green-400">教授课时</TabsTrigger>
                </TabsList>

                <TabsContent value="courses" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">全部课程</h2>
                    <div className="flex items-center space-x-4">
                      <span className="text-slate-400">选择：</span>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">全部</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <Card key={course.id} className="bg-slate-800/50 border-slate-700">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <input type="checkbox" defaultChecked={course.checked} className="w-5 h-5 rounded border-slate-600" />
                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                              {course.title.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-4">
                                <h3 className="text-white font-medium">{course.title}</h3>
                                <Badge variant="secondary">{course.subject}</Badge>
                                <div className="flex items-center space-x-2">
                                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                                  <span className="text-slate-300 text-sm">{course.instructor}</span>
                                </div>
                              </div>
                              <p className="text-slate-400 text-sm mt-2">{course.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="discussions" className="space-y-6">
                  <DiscussionsTab />
                </TabsContent>

                <TabsContent value="points" className="space-y-6">
                  <PointsTab />
                </TabsContent>

                <TabsContent value="teaching" className="space-y-6">
                  <TeachingTab />
                </TabsContent>

                <TabsContent value="favorites" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                      <Card key={course.id} className="bg-slate-800/50 border-slate-700">
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <div className={`w-8 h-8 ${course.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                                {course.title.charAt(0)}
                              </div>
                              <Badge variant={course.status === "取消收藏" ? "default" : "secondary"}>
                                {course.status}
                              </Badge>
                            </div>
                          </div>
                          <CardTitle className="text-white text-lg">{course.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-slate-400 text-sm">
                            {course.title === "代数2学习实验室" 
                              ? "探索代数 2 学习实验室概念难懂？依靠同伴辅导来提升学习进度探索代数 2 学习实验室概念难懂"
                              : course.title === "计算机工程"
                              ? "Learn Php CodeIgniter and understand working with MVC and HMVC from zero to hero"
                              : "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills"
                            }
                          </p>
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                            <span className="text-slate-400 text-sm">{course.instructor}</span>
                            <span className="text-slate-400 text-sm">{course.students}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                              <span className="text-slate-400 text-sm ml-2">难度系数</span>
                            </div>
                            <span className="text-green-400 font-bold">{course.price}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="following" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">全部关注</h2>
                    <div className="flex items-center space-x-4">
                      <span className="text-slate-400">选择：</span>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">全部</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {following.map((person) => (
                      <Card key={person.id} className="bg-slate-800/50 border-slate-700">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className={`w-12 h-12 ${person.avatar} rounded-full flex items-center justify-center text-white font-bold`}>
                                {person.name.charAt(0)}
                              </div>
                              <div>
                                <h3 className="text-white font-medium">{person.name}</h3>
                                <div className="flex items-center space-x-4 text-sm text-slate-400">
                                  <span>{person.grade}</span>
                                  <span>{person.topics}</span>
                                  <span>{person.followers}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                <MessageSquare className="h-4 w-4 mr-1" />
                              </Button>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <Plus className="h-4 w-4 mr-1" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-green-400">个人简介</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">👤</span>
                    </div>
                    <h3 className="text-white font-semibold">陈俊杰 👋</h3>
                    <p className="text-slate-400 text-sm">Fike it until you make it, fighting~</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">成就</span>
                      <span className="text-green-400">完成全部</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-green-400">700 积分</span>
                        <span className="text-slate-400">学习达人</span>
                      </div>
                      <div className="text-slate-400 text-sm">500 积分</div>
                      <div className="text-slate-400 text-sm">300 积分</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    编辑
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">用户信息</CardTitle>
                    <Button variant="ghost" size="sm">
                      <Plus className="h-4 w-4 text-green-400" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-white font-medium">教育</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">B.Sc - Informatics Engineering</span>
                      <span className="text-green-400 text-sm">新增</span>
                    </div>
                    <div className="text-slate-400 text-sm">University of London United Kingdom 2018</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-medium">证书</h4>
                      <span className="text-green-400 text-sm">新增</span>
                    </div>
                    <div className="text-slate-400 text-sm">承荣证书</div>
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

export default PersonalCenter;
