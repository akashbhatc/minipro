import React from 'react';

const Card = () => {
  return (
    <div className="fixed top-1/4 left-0 w-full flex justify-center">
      <div className="max-w-sm bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-2">
          <h1 className="text-gray-900 dark:text-white font-bold text-2xl uppercase mb-2">Company Name</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum nunc vel arcu congue, eget dignissim ante tincidunt. Ut in turpis at mi accumsan bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
        </div>
      </div>
      <div className="max-w-sm bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-2">
          <h1 className="text-gray-900 dark:text-white font-bold text-2xl uppercase mb-2">Company Name</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum nunc vel arcu congue, eget dignissim ante tincidunt. Ut in turpis at mi accumsan bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
