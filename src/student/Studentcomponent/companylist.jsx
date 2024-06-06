import React, { useState } from "react";

const CompanyList = ({ companies }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [query, setQuery] = useState("");
  const [company, setCompany] = useState("");

  const handleButtonClick = (companyId, companyName) => {
    setSelectedCompanyId(companyId);
    setCompany(companyName);
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Query submitted for company ID: ${selectedCompanyId}`);
    console.log(`Query: ${query}`);
    setIsModalOpen(false);
    setQuery("");
    setCompany("");
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Company Name</th>
              <th scope="col" className="px-6 py-3">Location</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies &&
              companies.map((company) => (
                <tr key={company._id}>
                  <td className="px-6 py-4">{company.companyName || "N/A"}</td>
                  <td className="px-6 py-4">{company.location}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleButtonClick(company._id, company.companyName)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                      Post a query
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <form onSubmit={handleSubmit} className="max-w-full mx-auto bg-white p-4 shadow-md rounded-lg">
              <fieldset className="mb-2 relative">
                <legend className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Submit a Query</legend>
                <div className="mb-5">
                  <label htmlFor="query-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Query</label>
                  <textarea
                    id="query-input"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter your query"
                    rows="4"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="company-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                  <input
                    type="text"
                    id="company-input"
                    className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Enter company name"
                    disabled
                  />
                </div>
                <button
                  type="submit"
                  className="relative p-2 text-white bg-blue-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <img src="https://www.svgrepo.com/show/491682/paper-plane.svg" alt="Submit" className="w-6 h-6" />
                </button>
              </fieldset>
            </form>
            <button onClick={() => setIsModalOpen(false)} className="mt-4 text-red-500">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyList;
