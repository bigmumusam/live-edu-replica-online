import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { showToast } from "../shared/Toast";

interface CreateTopicModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateTopicModal = ({ isOpen, onOpenChange }: CreateTopicModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast.success("话题发布成功！");
    onOpenChange(false);
    setFormData({
      title: "",
      content: "",
      category: "",
      tags: ""
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-slate-800 border-slate-700 text-white">
        <DialogTitle className="text-xl font-bold">发起话题讨论</DialogTitle>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-white">话题标题</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="请输入话题标题..."
              required
            />
          </div>
          
          <div>
            <Label htmlFor="category" className="text-white">选择分类</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="选择话题分类" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="algebra">代数</SelectItem>
                <SelectItem value="geometry">几何学</SelectItem>
                <SelectItem value="sat">SAT</SelectItem>
                <SelectItem value="biology">生物学</SelectItem>
                <SelectItem value="physics">物理学</SelectItem>
                <SelectItem value="statistics">统计数据</SelectItem>
                <SelectItem value="calculus">微积分实验室</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="content" className="text-white">话题内容</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="请详细描述您的问题或想要讨论的内容..."
              rows={6}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="tags" className="text-white">标签 (可选)</Label>
            <Input
              id="tags"
              value={formData.tags}
              onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="用逗号分隔多个标签，如：代数,数学,学习"
            />
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <Button 
              type="button"
              variant="outline" 
              className="border-slate-600 text-slate-300"
              onClick={() => onOpenChange(false)}
            >
              取消
            </Button>
            <Button 
              type="submit"
              className="bg-green-600 hover:bg-green-700"
            >
              发布话题
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTopicModal;