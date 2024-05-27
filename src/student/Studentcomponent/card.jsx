import React from 'react';

const Card = () => {
  return (
    <div className="p-2 bg-white rounded-lg shadow dark:bg-gray-800 w-48">
      <img 
        src="https://www.svgrepo.com/show/483647/student-person.svg" 
        alt="Student Icon" 
        className="w-12 h-12 mx-auto"
      />
      <h2 className="text-lg text-gray-700 font-bold dark::text-gray-400 text-center mt-2">Students</h2>
      <p className="text-gray-700 dark:text-gray-400 text-center">200+</p>
    </div>
  );
};

export default Card;
