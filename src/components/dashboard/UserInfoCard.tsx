
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface UserInfoCardProps {
  onBecomeTutor: () => void;
}

const UserInfoCard = ({ onBecomeTutor }: UserInfoCardProps) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">陈</span>
          </div>
          <div>
            <h4 className="text-white font-semibold">陈俊杰 👋</h4>
            <p className="text-slate-400 text-sm">Fake it until you make it, fighting~</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">我做的课程分析</span>
            <span className="text-slate-400 text-sm">我做的个数据</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">固定了几个数据</span>
            <span className="text-slate-400 text-sm">完成不个数字</span>
          </div>
          
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 mt-4"
            onClick={onBecomeTutor}
          >
            成为一名讲师
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
