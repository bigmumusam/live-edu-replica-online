import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";

interface Course {
  id: number;
  title: string;
  instructor: string;
  students: string;
  rating: number;
  price: string;
  status: string;
  color: string;
}

interface HotRecommendationsProps {
  courses: Course[];
  onCourseClick: (courseId: number) => void;
}

const HotRecommendations = ({ courses, onCourseClick }: HotRecommendationsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
            🔥
          </div>
          热门推荐
          <span className="text-sm font-normal text-gray-400 ml-2">本周最受欢迎</span>
        </h3>
        <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
          查看全部 →
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.slice(0, 4).map((course) => (
          <div key={course.id} className="relative group">
            <div className="relative">
              <CourseCard 
                course={course}
                onClick={onCourseClick}
              />
              {/* 热门标签 - 左上角，不遮挡内容 */}
              <div className="absolute -top-2 -left-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg z-10">
                🔥 热门
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotRecommendations;