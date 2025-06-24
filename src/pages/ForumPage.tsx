
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Eye, ThumbsUp, ThumbsDown, Clock, Plus, X, Users, TrendingUp, Pin } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useState } from "react";

const ForumPage = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const discussions = [
    {
      id: 1,
      user: "Nicholas Simmons",
      time: "23分钟前",
      title: "AP生物考试时间管理有什么技巧?",
      content: "我看到网上有人说考了7分，但呢我觉得快速溜题目，再快速回人想该，而且让他们。我需要在不去分的情况下，花更多时间做题通过。",
      likes: 40,
      dislikes: 0,
      views: 75,
      replies: 5,
      tag: "生物",
      avatar: "bg-blue-500",
      isPinned: true,
      isHot: true
    },
    {
      id: 2,
      user: "Sarah Johnson",
      time: "35分钟前",
      title: "如何提高数学解题速度？",
      content: "最近做题总是时间不够，有什么好的方法可以提高解题速度吗？特别是在考试的时候，总是最后几题来不及做完。",
      likes: 25,
      dislikes: 2,
      views: 120,
      replies: 8,
      tag: "数学",
      avatar: "bg-green-500",
      isPinned: false,
      isHot: true
    },
    {
      id: 3,
      user: "David Chen",
      time: "1小时前",
      title: "物理力学部分重难点总结",
      content: "刚刚复习完力学部分，总结了一些重难点和易错点，希望对大家有帮助。主要包括牛顿定律的应用、动量守恒等内容。",
      likes: 67,
      dislikes: 1,
      views: 200,
      replies: 15,
      tag: "物理",
      avatar: "bg-purple-500",
      isPinned: false,
      isHot: true
    },
    {
      id: 4,
      user: "Emma Wilson",
      time: "2小时前",
      title: "化学方程式配平技巧？",
      content: "总是在化学方程式配平上出错，有没有什么好的技巧和方法？尤其是那些比较复杂的氧化还原反应。",
      likes: 18,
      dislikes: 0,
      views: 85,
      replies: 6,
      tag: "化学",
      avatar: "bg-orange-500",
      isPinned: false,
      isHot: false
    },
    {
      id: 5,
      user: "Mike Zhang",
      time: "3小时前",
      title: "英语阅读理解提分攻略",
      content: "分享一些英语阅读理解的解题技巧，包括如何快速定位关键信息、如何理解长难句等。这些方法帮我提高了不少分数。",
      likes: 92,
      dislikes: 3,
      views: 350,
      replies: 22,
      tag: "英语",
      avatar: "bg-cyan-500",
      isPinned: false,
      isHot: true
    },
    {
      id: 6,
      user: "Lori Rodriguez",
      time: "4小时前",
      title: "历史复习方法分享",
      content: "历史知识点多而杂，如何系统性地复习？分享一些我在历史学习中总结的方法和技巧。",
      likes: 31,
      dislikes: 1,
      views: 145,
      replies: 9,
      tag: "历史",
      avatar: "bg-red-500",
      isPinned: false,
      isHot: false
    }
  ];

  const categories = [
    { name: "数学", count: 383, color: "bg-blue-500", icon: "📐" },
    { name: "物理", count: 268, color: "bg-purple-500", icon: "⚛️" },
    { name: "化学", count: 197, color: "bg-orange-500", icon: "🧪" },
    { name: "生物", count: 661, color: "bg-green-500", icon: "🧬" },
    { name: "英语", count: 845, color: "bg-cyan-500", icon: "📚" },
    { name: "历史", count: 108, color: "bg-red-500", icon: "🏛️" },
    { name: "地理", count: 232, color: "bg-yellow-500", icon: "🌍" },
    { name: "政治", count: 156, color: "bg-pink-500", icon: "⚖️" }
  ];

  const hotTopics = [
    { name: "高考冲刺", count: 156 },
    { name: "学习方法", count: 134 },
    { name: "解题技巧", count: 98 },
    { name: "考试经验", count: 87 }
  ];

  const forumStats = {
    totalTopics: 2847,
    todayPosts: 156,
    onlineUsers: 1234,
    totalUsers: 45678
  };

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title="话题论坛" />
        
        <main className="p-6">
          {/* Forum Header Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-400">{forumStats.totalTopics}</div>
                <div className="text-sm text-slate-400">总话题数</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">{forumStats.todayPosts}</div>
                <div className="text-sm text-slate-400">今日发帖</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-400">{forumStats.onlineUsers}</div>
                <div className="text-sm text-slate-400">在线用户</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">{forumStats.totalUsers}</div>
                <div className="text-sm text-slate-400">注册用户</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center justify-between">
                <Tabs defaultValue="latest" className="w-full">
                  <div className="flex items-center justify-between mb-4">
                    <TabsList className="bg-slate-800/50 border-slate-700">
                      <TabsTrigger value="latest" className="text-slate-300 data-[state=active]:text-green-400">
                        <Clock className="h-4 w-4 mr-2" />
                        最新话题 (38)
                      </TabsTrigger>
                      <TabsTrigger value="hot" className="text-slate-300 data-[state=active]:text-green-400">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        热门话题
                      </TabsTrigger>
                    </TabsList>
                    
                    <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="bg-green-600 hover:bg-green-700">
                          <Plus className="h-4 w-4 mr-2" />
                          发起话题
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-3xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center justify-between">
                            <DialogTitle className="text-white text-xl">发起新话题</DialogTitle>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setIsCreateDialogOpen(false)}
                              className="text-slate-400 hover:text-white"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-slate-300 mb-2 block">话题分类</label>
                              <Select>
                                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                  <SelectValue placeholder="选择话题分类" />
                                </SelectTrigger>
                                <SelectContent>
                                  {categories.map((category) => (
                                    <SelectItem key={category.name} value={category.name}>
                                      {category.icon} {category.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-slate-300 mb-2 block">话题标签</label>
                              <Select>
                                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                  <SelectValue placeholder="选择话题标签" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="question">提问</SelectItem>
                                  <SelectItem value="discussion">讨论</SelectItem>
                                  <SelectItem value="sharing">分享</SelectItem>
                                  <SelectItem value="help">求助</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-300 mb-2 block">话题标题</label>
                            <Input 
                              placeholder="请输入简洁明了的话题标题..." 
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-300 mb-2 block">话题内容</label>
                            <div className="border border-slate-600 rounded-md bg-slate-700">
                              <div className="border-b border-slate-600 p-3 flex items-center space-x-2">
                                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                                  <strong>B</strong>
                                </Button>
                                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                                  <em>I</em>
                                </Button>
                                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                                  <u>U</u>
                                </Button>
                                <div className="w-px h-4 bg-slate-600"></div>
                                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                                  🔗
                                </Button>
                                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                                  📷
                                </Button>
                                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                                  📊
                                </Button>
                              </div>
                              <Textarea 
                                placeholder="请详细描述您的问题或想要讨论的内容。您可以：
1. 描述具体的学习问题
2. 分享学习经验和方法
3. 提出疑难问题请教大家
4. 分享有用的学习资源

请尽量提供详细信息，这样其他同学能更好地帮助您。" 
                                className="bg-transparent border-0 text-white min-h-48 resize-none focus:ring-0"
                              />
                            </div>
                          </div>
                          <div className="flex justify-end space-x-3">
                            <Button 
                              variant="outline" 
                              onClick={() => setIsCreateDialogOpen(false)}
                              className="border-slate-600 text-slate-300"
                            >
                              取消
                            </Button>
                            <Button className="bg-green-600 hover:bg-green-700">
                              发布话题
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <TabsContent value="latest" className="space-y-4">
                    {discussions.map((discussion) => (
                      <Card key={discussion.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 ${discussion.avatar} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                              {discussion.user.charAt(0)}
                            </div>
                            <div className="flex-1 space-y-3">
                              <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                  <div className="flex items-center space-x-2">
                                    {discussion.isPinned && <Pin className="h-4 w-4 text-green-400" />}
                                    {discussion.isHot && <TrendingUp className="h-4 w-4 text-orange-400" />}
                                    <h4 className="text-white font-medium text-lg hover:text-green-400 cursor-pointer">
                                      {discussion.title}
                                    </h4>
                                  </div>
                                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                                    <span>{discussion.user}</span>
                                    <span>•</span>
                                    <span>{discussion.time}</span>
                                  </div>
                                </div>
                                <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                                  {discussion.tag}
                                </Badge>
                              </div>
                              
                              <p className="text-slate-300 leading-relaxed line-clamp-2">{discussion.content}</p>
                              
                              <div className="flex items-center justify-between pt-3 border-t border-slate-700">
                                <div className="flex items-center space-x-6">
                                  <div className="flex items-center space-x-3">
                                    <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300 p-0 h-auto">
                                      <ThumbsUp className="h-4 w-4 mr-1" />
                                      {discussion.likes}
                                    </Button>
                                    {discussion.dislikes > 0 && (
                                      <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 p-0 h-auto">
                                        <ThumbsDown className="h-4 w-4 mr-1" />
                                        {discussion.dislikes}
                                      </Button>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center space-x-6 text-slate-400 text-sm">
                                  <div className="flex items-center space-x-1">
                                    <Eye className="h-4 w-4" />
                                    <span>{discussion.views}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <MessageSquare className="h-4 w-4" />
                                    <span>{discussion.replies}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="hot" className="space-y-4">
                    {discussions.filter(d => d.isHot).map((discussion) => (
                      <Card key={discussion.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 ${discussion.avatar} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                              {discussion.user.charAt(0)}
                            </div>
                            <div className="flex-1 space-y-3">
                              <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <TrendingUp className="h-4 w-4 text-orange-400" />
                                    <h4 className="text-white font-medium text-lg hover:text-green-400 cursor-pointer">
                                      {discussion.title}
                                    </h4>
                                  </div>
                                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                                    <span>{discussion.user}</span>
                                    <span>•</span>
                                    <span>{discussion.time}</span>
                                  </div>
                                </div>
                                <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                                  {discussion.tag}
                                </Badge>
                              </div>
                              
                              <p className="text-slate-300 leading-relaxed line-clamp-2">{discussion.content}</p>
                              
                              <div className="flex items-center justify-between pt-3 border-t border-slate-700">
                                <div className="flex items-center space-x-6">
                                  <div className="flex items-center space-x-3">
                                    <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300 p-0 h-auto">
                                      <ThumbsUp className="h-4 w-4 mr-1" />
                                      {discussion.likes}
                                    </Button>
                                    {discussion.dislikes > 0 && (
                                      <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 p-0 h-auto">
                                        <ThumbsDown className="h-4 w-4 mr-1" />
                                        {discussion.dislikes}
                                      </Button>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center space-x-6 text-slate-400 text-sm">
                                  <div className="flex items-center space-x-1">
                                    <Eye className="h-4 w-4" />
                                    <span>{discussion.views}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <MessageSquare className="h-4 w-4" />
                                    <span>{discussion.replies}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    学科讨论区
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between p-3 rounded hover:bg-slate-700/50 cursor-pointer transition-colors group">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center text-white`}>
                          {category.icon}
                        </div>
                        <span className="text-slate-300 group-hover:text-white transition-colors">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-400 text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    热门标签
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {hotTopics.map((topic) => (
                      <Badge 
                        key={topic.name} 
                        variant="secondary" 
                        className="bg-slate-700 text-slate-300 hover:bg-slate-600 cursor-pointer transition-colors"
                      >
                        {topic.name} ({topic.count})
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">论坛公告</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-slate-300 space-y-2">
                    <div className="p-2 bg-slate-700/50 rounded">
                      <div className="text-green-400 text-xs mb-1">📌 置顶公告</div>
                      <div>论坛使用规则更新通知</div>
                    </div>
                    <div className="p-2 bg-slate-700/50 rounded">
                      <div className="text-blue-400 text-xs mb-1">🎉 活动</div>
                      <div>学习分享活动正在进行中</div>
                    </div>
                    <div className="p-2 bg-slate-700/50 rounded">
                      <div className="text-orange-400 text-xs mb-1">⚠️ 提醒</div>
                      <div>请遵守社区规范，共建良好环境</div>
                    </div>
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

export default ForumPage;
