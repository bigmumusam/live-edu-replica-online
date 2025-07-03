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

interface LimitedTimeOffersProps {
  courses: Course[];
  onCourseClick: (courseId: number) => void;
}

const LimitedTimeOffers = ({ courses, onCourseClick }: LimitedTimeOffersProps) => {
  return (
    <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 rounded-2xl p-6 border border-red-500/20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center animate-pulse">
              ⚡
            </div>
            限时优惠专区
          </h3>
          <p className="text-gray-300">错过今天，再等一年</p>
        </div>
        <div className="text-right">
          <div className="text-red-400 text-sm font-semibold">距离结束还有</div>
          <div className="text-2xl font-mono text-white bg-red-500/20 px-4 py-2 rounded-lg">
            23:45:12
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.slice(0, 2).map((course) => (
          <div key={course.id} className="relative group">
            <div className="relative">
              <CourseCard 
                course={course}
                onClick={onCourseClick}
              />
              {/* 优惠标签组 - 避免遮挡 */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm px-3 py-1 rounded-full font-bold shadow-lg z-10">
                7折
              </div>
              <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse font-semibold z-10">
                限时
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LimitedTimeOffers;