
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BecomeTutorModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const BecomeTutorModal = ({ isOpen, onOpenChange }: BecomeTutorModalProps) => {
  const tasks = [
    { id: 1, name: "上线满15分钟", experience: "+5", status: "completed", note: "（一天一次，不叠加）" },
    { id: 2, name: "完整上完一节课", experience: "+15", status: "completed", note: "（每个课程都可一次）" },
    { id: 3, name: "完整参加一次讨论", experience: "+20", status: "pending", note: "（次数不限）" },
    { id: 4, name: "完整参加一次1V1老师辅导", experience: "+15", status: "pending", note: "（一周仅限一次）" }
  ];

  const taskRecords = [
    { task: "上线满15分钟", instructor: "代数课程", name: "Luke", duration: "30mins", experience: "+5", date: "06/29 19:10:36", status: "completed" },
    { task: "上线满15分钟", instructor: "代数课程", name: "Luke", duration: "30mins", experience: "+5", date: "06/28 18:20:19", status: "completed" },
    { task: "完整上完一节课", instructor: "代数课程", name: "Luke", duration: "30mins", experience: "+15", date: "06/28 18:20:19", status: "completed" },
    { task: "完整参加一次讨论", instructor: "代数课程", name: "Luke", duration: "30mins", experience: "+20", date: "06/28 18:20:19", status: "completed" },
    { task: "完整参加一次讨论", instructor: "代数课程", name: "Luke", duration: "30mins", experience: "+20", date: "06/28 18:20:19", status: "completed" },
    { task: "完整上完一节课", instructor: "代数课程", name: "Luke", duration: "30mins", experience: "+15", date: "06/27 18:20:19", status: "completed" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-6xl">
        <DialogHeader>
          <DialogTitle className="text-green-400 text-center text-xl">当前经验值 80/300</DialogTitle>
        </DialogHeader>
        
        <div className="flex gap-8">
          {/* Left side - Tasks */}
          <div className="flex-1 space-y-4">
            <p className="text-center text-slate-300 text-sm">
              加油！积满300经验值就可以申请成为小老师啦
            </p>
            
            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="bg-slate-700/50 p-4 rounded flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-white font-medium">任务{task.id}</span>
                      <span className="text-white">{task.name}</span>
                    </div>
                    <div className="text-green-400 text-sm">
                      经验值 {task.experience} {task.note}
                    </div>
                  </div>
                  <div className="ml-4">
                    {task.status === 'completed' ? (
                      <div className="text-green-400 text-2xl">✓</div>
                    ) : (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-sm px-4">
                        去完成
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Task Records */}
          <div className="flex-1">
            <h3 className="text-white font-medium mb-4">任务记录</h3>
            <div className="space-y-1 max-h-80 overflow-y-auto">
              <div className="grid grid-cols-6 gap-2 text-slate-400 text-xs font-medium pb-2 border-b border-slate-600">
                <span>任务名称</span>
                <span>主题名称</span>
                <span>授课老师</span>
                <span>上课时长</span>
                <span>经验值</span>
                <span>日期</span>
              </div>
              {taskRecords.map((record, index) => (
                <div key={index} className="grid grid-cols-6 gap-2 text-xs py-2 border-b border-slate-700/50 hover:bg-slate-700/20">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white">{record.task}</span>
                  </div>
                  <span className="text-slate-300">{record.instructor}</span>
                  <span className="text-slate-300">{record.name}</span>
                  <span className="text-slate-300">{record.duration}</span>
                  <span className="text-green-400">{record.experience}</span>
                  <span className="text-slate-400">{record.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BecomeTutorModal;
