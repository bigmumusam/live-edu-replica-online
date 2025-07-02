
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle } from "lucide-react";
import { useState } from "react";

interface BecomeTutorModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const BecomeTutorModal = ({ isOpen, onOpenChange }: BecomeTutorModalProps) => {
  const currentExp = 80;
  const maxExp = 300;
  const expProgress = (currentExp / maxExp) * 100;

  const tasks = [
    { id: 1, name: "任务一", detail: "上线满15分钟", exp: 5, completed: true, note: "一天一次，不叠加" },
    { id: 2, name: "任务二", detail: "完整上完一节课", exp: 15, completed: true, note: "每个俱乐部限一周一次" },
    { id: 3, name: "任务三", detail: "完整参加一次讲座", exp: 20, completed: false, note: "次数不限" },
    { id: 4, name: "任务四", detail: "完整参加一次VIP专属讲座", exp: 15, completed: false, note: "一周仅限一次" }
  ];

  const taskHistory = [
    { taskName: "上线满15分钟", courseName: "代数课程", instructor: "Luke", duration: "30mins", exp: "+5", date: "06/29 19:10:36" },
    { taskName: "上线满15分钟", courseName: "代数课程", instructor: "Luke", duration: "30mins", exp: "+5", date: "06/28 18:20:19" },
    { taskName: "完整上完一节课", courseName: "代数课程", instructor: "Luke", duration: "30mins", exp: "+15", date: "06/28 18:20:19" },
    { taskName: "完整参加一次讲座", courseName: "代数课程", instructor: "Luke", duration: "30mins", exp: "+20", date: "06/28 18:20:19" },
    { taskName: "完整参加一次讲座", courseName: "代数课程", instructor: "Luke", duration: "30mins", exp: "+20", date: "06/28 18:20:19" },
    { taskName: "完整上完一节课", courseName: "代数课程", instructor: "Luke", duration: "30mins", exp: "+15", date: "06/27 18:20:19" }
  ];

  const handleTaskAction = (taskId: number) => {
    console.log("Complete task:", taskId);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-slate-800 border-slate-700 text-white">
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 左侧：经验值和任务 */}
            <div className="space-y-6">
              {/* 经验值显示 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">当前经验值</span>
                  <span className="text-green-400 font-bold">{currentExp}/300</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300"
                    style={{ width: `${expProgress}%` }}
                  ></div>
                </div>
                <p className="text-slate-400 text-sm mt-2">
                  加满：积满300经验值可以申请成为小老师哦
                </p>
              </div>

              {/* 任务列表 */}
              <div className="space-y-3">
                {tasks.map((task) => (
                  <Card key={task.id} className="bg-slate-700/50 border-slate-600">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-white font-medium">{task.name}</span>
                            <span className="text-slate-300">{task.detail}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-green-400 font-bold">经验值 +{task.exp}</span>
                            <span className="text-slate-400 text-sm">（{task.note}）</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {task.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <Button 
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-white"
                              onClick={() => handleTaskAction(task.id)}
                            >
                              去完成
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 右侧：任务记录 */}
            <div className="flex flex-col min-h-[500px]">
              <h3 className="text-white font-bold text-lg mb-4">任务记录</h3>
              <div className="bg-slate-700/30 rounded-lg overflow-hidden">
                {/* 表头 */}
                <div className="grid grid-cols-6 gap-2 p-3 bg-slate-700/50 text-slate-300 text-sm border-b border-slate-600">
                  <div>任务名称</div>
                  <div>主题名称</div>
                  <div>授课老师</div>
                  <div>上课时长</div>
                  <div>经验值</div>
                  <div>日期</div>
                </div>
                
                {/* 记录列表 */}
                <div className="flex-1 overflow-y-auto">
                  {taskHistory.map((record, index) => (
                    <div key={index} className="grid grid-cols-6 gap-2 p-3 text-sm border-b border-slate-700/50 hover:bg-slate-700/20">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-white">{record.taskName}</span>
                      </div>
                      <div className="text-slate-300">{record.courseName}</div>
                      <div className="text-slate-300">{record.instructor}</div>
                      <div className="text-slate-300">{record.duration}</div>
                      <div className="text-green-400 font-medium">{record.exp}</div>
                      <div className="text-slate-400">{record.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BecomeTutorModal;
