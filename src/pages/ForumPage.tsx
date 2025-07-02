
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, Eye, ThumbsUp, ThumbsDown, ChevronDown, ChevronUp, Plus, Users, LogOut, LogIn } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CreateTopicModal from "@/components/forum/CreateTopicModal";
import CommentsModal from "@/components/forum/CommentsModal";
import { useState } from "react";
import { showToast } from "@/components/shared/Toast";

const ForumPage = () => {
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [showCreateTopic, setShowCreateTopic] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("");
  const [expandedDiscussion, setExpandedDiscussion] = useState<number | null>(null);
  const [joinedClubs, setJoinedClubs] = useState<string[]>([]);
  const [showComments, setShowComments] = useState(false);
  const [selectedDiscussion, setSelectedDiscussion] = useState<any>(null);

  const allDiscussions = [
    {
      id: 1,
      author: "Nicholas Simmons",
      time: "2分钟前提问",
      title: "AP生物考试时间管理有什么技巧?",
      content: "我做练习的时候总是感觉时间不够用，但这个事课标很明确，但看重以后不允许分数变化。我需要在不太公开的情况下，花更多时间",
      fullContent: "我做练习的时候总是感觉时间不够用，但这个事课标很明确，但看重以后不允许分数变化。我需要在不太公开的情况下，花更多时间。具体来说，我在做生物选择题的时候经常纠结于两个答案之间，浪费了很多时间。有没有什么好的方法能够快速判断正确答案？另外，实验题部分我总是分析不够深入，该怎么提高？",
      likes: 40,
      dislikes: 0,
      replies: 5,
      views: 75,
      badge: "生物",
      badgeColor: "bg-green-500",
      category: "生物学",
      tags: ["生物", "考试技巧"]
    },
    {
      id: 2,
      author: "Lori Rodriguez", 
      time: "19分钟前提问",
      title: "物理力学计算中的常见错误",
      content: "在处理力学问题时，我经常在受力分析和运动学方程的应用上出错...",
      fullContent: "在处理力学问题时，我经常在受力分析和运动学方程的应用上出错。特别是在处理斜面问题和圆周运动时，总是搞不清楚各种力的方向和大小关系。有时候我知道应该用哪个公式，但是在具体计算时总是代入错误的数值。老师能帮我总结一下力学计算的基本步骤和注意事项吗？",
      likes: 28,
      dislikes: 3,
      replies: 8,
      views: 120,
      badge: "物理",
      badgeColor: "bg-blue-500",
      category: "物理学",
      tags: ["物理", "力学", "计算"]
    },
    {
      id: 3,
      author: "Randy Walsh",
      time: "3天前提问", 
      title: "代数方程组求解的技巧分享",
      content: "最近在学习线性方程组，想和大家分享一些求解技巧...",
      fullContent: "最近在学习线性方程组，想和大家分享一些求解技巧。我发现消元法虽然是基础方法，但是在处理复杂方程组时容易出错。后来老师教了我矩阵方法，感觉效率提高了很多。另外，在判断方程组解的情况时，有没有什么快速的判别方法？希望大家一起讨论。",
      likes: 35,
      dislikes: 0,
      replies: 12,
      views: 200,
      badge: "数学",
      badgeColor: "bg-purple-500",
      category: "代数",
      tags: ["代数", "方程组", "数学技巧"]
    },
    {
      id: 4,
      author: "Sarah Chen",
      time: "1小时前提问",
      title: "几何证明题的解题思路",
      content: "几何证明一直是我的弱项，总是找不到突破口...",
      fullContent: "几何证明一直是我的弱项，总是找不到突破口。面对一道证明题，我常常不知道从哪里开始分析。老师说要先观察图形特点，但我总是看不出规律。有没有什么系统的方法可以帮助分析几何证明题？特别是那些涉及全等三角形和相似三角形的问题。",
      likes: 22,
      dislikes: 1,
      replies: 6,
      views: 89,
      badge: "数学",
      badgeColor: "bg-purple-500",
      category: "几何学",
      tags: ["几何", "证明题", "数学思维"]
    }
  ];

  // 根据选择的分类和标签过滤讨论
  const getFilteredDiscussions = () => {
    let filtered = allDiscussions;
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(d => d.category === selectedCategory);
    }
    
    if (selectedTag) {
      filtered = filtered.filter(d => d.tags.includes(selectedTag));
    }
    
    return filtered;
  };

  const discussions = getFilteredDiscussions();

  const categories = [
    { name: "代数", count: 383, color: "bg-purple-500", id: "代数" },
    { name: "几何学", count: 684, color: "bg-orange-500", id: "几何学" },
    { name: "SAT", count: 197, color: "bg-red-500", id: "SAT" },
    { name: "生物学", count: 661, color: "bg-green-500", id: "生物学" },
    { name: "物理学", count: 845, color: "bg-blue-500", id: "物理学" },
    { name: "统计数据", count: 198, color: "bg-purple-600", id: "统计数据" },
    { name: "微积分实验室", count: 282, color: "bg-orange-600", id: "微积分实验室" }
  ];

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? "all" : categoryId);
    setSelectedTag(""); // 清除标签选择
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? "" : tag);
    setSelectedCategory("all"); // 清除分类选择
  };

  const handleJoinClub = (clubName: string) => {
    if (joinedClubs.includes(clubName)) {
      setJoinedClubs(joinedClubs.filter(club => club !== clubName));
      showToast.success(`已退出${clubName}俱乐部`);
    } else {
      setJoinedClubs([...joinedClubs, clubName]);
      showToast.success(`已加入${clubName}俱乐部`);
    }
  };

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
                    
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => setShowCreateTopic(true)}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      发起话题讨论
                    </Button>
                  </div>

                  <TabsContent value="all" className="space-y-4 mt-6">
                    {discussions.map((discussion) => (
                      <Card key={discussion.id} className="bg-slate-800/50 border-slate-700">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {discussion.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <span className="text-white font-medium text-sm">{discussion.author}</span>
                                <span className="text-slate-400 text-xs">{discussion.time}</span>
                                <Badge className={`${discussion.badgeColor} text-white text-xs`}>
                                  {discussion.badge}
                                </Badge>
                              </div>
                              
                              <h3 
                                className="text-white text-base font-medium mb-2 cursor-pointer hover:text-green-400"
                                onClick={() => setExpandedDiscussion(expandedDiscussion === discussion.id ? null : discussion.id)}
                              >
                                {discussion.title}
                                {expandedDiscussion === discussion.id ? (
                                  <ChevronUp className="h-4 w-4 inline ml-2" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 inline ml-2" />
                                )}
                              </h3>
                              
                              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                                {expandedDiscussion === discussion.id ? discussion.fullContent : discussion.content}
                              </p>
                              
                              <div className="flex items-center space-x-4 text-xs">
                                <div className="flex items-center space-x-2">
                                  <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300 p-0 h-auto">
                                    <ThumbsUp className="h-3 w-3 mr-1" />
                                    +{discussion.likes}
                                  </Button>
                                  {discussion.dislikes > 0 && (
                                    <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 p-0 h-auto">
                                      <ThumbsDown className="h-3 w-3 mr-1" />
                                      -{discussion.dislikes}
                                    </Button>
                                  )}
                                </div>
                                
                                <div className="flex items-center space-x-1 text-slate-400">
                                  <Eye className="h-3 w-3" />
                                  <span>{discussion.views}</span>
                                </div>
                                
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="flex items-center space-x-1 text-slate-400 hover:text-green-400 p-0 h-auto"
                                  onClick={() => {
                                    setSelectedDiscussion(discussion);
                                    setShowComments(true);
                                  }}
                                >
                                  <MessageCircle className="h-3 w-3" />
                                  <span>{discussion.replies}</span>
                                </Button>
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
                  <h3 className="text-white font-medium mb-4">专区俱乐部</h3>
                  <Button 
                    className={`w-full mb-4 ${selectedCategory === "all" ? "bg-green-600 hover:bg-green-700" : "bg-slate-600 hover:bg-slate-700"} text-white`}
                    onClick={() => handleCategoryClick("all")}
                  >
                    全部讨论
                  </Button>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div 
                        key={category.name} 
                        className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                          selectedCategory === category.id ? "bg-green-600/20 border border-green-500/30" : "hover:bg-slate-700/50"
                        }`}
                        onClick={() => handleCategoryClick(category.id)}
                      >
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 ${category.color} rounded-full`}></div>
                          <span className="text-slate-300 text-sm">{category.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                            {category.count}
                          </Badge>
                          <Button
                            size="sm"
                            variant="ghost"
                            className={`h-6 px-2 text-xs ${
                              joinedClubs.includes(category.name)
                                ? "text-red-400 hover:text-red-300"
                                : "text-green-400 hover:text-green-300"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleJoinClub(category.name);
                            }}
                          >
                            {joinedClubs.includes(category.name) ? (
                              <LogOut className="h-3 w-3" />
                            ) : (
                              <LogIn className="h-3 w-3" />
                            )}
                          </Button>
                        </div>
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
                        className={`border-slate-600 text-slate-300 hover:border-green-500 hover:text-green-400 cursor-pointer text-xs transition-colors ${
                          selectedTag === tag ? "border-green-500 text-green-400 bg-green-500/10" : ""
                        }`}
                        onClick={() => handleTagClick(tag)}
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
      
      <CreateTopicModal 
        isOpen={showCreateTopic}
        onOpenChange={setShowCreateTopic}
      />
      
      <CommentsModal
        isOpen={showComments}
        onOpenChange={setShowComments}
        topicTitle={selectedDiscussion?.title || ""}
        topicContent={selectedDiscussion?.fullContent || ""}
      />
    </div>
  );
};

export default ForumPage;
