import React from "react";
import "../constants/Members.css";

function Student({ student }) {
  const { firstName, lastName, class: studentClass, major, image, hometown } = student;

  return (
    <div className="student-card">
      <img
        src={image}
        alt={`${firstName} ${lastName}`}
        style={{
            width: "130px",
            height: "200px",
            objectFit: "cover"
        }}
      />
      <p>{`${firstName} ${lastName}`}</p>
      <p>Class: {studentClass}</p>
      <p>Major: {major}</p>
      <p>Hometown: {hometown}</p>
    </div>
  );
}

export default Student;
