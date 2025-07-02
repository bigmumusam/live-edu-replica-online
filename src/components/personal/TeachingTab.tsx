
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TeachingTab = () => {
  const stats = {
    totalClasses: 215,
    totalHours: 16,
    totalStudents: 302
  };

  const teachingHistory = [
    {
      id: 1,
      course: "代数2学习实验室",
      task: "第二部分第5章",
      date: "2025.1.3 30-14:00",
      points: "+0.5",
      status: "上课",
      color: "bg-red-500"
    },
    {
      id: 2,
      course: "SAT写作提升",
      task: "如何写出高分作文",
      date: "2025.1.3 30-14:30",
      points: "+1",
      status: "答题",
      color: "bg-yellow-500"
    },
    {
      id: 3,
      course: "代数2学习实验室",
      task: "第二部分第3章",
      date: "2025.1.3 30-14:00",
      points: "+1",
      status: "上课",
      color: "bg-red-500"
    },
    {
      id: 4,
      course: "代数2学习实验室",
      task: "第二部分第2章",
      date: "2025.1.3 30-14:00",
      points: "+1",
      status: "上课",
      color: "bg-red-500"
    },
    {
      id: 5,
      course: "代数2学习实验室",
      task: "第一部分第4章",
      date: "2025.1.3 30-14:00",
      points: "+1",
      status: "上课",
      color: "bg-red-500"
    },
    {
      id: 6,
      course: "代数2学习实验室",
      task: "第一部分第3章",
      date: "2025.1.3 30-14:00",
      points: "+1",
      status: "上课",
      color: "bg-red-500"
    },
    {
      id: 7,
      course: "代数2学习实验室",
      task: "第一部分第2章",
      date: "2025.1.3 30-14:00",
      points: "+1",
      status: "上课",
      color: "bg-red-500"
    },
    {
      id: 8,
      course: "代数2学习实验室",
      task: "第一部分第1章",
      date: "2025.1.3 30-14:00",
      points: "+1",
      status: "上课",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Header */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-400">{stats.totalClasses}</div>
          <div className="text-slate-400 text-sm">上课打卡数</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-400">{stats.totalHours}</div>
          <div className="text-slate-400 text-sm">教授课时</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-400">{stats.totalStudents}</div>
          <div className="text-slate-400 text-sm">打卡天数统计</div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-slate-400">选择：</span>
          <Select defaultValue="all">
            <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {teachingHistory.map((item) => (
          <Card key={item.id} className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-1">
                    <span className="text-white font-medium text-sm">{item.course}</span>
                    <span className="text-slate-300 text-sm">{item.task}</span>
                    <span className="text-slate-300 text-sm">{item.date}</span>
                    <span className="text-green-400 text-sm font-medium">{item.points}</span>
                    <Badge className="bg-green-600 text-white text-xs">
                      {item.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeachingTab;
