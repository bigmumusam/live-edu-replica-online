
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const TodoCard = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const handleGoToAssignment = () => {
    navigate("/course/1");
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 flex-1">
      <CardContent className="p-4 space-y-3 h-full">
        <h4 className="text-white font-medium">{t('welcome.todayTasks')}</h4>
        <div className="space-y-2">
          <div className="bg-slate-700/50 p-3 rounded">
            <div className="flex justify-between items-center mb-1">
              <span className="text-white text-sm">
                {language === 'zh' ? '作业课程：代数2学习实验室' : 'Assignment: Algebra 2 Learning Lab'}
              </span>
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 text-xs px-2 py-1"
                onClick={handleGoToAssignment}
              >
                {t('welcome.complete')}
              </Button>
            </div>
            <p className="text-slate-400 text-xs">
              {language === 'zh' ? '第一部分学业提升工作推荐' : 'Part 1 Academic Enhancement Recommendations'}
            </p>
          </div>
          
          <div className="bg-slate-700/50 p-3 rounded">
            <h5 className="text-white text-sm mb-1">
              {language === 'zh' ? '今日课程：微积分微分学习实验室' : 'Today\'s Class: Calculus Differentiation Lab'}
            </h5>
            <p className="text-slate-400 text-xs">
              {language === 'zh' ? '精华分析的内容，基本涉及主要' : 'Essential analysis content covering main topics'}
            </p>
            <p className="text-green-400 text-xs">
              {language === 'zh' ? '距离上课还有4小时' : '4 hours until class starts'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
