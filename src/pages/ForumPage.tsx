
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, Eye, ThumbsUp, ThumbsDown } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useState } from "react";

const ForumPage = () => {
  const [showMembershipModal, setShowMembershipModal] = useState(false);

  const discussions = [
    {
      id: 1,
      author: "Nicholas Simmons",
      time: "2分钟前提问",
      title: "AP生物考试时间管理有什么技巧?",
      content: "我做练习的时候总是感觉时间不够用，但这个事课标很明确，但看重以后不允许分数变化。我需要在不太公开的情况下，花更多时间",
      likes: 40,
      dislikes: 0,
      replies: 5,
      views: 75,
      badge: "生物",
      badgeColor: "bg-green-500"
    },
    {
      id: 2,
      author: "Lori Rodriguez",
      time: "19分钟前提问",
      title: "Escriba, plugin for Copy&Paste selected overrides",
      content: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam conubia...",
      likes: 40,
      dislikes: 61,
      replies: 5,
      views: 75,
      badge: "物理",
      badgeColor: "bg-blue-500"
    },
    {
      id: 3,
      author: "Randy Walsh",
      time: "3天前提问",
      title: "Escriba, plugin for Copy&Paste selected overrides",
      content: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam conubia...",
      likes: 40,
      dislikes: 0,
      replies: 5,
      views: 75,
      badge: "物理",
      badgeColor: "bg-blue-500"
    }
  ];

  const categories = [
    { name: "代数", count: 383, color: "bg-purple-500" },
    { name: "几何学", count: 684, color: "bg-orange-500" },
    { name: "SAT", count: 197, color: "bg-red-500" },
    { name: "生物学", count: 661, color: "bg-green-500" },
    { name: "物理学", count: 845, color: "bg-blue-500" },
    { name: "统计数据", count: 198, color: "bg-purple-600" },
    { name: "微积分实验室", count: 282, color: "bg-orange-600" }
  ];

  const tags = [
    "代数", "微积分", "物理", "bug", "artboard", "text", "export", "override", 
    "craft", "sketch plugin", "error 404", "angular", "bootstrap", "html 5", 
    "css 3", "javascript", "workflow", "update"
  ];

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar onMembershipClick={() => setShowMembershipModal(true)} />
      
      <div className="flex-1">
        <Header title="话题中心" />
        
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <Tabs defaultValue="all" className="w-full">
                  <div className="flex items-center justify-between">
                    <TabsList className="bg-slate-800/50 border-slate-700">
                      <TabsTrigger value="all" className="text-slate-300 data-[state=active]:text-green-400">
                        全部 (38)
                      </TabsTrigger>
                      <TabsTrigger value="latest" className="text-slate-300 data-[state=active]:text-green-400">
                        最新
                      </TabsTrigger>
                      <TabsTrigger value="hot" className="text-slate-300 data-[state=active]:text-green-400">
                        最热
                      </TabsTrigger>
                    </TabsList>
                    
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      发起话题讨论
                    </Button>
                  </div>

                  <TabsContent value="all" className="space-y-4 mt-6">
                    {discussions.map((discussion) => (
                      <Card key={discussion.id} className="bg-slate-800/50 border-slate-700">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                              {discussion.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <span className="text-white font-medium">{discussion.author}</span>
                                <span className="text-slate-400 text-sm">{discussion.time}</span>
                                <Badge className={`${discussion.badgeColor} text-white text-xs`}>
                                  {discussion.badge}
                                </Badge>
                              </div>
                              
                              <h3 className="text-white text-lg font-medium mb-3">
                                {discussion.title}
                              </h3>
                              
                              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                {discussion.content}
                              </p>
                              
                              <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                  <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300 p-0">
                                    <ThumbsUp className="h-4 w-4 mr-1" />
                                    +{discussion.likes}
                                  </Button>
                                  {discussion.dislikes > 0 && (
                                    <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 p-0">
                                      <ThumbsDown className="h-4 w-4 mr-1" />
                                      -{discussion.dislikes}
                                    </Button>
                                  )}
                                </div>
                                
                                <div className="flex items-center space-x-1 text-slate-400">
                                  <Eye className="h-4 w-4" />
                                  <span className="text-sm">阅读 {discussion.views}</span>
                                </div>
                                
                                <div className="flex items-center space-x-1 text-slate-400">
                                  <MessageCircle className="h-4 w-4" />
                                  <span className="text-sm">评论 {discussion.replies}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="latest" className="space-y-4 mt-6">
                    <div className="text-center text-slate-400 py-8">
                      最新话题内容
                    </div>
                  </TabsContent>

                  <TabsContent value="hot" className="space-y-4 mt-6">
                    <div className="text-center text-slate-400 py-8">
                      热门话题内容
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Discussion Categories */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4">
                  <h3 className="text-white font-medium mb-4">讨论专区</h3>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white mb-4">
                    全部讨论
                  </Button>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center justify-between p-2 rounded hover:bg-slate-700/50 cursor-pointer">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 ${category.color} rounded-full`}></div>
                          <span className="text-slate-300 text-sm">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Hot Tags */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4">
                  <h3 className="text-white font-medium mb-4">热门标签</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="border-slate-600 text-slate-300 hover:border-green-500 hover:text-green-400 cursor-pointer text-xs"
                      >
                        {tag}
                      </Badge>
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

export default ForumPage;
