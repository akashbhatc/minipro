import React from 'react';
import { Navbar } from './Studentcomponent/Navbar';
import List from './Studentcomponent/list';
import Post from './Studentcomponent/post';

const Queries = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mb-4"></div> 
      <div className="px-2 p-4 sm:ml-64 flex justify-center">
        <div className="w-full max-w-4xl"> 
          <Post />
        </div>
      </div>
      <div className="p-4 sm:ml-64">
        <div className="grid flex grid-cols-1 gap-4">
          <List />
        </div>
      </div>
    </>
  );
};

export default Queries;
