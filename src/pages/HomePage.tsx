import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Play, Star, ArrowRight, BookOpen, Users, Trophy, CheckCircle, Languages } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LoginPage from "./LoginPage";
import Footer from "@/components/shared/Footer";
import CTASection from "@/components/homepage/CTASection";

const HomePage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const loginTriggerRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-white font-semibold text-xl">Tutorloop</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-300 hover:text-white hover:bg-slate-700/50"
                  >
                    <Languages className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800 border-slate-700">
                  <DropdownMenuItem 
                    onClick={() => setLanguage('zh')}
                    className={`text-slate-300 hover:text-white hover:bg-slate-700 ${language === 'zh' ? 'bg-slate-700 text-white' : ''}`}
                  >
                    中文
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setLanguage('en')}
                    className={`text-slate-300 hover:text-white hover:bg-slate-700 ${language === 'en' ? 'bg-slate-700 text-white' : ''}`}
                  >
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
                onClick={() => navigate("/register")}
              >
                {t('register.submit')}
              </Button>
              
              <Dialog open={isLoginOpen} onOpenChange={(v) => {
                setIsLoginOpen(v);
                if (!v) setTimeout(() => loginTriggerRef.current?.focus(), 0);
              }}>
                <DialogTrigger asChild>
                  <Button ref={loginTriggerRef} className="bg-green-600 hover:bg-green-700">
                    {t('home.hero.startLearning')}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-transparent border-0">
                  <DialogTitle className="sr-only">登录</DialogTitle>
                  <DialogDescription className="sr-only">请输入登录信息。</DialogDescription>
                  <LoginPage idPrefix="login-dialog-1" />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-600/20 text-green-400 border-green-500/30">
                  🎯 {t('home.hero.badge')}
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {t('home.hero.title.start')}
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {t('home.hero.title.learning')}
                  </span>
                  {t('home.hero.title.journey')}
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {t('home.hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog open={isLoginOpen} onOpenChange={(v) => {
                  setIsLoginOpen(v);
                  if (!v) setTimeout(() => loginTriggerRef.current?.focus(), 0);
                }}>
                  <DialogTrigger asChild>
                    <Button ref={loginTriggerRef} size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                      {t('home.hero.startLearning')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-transparent border-0">
                    <DialogTitle className="sr-only">登录</DialogTitle>
                    <DialogDescription className="sr-only">请输入登录信息。</DialogDescription>
                    <LoginPage idPrefix="login-dialog-2" />
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-slate-600 text-white hover:bg-slate-800">
                  <Play className="mr-2 h-5 w-5" />
                  {t('home.hero.watchVideo')}
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-slate-400">{t('home.stats.students')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-sm text-slate-400">{t('home.stats.courses')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9</div>
                  <div className="text-sm text-slate-400">{t('home.stats.rating')}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
                <div className="bg-slate-900/90 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{language === 'zh' ? '代数2学习实验室' : 'Algebra 2 Learning Lab'}</h3>
                        <p className="text-slate-400 text-sm">
                          {language === 'zh' ? '2581人参与' : '2,581 joined'} • 4.8★
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm">{language === 'zh' ? '学习进度' : 'Progress'}</span>
                        <span className="text-green-400 text-sm">75%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                        <Badge className="bg-blue-600">{language === 'zh' ? '实战项目' : 'Project-based'}</Badge>
                        <Badge className="bg-purple-600">{language === 'zh' ? '认证课程' : 'Certified'}</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg animate-pulse">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">{language === 'zh' ? '今日完成' : 'Completed Today'}</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-500 rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-white" />
                  <span className="text-white text-sm font-medium">{language === 'zh' ? '实时互动' : 'Live Interaction'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Main Learning Types */}
      <section id="learning-types" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">
              {language === 'zh' ? '三大学习方式' : 'Three Learning Approaches'}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {language === 'zh' 
                ? '多样化的学习方式，满足不同学习需求和偏好，让每一个学员都能找到最适合自己的学习路径'
                : 'Diverse learning approaches to meet different learning needs and preferences, helping every student find their optimal learning path'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('home.clubCourses.title'),
                subtitle: t('home.clubCourses.subtitle'),
                icon: <Users className="h-8 w-8 text-white" />,
                color: "from-blue-500 to-cyan-500",
                features: [
                  language === 'zh' ? '免费参与' : 'Free to join',
                  language === 'zh' ? '小组学习' : 'Group learning',
                  language === 'zh' ? '互助成长' : 'Mutual growth',
                  language === 'zh' ? '社区支持' : 'Community support'
                ]
              },
              {
                title: t('home.oneOnOne.title'),
                subtitle: t('home.oneOnOne.subtitle'),
                icon: <CheckCircle className="h-8 w-8 text-white" />,
                color: "from-green-500 to-teal-500",
                features: [
                  language === 'zh' ? '个性化指导' : 'Personalized guidance',
                  language === 'zh' ? '专业导师' : 'Professional tutors',
                  language === 'zh' ? '灵活时间' : 'Flexible schedule',
                  language === 'zh' ? '快速提升' : 'Rapid improvement'
                ]
              },
              {
                title: t('home.lectures.title'),
                subtitle: t('home.lectures.subtitle'),
                icon: <Trophy className="h-8 w-8 text-white" />,
                color: "from-purple-500 to-pink-500",
                features: [
                  language === 'zh' ? '行业专家' : 'Industry experts',
                  language === 'zh' ? '前沿知识' : 'Cutting-edge knowledge',
                  language === 'zh' ? '实时互动' : 'Live interaction',
                  language === 'zh' ? '录播回看' : 'Recording available'
                ]
              }
            ].map((type, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-4`}>
                    {type.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                    <p className="text-slate-400 mb-4">{type.subtitle}</p>
                    
                    <div className="space-y-2 mb-4">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                    {language === 'zh' ? '了解详情' : 'Learn More'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories - Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">{t('home.studentStories.title')}</h2>
            <p className="text-xl text-slate-300">{t('home.studentStories.subtitle')}</p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* Create 20 student stories for carousel */}
              {Array.from({ length: 20 }, (_, index) => {
                const storyIndex = index % 3;
                const stories = [
                  {
                    name: t('home.studentStories.student1.name'),
                    role: t('home.studentStories.student1.role'),
                    content: t('home.studentStories.student1.content'),
                    avatar: "👨‍💻",
                    company: t('home.studentStories.student1.company')
                  },
                  {
                    name: t('home.studentStories.student2.name'),
                    role: t('home.studentStories.student2.role'),
                    content: t('home.studentStories.student2.content'),
                    avatar: "👩‍🎓",
                    company: t('home.studentStories.student2.company')
                  },
                  {
                    name: t('home.studentStories.student3.name'),
                    role: t('home.studentStories.student3.role'),
                    content: t('home.studentStories.student3.content'),
                    avatar: "👨‍💼",
                    company: t('home.studentStories.student3.company')
                  }
                ];
                const story = stories[storyIndex];
                
                return (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 mx-4 flex-shrink-0 w-80">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-xl">
                          {story.avatar}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{story.name}</h4>
                          <p className="text-slate-400 text-sm">{story.role}</p>
                        </div>
                      </div>
                      
                      <blockquote className="text-slate-300 italic">
                        "{story.content}"
                      </blockquote>
                      
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-slate-400 text-sm ml-2">{story.company}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
      />

      <Footer />
    </div>
  );
};

export default HomePage;