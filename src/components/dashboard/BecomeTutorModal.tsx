
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BecomeTutorModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const BecomeTutorModal = ({ isOpen, onOpenChange }: BecomeTutorModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white text-center">当前经验值 80/300</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-center text-slate-300 text-sm">
            加油！积满300经验值就可以申请成为小老师啦
          </p>
          
          <div className="space-y-3">
            <div className="bg-slate-700/50 p-3 rounded flex items-center justify-between">
              <div>
                <div className="text-white text-sm">任务一 上线满15分钟</div>
                <div className="text-green-400 text-xs">经验值 +5 （一天一次，不叠加）</div>
              </div>
              <div className="text-green-400 text-xl">✓</div>
            </div>
            
            <div className="bg-slate-700/50 p-3 rounded flex items-center justify-between">
              <div>
                <div className="text-white text-sm">任务二 完整上完一节课</div>
                <div className="text-green-400 text-xs">经验值 +15 （每个课程都可一次）</div>
              </div>
              <div className="text-green-400 text-xl">✓</div>
            </div>
            
            <div className="bg-slate-700/50 p-3 rounded flex items-center justify-between">
              <div>
                <div className="text-white text-sm">任务三 完整参加一次讨论</div>
                <div className="text-green-400 text-xs">经验值 +20 （次数不限）</div>
              </div>
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">
                去完成
              </Button>
            </div>
            
            <div className="bg-slate-700/50 p-3 rounded flex items-center justify-between">
              <div>
                <div className="text-white text-sm">任务四 完整参加一次1V1老师辅导</div>
                <div className="text-green-400 text-xs">经验值 +15 （一周仅限一次）</div>
              </div>
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">
                去完成
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BecomeTutorModal;
