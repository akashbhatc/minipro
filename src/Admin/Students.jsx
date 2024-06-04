import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from './admincomponents/Navbar';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await axios.get('/admin/student');
        console.log(response.data);
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    }

    fetchStudents();
  }, []);

  console.log(students);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="p-4 sm:ml-64">
        <div className="grid grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold">Students</h1>
          <ul>
            {students.map(student => (
              <li key={student._id}>
                {student.name} - {student.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Students;
