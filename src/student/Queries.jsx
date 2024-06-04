import React, { useState } from 'react';
import { Navbar } from './Studentcomponent/Navbar';
import List from './Studentcomponent/list';
import Post from './Studentcomponent/post';

const Queries = () => {
  const [queries, setQueries] = useState([]);

  const addQuery = (newQuery) => {
    setQueries([newQuery, ...queries]);
  };

  const handleDelete = (query) => {
    setQueries(queries.filter(q => q.query !== query));
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mb-4 mt-10"></div> 
      <div className="px-2 py-7 gap-6 sm:ml-64 flex justify-center">
        <div className="w-full max-w-4xl"> 
          <Post addQuery={addQuery} />
        </div>
      </div>
      <div className="p-4 sm:ml-64">
        <div className="grid flex grid-cols-1 gap-4">
          <List queries={queries} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  );
};

export default Queries;