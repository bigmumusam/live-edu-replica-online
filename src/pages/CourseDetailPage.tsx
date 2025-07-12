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
import { useLanguage } from "@/contexts/LanguageContext";

const CourseDetailPage = () => {
  const { t, language } = useLanguage();
  const lessons = [
    { id: 1, title: language === 'zh' ? "01预习" : "01 Preview", duration: language === 'zh' ? "20分钟" : "20 min", completed: false, current: false },
    { id: 2, title: language === 'zh' ? "代数基础" : "Algebra Basics", duration: language === 'zh' ? "20分钟" : "20 min", completed: true, current: false },
    { id: 3, title: language === 'zh' ? "2.介绍" : "2. Introduction", duration: language === 'zh' ? "20分钟" : "20 min", completed: true, current: true },
    { id: 4, title: language === 'zh' ? "预习02" : "Preview 02", duration: language === 'zh' ? "20分钟" : "20 min", completed: false, current: false },
    { id: 5, title: language === 'zh' ? "预习03" : "Preview 03", duration: language === 'zh' ? "15分钟" : "15 min", completed: false, current: false },
    { id: 6, title: language === 'zh' ? "预习04" : "Preview 04", duration: language === 'zh' ? "24分钟" : "24 min", completed: false, current: false },
    { id: 7, title: language === 'zh' ? "预习05" : "Preview 05", duration: language === 'zh' ? "18分钟" : "18 min", completed: false, current: false }
  ];

  const sections = [
    { title: language === 'zh' ? "第一部分: 代数基础" : "Part 1: Algebra Basics", lessons: lessons.slice(0, 3) },
    { title: language === 'zh' ? "第二部分: 代数第一章" : "Part 2: Chapter 1 of Algebra", lessons: lessons.slice(3) }
  ];

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title={t('courseDetail.title')} />
        
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
                        <h3 className="text-2xl font-bold">{language === 'zh' ? '探索代数 2 学习实验室' : 'Algebra 2 Learning Lab'}</h3>
                        <p className="text-lg">{language === 'zh' ? '概念难懂？依靠同伴辅导来提升学习进度' : 'Difficult concepts? Rely on peer tutoring to improve your learning progress.'}</p>
                        <div className="bg-orange-500 text-white px-4 py-2 rounded inline-block">
                          <span className="font-medium">{language === 'zh' ? 'Gerald Gibson' : 'Gerald Gibson'}</span>
                          <div className="text-sm">{language === 'zh' ? '探索代数 2 学习实验室' : 'Algebra 2 Learning Lab'}</div>
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
                    <TabsTrigger value="overview" className="text-slate-300 data-[state=active]:text-green-400">{t('courseDetail.tab.overview')}</TabsTrigger>
                    <TabsTrigger value="qa" className="text-slate-300 data-[state=active]:text-green-400">{t('courseDetail.tab.qa')}</TabsTrigger>
                    <TabsTrigger value="reviews" className="text-slate-300 data-[state=active]:text-green-400">{t('courseDetail.tab.reviews')}</TabsTrigger>
                    <TabsTrigger value="assignments" className="text-slate-300 data-[state=active]:text-green-400">{t('courseDetail.tab.assignments')}</TabsTrigger>
                    <TabsTrigger value="downloads" className="text-slate-300 data-[state=active]:text-green-400">{t('courseDetail.tab.downloads')}</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="p-6">
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white">{t('courseDetail.introTitle')}</h3>
                      <p className="text-slate-300 leading-relaxed">
                        {language === 'zh'
                          ? 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.'
                          : 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.'}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-white">{t('courseDetail.infoTitle')}</h4>
                          <div className="space-y-2 text-slate-300">
                            <div className="flex justify-between">
                              <span>{t('courseDetail.info.time')}</span>
                              <span>{language === 'zh' ? '每周二、四 19:00-20:30' : 'Tue & Thu 19:00-20:30'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t('courseDetail.info.method')}</span>
                              <span>{language === 'zh' ? '直播+课件' : 'Live + Materials'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t('courseDetail.info.duration')}</span>
                              <span>{language === 'zh' ? '20课时' : '20 lessons'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t('courseDetail.info.grade')}</span>
                              <span>{language === 'zh' ? '高一、高二' : 'Grade 10, 11'}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-white">{t('courseDetail.learnTitle')}</h4>
                          <ul className="text-slate-300 space-y-1">
                            <li>• {language === 'zh' ? '环境搭建' : 'Setting up the environment'}</li>
                            <li>• {language === 'zh' ? '理解HTML编程' : 'Understanding HTML Programming'}</li>
                            <li>• {language === 'zh' ? '代数基础概念与运算' : 'Algebra basics and operations'}</li>
                            <li>• {language === 'zh' ? '方程式求解技巧' : 'Equation solving skills'}</li>
                            <li>• {language === 'zh' ? '实际问题应用' : 'Practical problem applications'}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="p-6">
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

                  <TabsContent value="qa" className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">问答</h3>
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                          {t('courseDetail.qa.askButton')}
                        </Button>
                      </div>
                      
                      {/* Q&A 内容区 */}
                      <div className="space-y-4">
                        <div className="bg-slate-700/30 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              Q
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-white font-medium">学生张三</span>
                                <span className="text-slate-400 text-sm">2024-01-15 14:30</span>
                              </div>
                              <p className="text-slate-300 mb-3">
                                {language === 'zh' ? '老师，在解二次方程时，什么情况下使用求根公式比较好？什么时候用配方法更合适？' : 'Teacher, when is it better to use the quadratic formula and when is it more suitable to use the method of completing the square?'}
                              </p>
                              
                              <div className="flex items-start space-x-3 mt-4 pl-4 border-l-2 border-green-500">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                  A
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <span className="text-white font-medium">Gerald Gibson</span>
                                    <span className="text-slate-400 text-sm">2024-01-15 15:45</span>
                                  </div>
                                  <p className="text-slate-300">
                                    {language === 'zh' ? '很好的问题！一般来说，当二次项系数为1且常数项较小时，配方法更直观。当系数复杂或需要精确计算时，求根公式更可靠。建议先尝试因式分解，如果不能分解再考虑其他方法。' : 'Great question! In general, when the coefficient of the quadratic term is 1 and the constant term is small, the method of completing the square is more intuitive. When the coefficient is complex or requires precise calculation, the quadratic formula is more reliable. It is recommended to first try factoring, and if it cannot be factored, consider other methods.'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-700/30 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              Q
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-white font-medium">学生李四</span>
                                <span className="text-slate-400 text-sm">2024-01-14 16:20</span>
                              </div>
                              <p className="text-slate-300">
                                {language === 'zh' ? '请问代数中的消元法有哪些常用技巧？' : 'What are some common techniques for elimination in algebra?'}
                              </p>
                            </div>
                          </div>
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
                            {t('courseDetail.assignments.startButton')} 📝
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
                            {t('courseDetail.assignments.startButton')} 📝
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
                            {t('courseDetail.assignments.startButton')} 📝
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
                          {t('courseDetail.downloads.downloadButton')}
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
                    <CardTitle className="text-white">{t('courseDetail.progressTitle')}</CardTitle>
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
