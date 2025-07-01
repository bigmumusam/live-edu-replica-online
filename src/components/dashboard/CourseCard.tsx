
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, UserPlus, UserMinus } from "lucide-react";
import { useState } from "react";

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
  const [isFavorited, setIsFavorited] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  const handleFollow = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFollowing(!isFollowing);
  };

  return (
    <Card 
      className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-colors cursor-pointer h-full flex flex-col relative group"
      onClick={() => onClick(course.id)}
    >
      <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 bg-slate-800/80 hover:bg-slate-700"
          onClick={handleFavorite}
        >
          <Star className={`h-4 w-4 ${isFavorited ? 'text-yellow-400 fill-current' : 'text-slate-400'}`} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 bg-slate-800/80 hover:bg-slate-700"
          onClick={handleFollow}
        >
          {isFollowing ? (
            <UserMinus className="h-4 w-4 text-red-400" />
          ) : (
            <UserPlus className="h-4 w-4 text-green-400" />
          )}
        </Button>
      </div>
      
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
          探索代数 2 学习实验室概念难懂？依靠同伴辅导来提升学习进度。
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
              <span className="text-slate-400 text-xs ml-1">难度系数</span>
            </div>
            <span className="text-green-400 font-bold text-sm">{course.price}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
