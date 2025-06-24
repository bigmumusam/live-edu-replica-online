
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react";

const DiscussionsTab = () => {
  const discussions = [
    {
      id: 1,
      user: "Nicholas Simmons",
      time: "23分钟前 生物学 话题",
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
      time: "19分钟前回答",
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

  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default DiscussionsTab;
