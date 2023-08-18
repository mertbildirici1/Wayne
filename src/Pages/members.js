// Members.js
import React from "react";
import Student from "../constants/Students";
import studentsData from "../constants/data/studentsData.json"
import "../constants/Members.css"

export function Members() {
    const sortedStudents = [...studentsData].sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );
  return (
    <div>
      <h2 style={{textAlign: "center"}}>MEMBERS OF WAYNE MANOR</h2> 
      <div className="students-container">
        {sortedStudents.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default Members;
