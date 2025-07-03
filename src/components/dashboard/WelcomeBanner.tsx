import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, Award, Target, Users, CheckCircle, Gift } from "lucide-react";

interface WelcomeBannerProps {
  onBecomeTutor?: () => void;
  onInfoCollection?: () => void;
}

const WelcomeBanner = ({ onBecomeTutor, onInfoCollection }: WelcomeBannerProps) => {
  return (
    <Card className="bg-gradient-to-r from-green-600 to-blue-600 border-0 text-white">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* 欢迎信息第一行 */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                早上好，小明！ 👋 <span className="text-lg font-normal">今天是学习的好日子，继续保持您的学习节奏</span>
              </h2>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                onClick={onBecomeTutor}
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700 text-white border-0 text-sm"
              >
                <Users className="mr-2 h-4 w-4" />
                成为讲师
              </Button>
              <Button 
                onClick={onInfoCollection}
                size="sm" 
                className="bg-orange-600 hover:bg-orange-700 text-white border-0 text-sm animate-bounce"
              >
                <Gift className="mr-2 h-4 w-4" />
                填写资料得奖励
              </Button>
            </div>
          </div>
          
          {/* 统计卡片区域 */}
          <div className="grid grid-cols-3 gap-4">
            {/* 合并本周目标和学习积分 */}
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="h-4 w-4" />
                    <span className="text-xs font-medium">本周目标</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>学习时长</span>
                      <span>8.5/12h</span>
                    </div>
                    <Progress value={71} className="h-2" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-4 w-4" />
                    <span className="text-xs font-medium">学习积分</span>
                  </div>
                  <div className="text-lg font-bold">2,340</div>
                  <div className="text-xs text-green-200">本周 +120</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="h-4 w-4" />
                <span className="text-xs font-medium">连续打卡</span>
              </div>
              <div className="text-lg font-bold">15天</div>
              <div className="text-xs text-green-200">再坚持5天获得奖励</div>
            </div>
            
            {/* 待办任务 - 宽度x2 */}
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-xs font-medium">今日待办</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span>完成作业：数学练习</span>
                  <Button size="sm" className="h-5 w-16 bg-yellow-600 hover:bg-yellow-700 text-white text-xs border-0">
                    去完成
                  </Button>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>观看视频：Python基础</span>
                  <Button size="sm" className="h-5 w-16 bg-blue-600 hover:bg-blue-700 text-white text-xs border-0">
                    去完成
                  </Button>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>今日打卡签到</span>
                  <Button size="sm" className="h-5 w-16 bg-green-600 hover:bg-green-700 text-white text-xs border-0">
                    去完成
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeBanner;