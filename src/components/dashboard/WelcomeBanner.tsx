import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, Award, Target, Users, CheckCircle, Gift } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface WelcomeBannerProps {
  onBecomeTutor?: () => void;
  onInfoCollection?: () => void;
}

const WelcomeBanner = ({ onBecomeTutor, onInfoCollection }: WelcomeBannerProps) => {
  const { t } = useLanguage();
  return (
    <Card className="bg-gradient-to-r from-green-600 to-blue-600 border-0 text-white">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* 欢迎信息第一行 */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {t('welcome.greeting')} 👋 <span className="text-lg font-normal">{t('welcome.subtitle')}</span>
              </h2>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                onClick={onBecomeTutor}
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700 text-white border-0 text-sm"
              >
                <Users className="mr-2 h-4 w-4" />
                {t('welcome.becomeTutor')}
              </Button>
              <Button 
                onClick={onInfoCollection}
                size="sm" 
                className="bg-orange-600 hover:bg-orange-700 text-white border-0 text-sm animate-bounce"
              >
                <Gift className="mr-2 h-4 w-4" />
                {t('welcome.fillInfo')}
              </Button>
            </div>
          </div>
          
          {/* 统计卡片区域 */}
          <div className="grid grid-cols-3 gap-4">
            {/* 合并本周目标和学习积分 */}
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="space-y-3">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="h-4 w-4" />
                    <span className="text-sm font-medium">{t('welcome.weeklyGoal')}</span>
                  </div>
                  <div className="w-full">
                    <Progress value={71} className="h-2 w-full" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-medium">{t('welcome.studyPoints')}</span>
                    <span className="text-lg font-bold">2,340</span>
                    <span className="text-xs text-green-200">{t('welcome.weeklyIncrease')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="h-4 w-4" />
                <span className="text-xs font-medium">{t('welcome.checkinDays')}</span>
              </div>
              <div className="text-lg font-bold">15{t('welcome.days')}</div>
              <div className="text-xs text-green-200">{t('welcome.checkinReward')}</div>
            </div>
            
            {/* 待办任务 - 宽度x2 */}
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-xs font-medium">{t('welcome.todayTasks')}</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span>{t('welcome.task.homework')}</span>
                  <Button size="sm" className="h-5 w-16 bg-yellow-600 hover:bg-yellow-700 text-white text-xs border-0">
                    {t('welcome.complete')}
                  </Button>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>{t('welcome.task.video')}</span>
                  <Button size="sm" className="h-5 w-16 bg-blue-600 hover:bg-blue-700 text-white text-xs border-0">
                    {t('welcome.complete')}
                  </Button>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>{t('welcome.task.checkin')}</span>
                  <Button size="sm" className="h-5 w-16 bg-green-600 hover:bg-green-700 text-white text-xs border-0">
                    {t('welcome.complete')}
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