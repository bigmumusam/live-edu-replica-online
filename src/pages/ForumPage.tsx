
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Eye, ThumbsUp, ThumbsDown, Clock } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const ForumPage = () => {
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
      avatar: "bg-blue-500"
    },
    {
      id: 2,
      user: "Lori Rodriguez",
      time: "19分钟前",
      title: "Escriba, plugin for Copy&Paste selected overrides",
      content: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl.",
      likes: 0,
      dislikes: 81,
      views: 75,
      replies: 5,
      tag: "物理",
      avatar: "bg-orange-500"
    },
    {
      id: 3,
      user: "Randy Walsh",
      time: "3天前提问",
      title: "Escriba, plugin for Copy&Paste selected overrides",
      content: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl.",
      likes: 40,
      dislikes: 0,
      views: 75,
      replies: 5,
      tag: "物理",
      avatar: "bg-green-500"
    }
  ];

  const categories = [
    { name: "代数", count: 383, color: "bg-blue-500" },
    { name: "几何学", count: 268, color: "bg-yellow-500" },
    { name: "SAT", count: 197, color: "bg-red-500" },
    { name: "生物学", count: 661, color: "bg-green-500" },
    { name: "物理学", count: 845, color: "bg-blue-400" },
    { name: "统计数据", count: 108, color: "bg-purple-500" },
    { name: "微积分实验室", count: 232, color: "bg-orange-500" }
  ];

  const hotTopics = [
    { name: "代数", count: 383 },
    { name: "几何学", count: 268 },
    { name: "物理", count: 197 },
    { name: "统计", count: 108 }
  ];

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title="话题论坛" />
        
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <Tabs defaultValue="latest" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 mb-6">
                  <TabsTrigger value="latest" className="text-slate-300 data-[state=active]:text-green-400 data-[state=active]:border-b-2 data-[state=active]:border-green-400">最新 (38)</TabsTrigger>
                  <TabsTrigger value="hot" className="text-slate-300 data-[state=active]:text-green-400">最热</TabsTrigger>
                </TabsList>

                <TabsContent value="latest" className="space-y-6">
                  {discussions.map((discussion) => (
                    <Card key={discussion.id} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 ${discussion.avatar} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                            {discussion.user.charAt(0)}
                          </div>
                          <div className="flex-1 space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <h4 className="text-white font-medium">{discussion.user}</h4>
                                <p className="text-slate-400 text-sm">{discussion.time}</p>
                              </div>
                              <Badge variant="secondary">{discussion.tag}</Badge>
                            </div>
                            
                            <div className="space-y-3">
                              <h5 className="text-white font-medium text-lg">{discussion.title}</h5>
                              <p className="text-slate-300 leading-relaxed">{discussion.content}</p>
                            </div>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                  <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300 p-0 h-auto">
                                    <ThumbsUp className="h-4 w-4 mr-1" />
                                    +{discussion.likes}
                                  </Button>
                                  {discussion.dislikes > 0 && (
                                    <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 p-0 h-auto">
                                      <ThumbsDown className="h-4 w-4 mr-1" />
                                      -{discussion.dislikes}
                                    </Button>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center space-x-4 text-slate-400 text-sm">
                                <div className="flex items-center space-x-1">
                                  <Eye className="h-4 w-4" />
                                  <span>阅读 {discussion.views}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MessageSquare className="h-4 w-4" />
                                  <span>评论 {discussion.replies}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="hot" className="space-y-6">
                  {discussions.map((discussion) => (
                    <Card key={discussion.id} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 ${discussion.avatar} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                            {discussion.user.charAt(0)}
                          </div>
                          <div className="flex-1 space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <h4 className="text-white font-medium">{discussion.user}</h4>
                                <p className="text-slate-400 text-sm">{discussion.time}</p>
                              </div>
                              <Badge variant="secondary">{discussion.tag}</Badge>
                            </div>
                            
                            <div className="space-y-3">
                              <h5 className="text-white font-medium text-lg">{discussion.title}</h5>
                              <p className="text-slate-300 leading-relaxed">{discussion.content}</p>
                            </div>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                  <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300 p-0 h-auto">
                                    <ThumbsUp className="h-4 w-4 mr-1" />
                                    +{discussion.likes}
                                  </Button>
                                  {discussion.dislikes > 0 && (
                                    <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 p-0 h-auto">
                                      <ThumbsDown className="h-4 w-4 mr-1" />
                                      -{discussion.dislikes}
                                    </Button>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center space-x-4 text-slate-400 text-sm">
                                <div className="flex items-center space-x-1">
                                  <Eye className="h-4 w-4" />
                                  <span>阅读 {discussion.views}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MessageSquare className="h-4 w-4" />
                                  <span>评论 {discussion.replies}</span>
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

            {/* Sidebar */}
            <div className="space-y-6">
              <Button className="w-full bg-green-600 hover:bg-green-700 h-12">
                发起话题讨论
              </Button>
              
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">讨论专区</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="ghost" className="w-full justify-start text-green-400">
                    💬 全部讨论
                  </Button>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-4 h-4 ${category.color} rounded-full`}></div>
                          <span className="text-slate-300">{category.name}</span>
                        </div>
                        <span className="text-slate-400 text-sm">{category.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">热门标签</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {hotTopics.map((topic) => (
                      <Badge key={topic.name} variant="secondary" className="bg-slate-700 text-slate-300">
                        {topic.name}
                      </Badge>
                    ))}
                    <Badge variant="secondary" className="bg-slate-700 text-slate-300">物理</Badge>
                    <Badge variant="secondary" className="bg-slate-700 text-slate-300">统计</Badge>
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
