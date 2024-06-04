import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AddCompany = ({ onAddCompany }) => {
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const userId = useSelector(state => state.auth.user?._id); // Access userId from Redux store

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!companyName.trim() || !location.trim()) return;

    try {
      // Construct the URL with the user's ID
      const url = `http://localhost:3004/admin/addCompany`;

      // Make a POST request to add company with admin ID
      const response = await axios.post(url, { companyName, location });

      const { company } = response.data;
      onAddCompany(company);
      setCompanyName('');
      setLocation('');
    } catch (error) {
      console.error('Error adding company:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
        placeholder="Enter Company Name"
        required
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full px-3 py-2 mt-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
        placeholder="Enter Location"
        required
      />
      <button
        type="submit"
        className="mt-2 w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Company
      </button>
    </form>
  );
};

export default AddCompany;