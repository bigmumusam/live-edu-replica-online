import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Pause, 
  Volume2, 
  Maximize, 
  Settings, 
  Bookmark,
  RotateCcw,
  Star,
  CheckCircle,
  Circle,
  Clock,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const CourseDetailPage = () => {
  const lessons = [
    { id: 1, title: "01预习", duration: "20分钟", completed: false, current: false },
    { id: 2, title: "代数基础", duration: "20分钟", completed: true, current: false },
    { id: 3, title: "2.介绍", duration: "20分钟", completed: true, current: true },
    { id: 4, title: "预习02", duration: "20分钟", completed: false, current: false },
    { id: 5, title: "预习03", duration: "15分钟", completed: false, current: false },
    { id: 6, title: "预习04", duration: "24分钟", completed: false, current: false },
    { id: 7, title: "预习05", duration: "18分钟", completed: false, current: false }
  ];

  const sections = [
    { title: "第一部分: 代数基础", lessons: lessons.slice(0, 3) },
    { title: "第二部分: 代数第一章", lessons: lessons.slice(3) }
  ];

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title="课程详情" />
        
        <main className="p-6 space-y-6">
          {/* Video Player */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <div className="relative aspect-video video-gradient flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">👨‍🏫</span>
                        </div>
                      </div>
                      <div className="text-white space-y-2">
                        <h3 className="text-2xl font-bold">探索代数 2 学习实验室</h3>
                        <p className="text-lg">概念难懂？依靠同伴辅导来提升学习进度</p>
                        <div className="bg-orange-500 text-white px-4 py-2 rounded inline-block">
                          <span className="font-medium">Gerald Gibson</span>
                          <div className="text-sm">探索代数 2 学习实验室</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center space-x-4 text-white">
                      <Button variant="ghost" size="sm" className="text-white">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white">
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                      <span className="text-sm">0.75x</span>
                      <Button variant="ghost" size="sm" className="text-white">
                        <RotateCcw className="h-4 w-4 scale-x-[-1]" />
                      </Button>
                      <span className="text-sm">1:30 / 20:00</span>
                      <Button variant="ghost" size="sm" className="text-white">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <div className="flex-1"></div>
                      <Button variant="ghost" size="sm" className="text-white">
                        <Volume2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white">
                        <div className="text-sm border px-2 py-1 rounded">CC</div>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white">
                        <Maximize className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white">
                        <ArrowLeft className="h-4 w-4" />
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Course Info Tabs */}
              <Card className="bg-slate-800/50 border-slate-700 mt-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-5 bg-slate-700/50">
                    <TabsTrigger value="overview" className="text-slate-300 data-[state=active]:text-green-400">简介</TabsTrigger>
                    <TabsTrigger value="qa" className="text-slate-300 data-[state=active]:text-green-400">问答</TabsTrigger>
                    <TabsTrigger value="reviews" className="text-slate-300 data-[state=active]:text-green-400">课程评价</TabsTrigger>
                    <TabsTrigger value="assignments" className="text-slate-300 data-[state=active]:text-green-400">作业</TabsTrigger>
                    <TabsTrigger value="downloads" className="text-slate-300 data-[state=active]:text-green-400">课件下载</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white">在线视频教学</h3>
                      <p className="text-slate-300">
                        你的积分获得以及申请成为一名在线学习教师，快行动起来吧～
                      </p>
                      <Button variant="outline" className="border-slate-600 text-slate-300">
                        立即申请
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="p-6">
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white">课程介绍</h3>
                      <p className="text-slate-300 leading-relaxed">
                        Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. 
                        Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt 
                        turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque 
                        luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, 
                        consequat ac magna quis, facilisis vehicula neque.
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-white">你将学习到:</h4>
                        <ul className="text-slate-300 space-y-1">
                          <li>• Setting up the environment</li>
                          <li>• Understanding HTML Programming</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="qa" className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white">学生评价</h3>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-white">4.4</div>
                          <div className="flex items-center justify-center space-x-1 mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                            ))}
                          </div>
                          <div className="text-slate-400 text-sm mt-1">评分</div>
                        </div>
                        <div className="flex-1 space-y-2">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <div className="flex-1 bg-slate-700 rounded-full h-2">
                                <div 
                                  className="bg-green-500 h-2 rounded-full" 
                                  style={{ width: `${rating === 5 ? 70 : rating === 4 ? 60 : rating === 3 ? 40 : rating === 2 ? 20 : 10}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="assignments" className="p-6">
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white">课程作业</h3>
                      <div className="space-y-4">
                        <div className="bg-slate-700/50 p-4 rounded-lg flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              01
                            </div>
                            <span className="text-white">长春外国语学校第一学期高一物理期末试卷及答案</span>
                          </div>
                          <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2">
                            开始答题 📝
                          </Button>
                        </div>
                        <div className="bg-slate-700/50 p-4 rounded-lg flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              02
                            </div>
                            <span className="text-white">长春外国语学校第一学期高一物理期末试卷及答案</span>
                          </div>
                          <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2">
                            开始答题 📝
                          </Button>
                        </div>
                        <div className="bg-slate-700/50 p-4 rounded-lg flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              03
                            </div>
                            <span className="text-white">长春外国语学校第一学期高一物理期末试卷及答案</span>
                          </div>
                          <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2">
                            开始答题 📝
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="downloads" className="p-6">
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white">课件下载</h3>
                      <div className="flex flex-col items-center justify-center py-12">
                        <div className="w-24 h-24 bg-slate-600 rounded-lg flex items-center justify-center mb-4">
                          <div className="text-white text-sm font-bold">ZIP</div>
                        </div>
                        <h4 className="text-white text-lg mb-2">第一学期高一物理第三章课件</h4>
                        <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">
                          下载
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>

            {/* Course Progress Sidebar */}
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">学习进度：13/39</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={33} className="w-full" />
                  
                  <div className="space-y-3">
                    {sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-3">
                        <h4 className="text-sm font-medium text-green-400">{section.title}</h4>
                        {section.lessons.map((lesson) => (
                          <div key={lesson.id} className="flex items-center space-x-3 p-2 rounded hover:bg-slate-700/50 cursor-pointer">
                            {lesson.completed ? (
                              <CheckCircle className="h-5 w-5 text-green-400" />
                            ) : lesson.current ? (
                              <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            ) : (
                              <Circle className="h-5 w-5 text-slate-400" />
                            )}
                            <div className="flex-1">
                              <div className="text-sm text-white">{lesson.title}</div>
                              <div className="flex items-center space-x-2 text-xs text-slate-400">
                                <Clock className="h-3 w-3" />
                                <span>{lesson.duration}</span>
                              </div>
                            </div>
                          </div>
                        ))}
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

export default CourseDetailPage;
