import React from "react";
interface CourseProps {
    className: string;
  }

const Course: React.FC<CourseProps> = ({ className }) => {
  return (
    <div className={`course ${className}
    items-start `} >
      <div className="interactive-features">Interactive Features</div>
      <p className="lorem-ipsum-is">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      </p>
    </div>
  );
};

export default Course;
