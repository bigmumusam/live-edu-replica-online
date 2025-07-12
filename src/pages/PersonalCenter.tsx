import { useState } from "react";
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
import UserInfoModal from "@/components/personal/UserInfoModal";
import EditProfileModal from "@/components/personal/EditProfileModal";
import { useLanguage } from "@/contexts/LanguageContext";

const PersonalCenter = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [favoriteTab, setFavoriteTab] = useState("收藏");
  const { t } = useLanguage();
  const courses = [
    { id: 1, title: "代数2学习实验室", instructor: "Brad Traversy", students: "2581人报名", price: "¥998", status: "取消收藏", color: "bg-red-500" },
    { id: 2, title: "计算机工程", instructor: "InsideCodeMedia", students: "3579人参与", price: "¥1288", status: "已结束", color: "bg-yellow-500" },
    { id: 3, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", price: "¥1288", status: "取消收藏", color: "bg-red-500" },
    { id: 4, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", price: "¥998", status: "进行中", color: "bg-blue-500" },
    { id: 5, title: "计算机工程", instructor: "Janice Carroll", students: "3579人参与", price: "¥998", status: "已结束", color: "bg-yellow-500" },
    { id: 6, title: "生物学", instructor: "JuanD MeGon", students: "3579人参与", price: "¥998", status: "取消收藏", color: "bg-red-500" }
  ];

const enrolledCourses = [
    { id: 1, title: "代数2学习实验室", subject: "代数", instructor: "Brad Traversy", description: "探索代数 2 学习实验室概念难懂？依靠同伴辅导来提升学习进度探索代数 2 学习实验室概念难懂", status: "进行中", statusColor: "bg-blue-500" },
    { id: 2, title: "CodeIgniter", subject: "计算机", instructor: "InsideCodeMedia", description: "Learn Php CodeIgniter and understanding working with MVC and HMVC from zero to hero", status: "已完成", statusColor: "bg-green-500" },
    { id: 3, title: "Laravel", subject: "统计学", instructor: "JuanD MeGon", description: "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills", status: "未开始", statusColor: "bg-gray-500" },
    { id: 4, title: "NodeJS", subject: "代码程序", instructor: "Anthony Alicea", description: "Dive deep under the hood of NodeJS. Learn V8, Express, Angular, MongoDB, and more!", status: "进行中", statusColor: "bg-blue-500" },
    { id: 5, title: "Bootstrap", subject: "计算机", instructor: "Janice Carroll", description: "This tutorial has been prepared for beginners to help them understand the basics of Bootstrap", status: "已完成", statusColor: "bg-green-500" }
  ];

  const following = [
    { id: 1, name: "Tiffany Smith", grade: "高三学生", topics: "参与815 话题", followers: "300 关注者", avatar: "bg-orange-500" },
    { id: 2, name: "Crystal Lucas", grade: "高二学生", topics: "参与77 话题", followers: "256 关注者", avatar: "bg-blue-500" },
    { id: 3, name: "Peter Russell", grade: "大一学生", topics: "参与83 话题", followers: "368 关注者", avatar: "bg-green-500" },
    { id: 4, name: "Melissa Stevens", grade: "高一学生", topics: "参与3 话题", followers: "932 关注者", avatar: "bg-purple-500" }
  ];

  const subjectToKey = (subject: string) => {
    switch(subject) {
      case '代数': return 'algebra';
      case '计算机': return 'computer';
      case '统计学': return 'statistics';
      case '代码程序': return 'programming';
      default: return subject;
    }
  };
  const statusToKey = (status: string) => {
    switch(status) {
      case '进行中': return 'inProgress';
      case '已完成': return 'completed';
      case '未开始': return 'notStarted';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title={t('sidebar.personal')} />
        
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="courses" className="w-full">
                <TabsList className="grid w-full grid-cols-6 bg-slate-800/50 mb-6">
                  <TabsTrigger value="courses" className="text-slate-300 data-[state=active]:text-green-400 data-[state=active]:border-b-2 data-[state=active]:border-green-400">{t('personal.myCourses')}</TabsTrigger>
                  <TabsTrigger value="discussions" className="text-slate-300 data-[state=active]:text-green-400">{t('personal.discussions')}</TabsTrigger>
                  <TabsTrigger value="favorites" className="text-slate-300 data-[state=active]:text-green-400">{t('personal.favorites')}</TabsTrigger>
                  <TabsTrigger value="points" className="text-slate-300 data-[state=active]:text-green-400">{t('personal.points')}</TabsTrigger>
                  <TabsTrigger value="following" className="text-slate-300 data-[state=active]:text-green-400">{t('personal.following')}</TabsTrigger>
                  <TabsTrigger value="teaching" className="text-slate-300 data-[state=active]:text-green-400">{t('personal.teaching')}</TabsTrigger>
                </TabsList>

                <TabsContent value="courses" className="space-y-6">
                  <div className="flex items-center justify-end">
                    <div className="flex items-center space-x-4">
                      <span className="text-slate-400">{t('personal.status')}：</span>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{t('personal.allStatus')}</SelectItem>
                          <SelectItem value="not-started">{t('personal.notStarted')}</SelectItem>
                          <SelectItem value="in-progress">{t('personal.inProgress')}</SelectItem>
                          <SelectItem value="completed">{t('personal.completed')}</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <span className="text-slate-400">{t('personal.category')}：</span>
                      <Select defaultValue="all-category">
                        <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-category">{t('personal.allCategory')}</SelectItem>
                          <SelectItem value="algebra">{t('personal.algebra')}</SelectItem>
                          <SelectItem value="computer">{t('personal.computer')}</SelectItem>
                          <SelectItem value="statistics">{t('personal.statistics')}</SelectItem>
                          <SelectItem value="programming">{t('personal.programming')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <Card key={course.id} className="bg-slate-800/50 border-slate-700">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                              {course.title.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-4 mb-2">
                                <h3 className="text-white font-medium">{course.title}</h3>
                                <Badge variant="secondary">{t(`personal.${subjectToKey(course.subject)}`)}</Badge>
                                <Badge className={`${course.statusColor} text-white`}>{t(`personal.${statusToKey(course.status)}`)}</Badge>
                              </div>
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                                <span className="text-slate-300 text-sm">{course.instructor}</span>
                              </div>
                              <p className="text-slate-400 text-sm">{course.description}</p>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courses.map((course) => (
                      <Card key={course.id} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-colors cursor-pointer h-full flex flex-col relative group">
                        <CardContent className="p-4 flex flex-col h-full">
                          <div className="flex items-center space-x-2 mb-3">
                            <div className={`w-8 h-8 ${course.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                              {course.title.charAt(0)}
                            </div>
                            <Badge variant={course.status === "即将开始" ? "secondary" : course.status === "进行中" ? "default" : "outline"} className="text-xs">
                              {course.status}
                            </Badge>
                          </div>
                          
                          <h4 className="text-white font-medium mb-3 text-sm leading-relaxed">{course.title}</h4>
                          
                          <p className="text-slate-400 text-xs mb-4 line-clamp-3 flex-1">
                            {course.title === "代数2学习实验室" 
                              ? "探索代数 2 学习实验室概念难懂？依靠同伴辅导来提升学习进度。"
                              : course.title === "计算机工程"
                              ? "Learn Php CodeIgniter and understand working with MVC and HMVC from zero to hero"
                              : "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills"
                            }
                          </p>
                          
                          <div className="space-y-3 mt-auto">
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                              <span className="text-slate-400 text-xs">{course.instructor}</span>
                            </div>
                            <div className="text-slate-400 text-xs">{course.students}</div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="text-slate-400 text-xs">已收藏</span>
                              </div>
                              <span className="text-green-400 font-bold text-sm">{course.price}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="following" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">全部关注</h2>
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
                                <h3 
                                  className="text-white font-medium cursor-pointer hover:text-green-400"
                                  onClick={() => {
                                    setSelectedUser(person);
                                    setShowUserInfo(true);
                                  }}
                                >
                                  {person.name}
                                </h3>
                                <div className="flex items-center space-x-4 text-sm text-slate-400">
                                  <span>{person.grade}</span>
                                  <span>{person.topics}</span>
                                  <span>{person.followers}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                                取消关注
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
                <CardHeader className="pb-0">
                  <div className="relative h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-lg -mx-6 -mt-6 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20"></div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <div className="text-center -mt-12">
                    <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-slate-800">
                      <span className="text-white text-xl">👤</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg">陈俊杰 👋</h3>
                    <p className="text-slate-400 text-sm">Fike it until you make it, fighting~</p>
                  </div>
                  
                  <div className="text-center space-y-1">
                    <div className="text-slate-400 text-sm">{t('personal.achievement')}</div>
                    <div className="text-green-400 font-semibold">{t('personal.completedAll')}</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-400">700 {t('points.points')}</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                        <span className="text-slate-400">{t('personal.studyExpert')}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">500 积分</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">300 积分</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => setShowEditProfile(true)}
                  >
                    {t('personal.edit')}
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">{t('personal.userInfo')}</CardTitle>
                    <Button variant="ghost" size="sm">
                      <Plus className="h-4 w-4 text-green-400" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-white font-medium text-lg">{t('personal.education')}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 text-sm">B.Sc - Informatics Engineering</span>
                      <span className="text-green-400 text-sm">{t('personal.addNew')}</span>
                    </div>
                    <div className="text-slate-300 text-sm">University of London United Kingdom 2018</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-medium text-lg">{t('personal.certificates')}</h4>
                      <span className="text-green-400 text-sm">{t('personal.addNew')}</span>
                    </div>
                    <div className="text-slate-300 text-sm">{t('personal.honorCertificate')}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
      
      {selectedUser && (
        <UserInfoModal
          isOpen={showUserInfo}
          onOpenChange={setShowUserInfo}
          user={selectedUser}
        />
      )}
      
      <EditProfileModal
        isOpen={showEditProfile}
        onOpenChange={setShowEditProfile}
      />
    </div>
  );
};

export default PersonalCenter;
