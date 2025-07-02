
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PointsTab = () => {
  const pointsData = [
    { total: 700, label: "全部积分" },
    { total: 215, label: "上课打卡器" },
    { total: 16, label: "教授课时" },
    { total: 302, label: "打卡天数统计" }
  ];

  const pointsHistory = [
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
      course: "任务名称一",
      task: "任务描述",
      date: "2025.1.3 30-14:00",
      points: "+1",
      status: "做任务",
      color: "bg-orange-500"
    },
    {
      id: 4,
      course: "代数2学习实验室",
      task: "第二部分第2章",
      date: "2025.1.3 30-14:00",
      points: "+1",
      status: "回答问题",
      color: "bg-red-500"
    },
    {
      id: 5,
      course: "代数2学习实验室",
      task: "第二部分第1章",
      date: "2025.1.3 30-14:00",
      points: "+1",
      status: "系统作业",
      color: "bg-red-500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "上课": return "bg-blue-500";
      case "答题": return "bg-green-500";
      case "做任务": return "bg-orange-500";
      case "回答问题": return "bg-red-500";
      case "系统作业": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">全部积分 <span className="text-green-400">700</span></h2>
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
        {pointsHistory.map((item) => (
          <Card key={item.id} className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-bold`}>
                    {item.course.charAt(0)}
                  </div>
                  <div className="flex items-center space-x-4">
                    <h3 className="text-white font-medium">{item.course}</h3>
                    <p className="text-slate-400 text-sm">{item.task}</p>
                    <p className="text-slate-400 text-sm">{item.date}</p>
                    <span className="text-green-400 font-bold">{item.points}</span>
                    <Badge className={`${getStatusColor(item.status)} text-white text-xs`}>
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

export default PointsTab;
