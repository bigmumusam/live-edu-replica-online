import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, BookOpen, MessageSquare, Users, Calendar, Award, MapPin, Mail, Phone } from "lucide-react";

interface UserInfoModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  user: {
    name: string;
    grade: string;
    avatar: string;
    topics: string;
    followers: string;
  };
}

const UserInfoModal = ({ isOpen, onOpenChange, user }: UserInfoModalProps) => {
  const userDetailInfo = {
    fullName: user.name,
    grade: user.grade,
    school: "清华大学附属中学",
    major: "理科实验班",
    joinDate: "2023年9月",
    location: "北京市海淀区",
    email: "student@example.com",
    phone: "138****8888",
    bio: "热爱数学和物理，喜欢思考和探索。希望通过学习交流不断提升自己，也愿意帮助其他同学解决学习中的问题。",
    achievements: [
      { name: "学习达人", description: "连续学习30天", icon: "🏆" },
      { name: "讨论积极分子", description: "参与讨论超过100次", icon: "💬" },
      { name: "优秀学员", description: "课程成绩优异", icon: "⭐" },
      { name: "乐于助人", description: "帮助他人解决问题", icon: "🤝" }
    ],
    stats: {
      totalPoints: 1280,
      coursesCompleted: 12,
      discussionsParticipated: 156,
      helpfulAnswers: 89,
      studyDays: 145
    },
    subjects: ["数学", "物理", "化学", "生物", "计算机"],
    recentActivity: [
      { type: "课程完成", content: "完成《代数2学习实验室》第五章", time: "2小时前" },
      { type: "参与讨论", content: "在生物学话题中发表了观点", time: "4小时前" },
      { type: "获得成就", content: "获得\"学习达人\"徽章", time: "1天前" }
    ]
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] bg-slate-900 border-slate-700 overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">个人信息</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* 基本信息 */}
          <div className="flex items-start space-x-6">
            <div className={`w-20 h-20 ${user.avatar} rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}>
              {user.name.charAt(0)}
            </div>
            
            <div className="flex-1 space-y-3">
              <div>
                <h2 className="text-2xl font-bold text-white">{userDetailInfo.fullName}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="secondary">{userDetailInfo.grade}</Badge>
                  <Badge variant="outline" className="border-green-500 text-green-400">
                    {userDetailInfo.major}
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-slate-300">
                  <MapPin className="h-4 w-4" />
                  <span>{userDetailInfo.school}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Calendar className="h-4 w-4" />
                  <span>加入时间: {userDetailInfo.joinDate}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Mail className="h-4 w-4" />
                  <span>{userDetailInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Phone className="h-4 w-4" />
                  <span>{userDetailInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 个人简介 */}
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h3 className="text-white font-medium mb-2">个人简介</h3>
            <p className="text-slate-300 leading-relaxed">{userDetailInfo.bio}</p>
          </div>

          {/* 学习统计 */}
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400">{userDetailInfo.stats.totalPoints}</div>
              <div className="text-slate-400 text-sm">总积分</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">{userDetailInfo.stats.coursesCompleted}</div>
              <div className="text-slate-400 text-sm">完成课程</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">{userDetailInfo.stats.discussionsParticipated}</div>
              <div className="text-slate-400 text-sm">参与讨论</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-400">{userDetailInfo.stats.helpfulAnswers}</div>
              <div className="text-slate-400 text-sm">有用回答</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-pink-400">{userDetailInfo.stats.studyDays}</div>
              <div className="text-slate-400 text-sm">学习天数</div>
            </div>
          </div>

          {/* 擅长科目 */}
          <div>
            <h3 className="text-white font-medium mb-3">擅长科目</h3>
            <div className="flex flex-wrap gap-2">
              {userDetailInfo.subjects.map((subject) => (
                <Badge key={subject} variant="outline" className="border-slate-600 text-slate-300">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>

          {/* 成就徽章 */}
          <div>
            <h3 className="text-white font-medium mb-3">成就徽章</h3>
            <div className="grid grid-cols-2 gap-3">
              {userDetailInfo.achievements.map((achievement, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-3 flex items-center space-x-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <div className="text-white font-medium">{achievement.name}</div>
                    <div className="text-slate-400 text-sm">{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 最近活动 */}
          <div>
            <h3 className="text-white font-medium mb-3">最近活动</h3>
            <div className="space-y-2">
              {userDetailInfo.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-800/30 rounded-lg p-3">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="text-xs">{activity.type}</Badge>
                    <span className="text-slate-300">{activity.content}</span>
                  </div>
                  <span className="text-slate-500 text-sm">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserInfoModal;