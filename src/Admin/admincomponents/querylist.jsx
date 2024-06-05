// QueryList.jsx
import React from 'react';

const QueryList = ({ queries }) => {
    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100">
            <div className="w-full max-w-4xl relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Student ID</th>
                            <th scope="col" className="px-6 py-3">Query Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        {queries && queries.map(query => (
                            <tr key={query._id}>
                                <td className="px-6 py-4">{query.studentId}</td>
                                <td className="px-6 py-4">{query.queryText}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QueryList;
