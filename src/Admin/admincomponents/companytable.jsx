import React from 'react';

const deleteIconUrl = 'https://www.svgrepo.com/show/502614/delete.svg';

const CompanyTable = ({ companies, onDeleteCompany }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Company name
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'even:bg-gray-50 even:dark:bg-gray-800' : 'odd:bg-white odd:dark:bg-gray-900'
              } border-b dark:border-gray-700`}
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {company.name}
              </td>
              <td className="px-6 py-4">
                <button onClick={() => onDeleteCompany(index)} className="bg-gray-50 focus:outline-none">
                  <img src={deleteIconUrl} alt="Delete" className="w-4 h-4 text-red-600 hover:opacity-70" style={{ backgroundColor: 'white', borderRadius: '50%' }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
