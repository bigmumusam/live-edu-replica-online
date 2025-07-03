import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, Award, Target, Users, CheckCircle } from "lucide-react";

interface WelcomeBannerProps {
  onBecomeTutor?: () => void;
}

const WelcomeBanner = ({ onBecomeTutor }: WelcomeBannerProps) => {
  return (
    <Card className="bg-gradient-to-r from-green-600 to-blue-600 border-0 text-white">
      <CardContent className="p-6">
        <div className="grid lg:grid-cols-4 gap-6 items-center">
          {/* 欢迎信息 */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                早上好，小明！ 👋
              </h2>
              <p className="text-green-100 mb-4">
                今天是学习的好日子，继续保持您的学习节奏
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-5 w-5" />
                  <span className="text-sm font-medium">本周目标</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>学习时长</span>
                    <span>8.5/12h</span>
                  </div>
                  <Progress value={71} className="h-2" />
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="h-5 w-5" />
                  <span className="text-sm font-medium">学习积分</span>
                </div>
                <div className="text-xl font-bold">2,340</div>
                <div className="text-xs text-green-200">本周 +120</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">连续打卡</span>
                </div>
                <div className="text-xl font-bold">15天</div>
                <div className="text-xs text-green-200">再坚持5天获得奖励</div>
              </div>
            </div>
          </div>
          
          {/* 成为讲师区域 */}
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-3">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">成为讲师</span>
            </div>
            <p className="text-xs text-green-200 mb-3">分享您的知识，获得额外收益</p>
            <Button 
              onClick={onBecomeTutor}
              size="sm" 
              className="w-full bg-white/20 hover:bg-white/30 border-white/30 text-xs"
            >
              立即申请
            </Button>
          </div>
          
          {/* 待办任务 */}
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-3">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">今日待办</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span>完成作业：数学练习</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>观看视频：Python基础</span>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>今日打卡签到</span>
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeBanner;