import CourseCard from "./CourseCard";
import CourseFilters from "./CourseFilters";

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

interface MyCoursesProps {
  courses: Course[];
  onCourseClick: (courseId: number) => void;
}

const MyCourses = ({ courses, onCourseClick }: MyCoursesProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">我的课程</h3>
        <CourseFilters />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="h-48">
            <CourseCard 
              course={course}
              onClick={onCourseClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;