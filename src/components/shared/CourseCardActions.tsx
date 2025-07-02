import { Button } from "@/components/ui/button";
import { Star, UserPlus, UserMinus } from "lucide-react";
import { useState } from "react";
import { showToast } from "./Toast";

interface CourseCardActionsProps {
  courseId: number;
  className?: string;
}

const CourseCardActions = ({ courseId, className = "" }: CourseCardActionsProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    showToast.success(isFavorited ? "取消收藏成功" : "收藏成功");
  };

  const handleFollow = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFollowing(!isFollowing);
    showToast.success(isFollowing ? "取消关注成功" : "关注成功");
  };

  return (
    <div className={`flex space-x-1 ${className}`}>
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
  );
};

export default CourseCardActions;