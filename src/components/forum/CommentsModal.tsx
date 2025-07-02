import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, ThumbsDown, MessageSquare, Send } from "lucide-react";
import { showToast } from "@/components/shared/Toast";

interface Comment {
  id: number;
  author: string;
  time: string;
  content: string;
  likes: number;
  dislikes: number;
  avatar: string;
  isTeacher?: boolean;
}

interface CommentsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  topicTitle: string;
  topicContent: string;
}

const CommentsModal = ({ isOpen, onOpenChange, topicTitle, topicContent }: CommentsModalProps) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const comments: Comment[] = [
    {
      id: 1,
      author: "张小明",
      time: "2小时前",
      content: "这个问题很有意思，我觉得首先需要理解基本概念。在处理这类问题时，可以先从简单的例子开始，逐步建立思维模式。建议多做一些相关的练习题来加深理解。",
      likes: 15,
      dislikes: 0,
      avatar: "bg-blue-500",
      isTeacher: true
    },
    {
      id: 2,
      author: "李晓华",
      time: "1小时前",
      content: "感谢分享！我之前也遇到过类似的困惑。按照老师的建议试了一下，确实有效果。不过我想补充一点，在实际应用中还需要注意一些细节。",
      likes: 8,
      dislikes: 1,
      avatar: "bg-green-500"
    },
    {
      id: 3,
      author: "王大伟",
      time: "45分钟前",
      content: "我有一个疑问，在第三步的时候是不是还需要考虑其他因素？希望能得到进一步的解释。另外，有没有相关的参考资料推荐？",
      likes: 3,
      dislikes: 0,
      avatar: "bg-orange-500"
    },
    {
      id: 4,
      author: "陈老师",
      time: "30分钟前",
      content: "@王大伟 你的问题很好！确实需要考虑边界条件。我推荐看一下《高等数学教程》第七章，里面有详细的说明。另外，课堂上我们下次会专门讲解这个知识点。",
      likes: 12,
      dislikes: 0,
      avatar: "bg-purple-500",
      isTeacher: true
    },
    {
      id: 5,
      author: "赵小芳",
      time: "15分钟前",
      content: "刚刚按照大家的建议试了一遍，终于理解了！非常感谢各位的帮助。看来多交流讨论真的很有用，希望以后能继续参与这样的讨论。",
      likes: 6,
      dislikes: 0,
      avatar: "bg-pink-500"
    }
  ];

  const handleReply = () => {
    if (replyContent.trim()) {
      showToast.success("回复发表成功");
      setReplyContent("");
      setShowReplyInput(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-white text-lg">{topicTitle}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 overflow-y-auto">
          {/* 原帖内容 */}
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <p className="text-slate-300 leading-relaxed">{topicContent}</p>
          </div>

          {/* 评论列表 */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">评论 ({comments.length})</h3>
            
            {comments.map((comment) => (
              <div key={comment.id} className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 ${comment.avatar} rounded-full flex items-center justify-center text-white font-medium flex-shrink-0`}>
                    {comment.author.charAt(0)}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">{comment.author}</span>
                      {comment.isTeacher && (
                        <Badge className="bg-green-600 text-white text-xs">教师</Badge>
                      )}
                      <span className="text-slate-400 text-sm">{comment.time}</span>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed">{comment.content}</p>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300 p-0 h-auto">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          {comment.likes}
                        </Button>
                        {comment.dislikes > 0 && (
                          <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 p-0 h-auto">
                            <ThumbsDown className="h-3 w-3 mr-1" />
                            {comment.dislikes}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 回复输入框 */}
          <div className="space-y-4">
            {!showReplyInput ? (
              <Button 
                onClick={() => setShowReplyInput(true)}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                参与讨论
              </Button>
            ) : (
              <div className="space-y-3">
                <Textarea
                  placeholder="写下你的看法..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 min-h-[100px]"
                />
                <div className="flex justify-end space-x-2">
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      setShowReplyInput(false);
                      setReplyContent("");
                    }}
                    className="text-slate-400 hover:text-white"
                  >
                    取消
                  </Button>
                  <Button 
                    onClick={handleReply}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    发表回复
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentsModal;