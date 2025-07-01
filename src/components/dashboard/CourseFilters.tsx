
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CourseFilters = () => {
  return (
    <div className="flex items-center space-x-2">
      <Select defaultValue="all">
        <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">全部难易度</SelectItem>
          <SelectItem value="g1-5">G1-5</SelectItem>
          <SelectItem value="g6-8">G6-8</SelectItem>
          <SelectItem value="g9-12">G9-12</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-subject">
        <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-subject">全部课程类别</SelectItem>
          <SelectItem value="english">英语</SelectItem>
          <SelectItem value="math">数学</SelectItem>
          <SelectItem value="science">科学</SelectItem>
          <SelectItem value="economics">经济</SelectItem>
          <SelectItem value="humanities">人文</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-time">
        <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-time">课程时间段</SelectItem>
          <SelectItem value="morning">7:00-9:00</SelectItem>
          <SelectItem value="afternoon">16:00-19:00</SelectItem>
          <SelectItem value="evening">19:00-22:00</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-language">
        <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-language">授课语言</SelectItem>
          <SelectItem value="english">英语</SelectItem>
          <SelectItem value="chinese">中文</SelectItem>
          <SelectItem value="french">法语</SelectItem>
          <SelectItem value="german">德语</SelectItem>
          <SelectItem value="spanish">西班牙语</SelectItem>
          <SelectItem value="italian">意大利语</SelectItem>
          <SelectItem value="japanese">日语</SelectItem>
          <SelectItem value="korean">韩语</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex items-center space-x-2 ml-4">
        <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 p-2">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 p-2">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CourseFilters;
