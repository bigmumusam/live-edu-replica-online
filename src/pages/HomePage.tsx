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
                <span className="text-white font-bold text-sm">🏠</span>
              </div>
              <span className="text-white font-semibold text-xl">Online Studies</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#courses" className="text-slate-300 hover:text-white transition-colors">
                {language === 'zh' ? '课程' : 'Courses'}
              </a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                {language === 'zh' ? '关于我们' : 'About Us'}
              </a>
              
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
                {language === 'zh' ? '注册' : 'Register'}
              </Button>
              
              <Dialog open={isLoginOpen} onOpenChange={(v) => {
                setIsLoginOpen(v);
                if (!v) setTimeout(() => loginTriggerRef.current?.focus(), 0);
              }}>
                <DialogTrigger asChild>
                  <Button ref={loginTriggerRef} className="bg-green-600 hover:bg-green-700">
                    {language === 'zh' ? '立即开始学习' : 'Start Learning'}
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
                  🎯 {language === 'zh' ? '个性化学习体验' : 'Personalized Learning Experience'}
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {language === 'zh' ? '开启您的' : 'Start Your'}
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {language === 'zh' ? '在线学习' : 'Online Learning'}
                  </span>
                  {language === 'zh' ? '之旅' : 'Journey'}
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {language === 'zh' 
                    ? '与全球50,000+学习者一起，通过我们的实战课程掌握核心技能，获得1对1指导和认证，让学习变得高效且有趣。'
                    : 'Join 50,000+ learners worldwide, master core skills through our practical courses, get 1-on-1 guidance and certification, making learning efficient and fun.'
                  }
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog open={isLoginOpen} onOpenChange={(v) => {
                  setIsLoginOpen(v);
                  if (!v) setTimeout(() => loginTriggerRef.current?.focus(), 0);
                }}>
                  <DialogTrigger asChild>
                    <Button ref={loginTriggerRef} size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                      {language === 'zh' ? '免费开始学习' : 'Start Learning Free'}
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
                  {language === 'zh' ? '观看介绍视频' : 'Watch Intro Video'}
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-slate-400">{language === 'zh' ? '活跃学员' : 'Active Students'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-sm text-slate-400">{language === 'zh' ? '精品课程' : 'Premium Courses'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9</div>
                  <div className="text-sm text-slate-400">{language === 'zh' ? '平均评分' : 'Average Rating'}</div>
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
                        <h3 className="text-white font-semibold">代数2学习实验室</h3>
                        <p className="text-slate-400 text-sm">2581人参与 • 4.8★</p>
                      </div>
                    </div>
                    
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm">学习进度</span>
                        <span className="text-green-400 text-sm">75%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Badge className="bg-blue-600">实战项目</Badge>
                      <Badge className="bg-purple-600">认证课程</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg animate-pulse">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">今日完成</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-500 rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-white" />
                  <span className="text-white text-sm font-medium">实时互动</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section id="courses" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">热门学习路径</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              根据行业需求精心设计的学习路径，从入门到精通，助您快速掌握核心技能
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "数学基础强化",
                description: "代数、几何、微积分全面覆盖",
                courses: "12门课程",
                students: "15,234",
                color: "from-red-500 to-pink-500",
                icon: "📐"
              },
              {
                title: "编程入门",
                description: "Python、JavaScript零基础入门",
                courses: "18门课程", 
                students: "22,156",
                color: "from-blue-500 to-cyan-500",
                icon: "💻"
              },
              {
                title: "数据科学",
                description: "统计学、机器学习实战应用",
                courses: "15门课程",
                students: "8,967",
                color: "from-green-500 to-teal-500",
                icon: "📊"
              }
            ].map((path, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-2xl flex items-center justify-center text-2xl mb-4`}>
                    {path.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{path.title}</h3>
                    <p className="text-slate-400 mb-4">{path.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-400">{path.courses}</span>
                      <span className="text-slate-400">{path.students} 学员</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                    开始学习
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">学员成功故事</h2>
            <p className="text-xl text-slate-300">看看我们的学员如何通过学习改变人生</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "李小明",
                role: "从零基础到数据分析师",
                content: "通过3个月的学习，我成功转行成为数据分析师，薪资提升了60%。",
                avatar: "👨‍💻",
                company: "阿里巴巴"
              },
              {
                name: "张小花",
                role: "高中生考入清华",
                content: "数学成绩从60分提升到145分，最终考入清华大学计算机系。",
                avatar: "👩‍🎓",
                company: "清华大学"
              },
              {
                name: "王小强",
                role: "创业者技能提升",
                content: "学会了编程和数据分析，为我的创业项目提供了技术支持。",
                avatar: "👨‍💼",
                company: "自主创业"
              }
            ].map((story, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
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
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-green-400" />,
                title: "1对1指导",
                description: "专业导师全程陪伴"
              },
              {
                icon: <Trophy className="h-8 w-8 text-yellow-400" />,
                title: "权威认证",
                description: "完成即获行业认可证书"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-400" />,
                title: "学习社区",
                description: "与同学互助学习进步"
              },
              {
                icon: <BookOpen className="h-8 w-8 text-purple-400" />,
                title: "实战项目",
                description: "真实项目提升实战能力"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 space-y-8">
            <h2 className="text-4xl font-bold text-white">
              准备好开始您的学习之旅了吗？
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              加入我们的学习社区，与全球学员一起成长，掌握未来必备技能
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isLoginOpen} onOpenChange={(v) => {
                setIsLoginOpen(v);
                if (!v) setTimeout(() => loginTriggerRef.current?.focus(), 0);
              }}>
                <DialogTrigger asChild>
                  <Button ref={loginTriggerRef} size="lg" className="bg-white text-green-600 hover:bg-slate-100 text-lg px-8 py-4">
                    立即免费注册
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-transparent border-0">
                  <DialogTitle className="sr-only">登录</DialogTitle>
                  <DialogDescription className="sr-only">请输入登录信息。</DialogDescription>
                  <LoginPage idPrefix="login-dialog-3" />
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
                了解更多课程
              </Button>
            </div>
            
            <p className="text-sm text-green-100">
              🎁 新用户注册即送价值 ¥299 的精品课程
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🏠</span>
                </div>
                <span className="text-white font-semibold">Online Studies</span>
              </div>
              <p className="text-slate-400">
                专业的在线教育平台，为您提供优质的学习体验。
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">热门课程</h4>
              <div className="space-y-2 text-slate-400">
                <div>数学基础</div>
                <div>编程入门</div>
                <div>数据科学</div>
                <div>机器学习</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">帮助中心</h4>
              <div className="space-y-2 text-slate-400">
                <div>常见问题</div>
                <div>联系客服</div>
                <div>学习指南</div>
                <div>技术支持</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">关注我们</h4>
              <div className="space-y-2 text-slate-400">
                <div>微信公众号</div>
                <div>新浪微博</div>
                <div>QQ群</div>
                <div>客服电话：400-123-4567</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Online Studies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;