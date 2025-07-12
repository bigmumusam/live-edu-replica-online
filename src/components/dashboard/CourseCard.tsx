
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import CourseCardActions from "../shared/CourseCardActions";
import { useLanguage } from '@/contexts/LanguageContext';

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

interface CourseCardProps {
  course: Course;
  onClick: (courseId: number) => void;
}

const CourseCard = ({ course, onClick }: CourseCardProps) => {
  const { t, language } = useLanguage();

  // 国际化课程描述示例
  let description = '';
  if (course.title === '代数2学习实验室' || course.title === 'Algebra 2 Learning Lab') {
    description = t('course.algebra2Description');
  } else if (course.title === '计算机工程' || course.title === 'Computer Engineering') {
    description = t('course.computerDescription');
  } else if (course.title === '生物学' || course.title === 'Biology') {
    description = t('course.biologyDescription');
  } else if (course.title === '数据统计' || course.title === 'Data Statistics') {
    description = t('course.statisticsDescription');
  } else {
    description = t('course.description');
  }

  return (
    <Card 
      className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-colors cursor-pointer h-full flex flex-col relative group"
      onClick={() => onClick(course.id)}
    >
      <CourseCardActions 
        courseId={course.id} 
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
      />
      
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex items-center space-x-2 mb-3">
          <div className={`w-8 h-8 ${course.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
            A
          </div>
          <Badge variant={course.status === "即将开始" ? "secondary" : course.status === "进行中" ? "default" : "outline"} className="text-xs">
            {course.status}
          </Badge>
        </div>
        
        <h4 className="text-white font-medium mb-3 text-sm leading-relaxed">{course.title}</h4>
        
        <p className="text-slate-400 text-xs mb-4 line-clamp-3 flex-1">
          {description}
        </p>
        
        <div className="space-y-3 mt-auto">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span className="text-slate-400 text-xs">{course.instructor}</span>
          </div>
          <div className="text-slate-400 text-xs">{course.students}</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3 w-3 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
              ))}
              <span className="text-slate-400 text-xs ml-1">{t('courseCard.difficultyLevel')}</span>
            </div>
            <span className="text-green-400 font-bold text-sm">{course.price}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
