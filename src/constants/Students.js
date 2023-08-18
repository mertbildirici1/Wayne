import React from "react";
import "../constants/Members.css";

function Student({ student }) {
  const { firstName, lastName, class: studentClass, major, image } = student;

  return (
    <div className="student-card">
      <img
        src={image}
        alt={`${firstName} ${lastName}`}
        style={{
          maxWidth: "100px",
          height: "auto",
        }}
      />
      <p>{`${firstName} ${lastName}`}</p>
      <p>Class: {studentClass}</p>
      <p>Major: {major}</p>
    </div>
  );
}

export default Student;
