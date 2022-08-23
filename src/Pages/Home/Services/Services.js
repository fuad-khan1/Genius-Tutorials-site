import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-primary mt-5 mb-3 ">Popular Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <Service key={course.id} course={course}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
