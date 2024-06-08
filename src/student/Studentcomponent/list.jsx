import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const List = ({ handleDelete }) => {
    const [queries, setQueries] = useState([]);
    const location = useLocation();
    const companyIdFromUrl = location.pathname.split('/')[4]; // Extract company ID from URL

    useEffect(() => {
        // Fetch queries for the given company ID
        const fetchQueries = async () => {
            try {
                const response = await axios.get(`http://localhost:3004/company/${companyIdFromUrl}/queries`);
                setQueries(response.data);
            } catch (error) {
                console.error('Error fetching queries:', error);
            }
        };

        fetchQueries();
    }, [companyIdFromUrl]);

    return (
        <InfiniteScroll
            dataLength={queries.length}
            next={() => {}}
            hasMore={false}
            loader={<h4>Loading...</h4>}
            endMessage={<p className="text-gray-400">No more queries</p>}
        >
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Recent Queries
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Query</th>
                            <th scope="col" className="px-6 py-3">Answers</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(queries) && queries.map((query, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">{query.queryText}</td>
                                <td className="px-6 py-4">
                                    {Array.isArray(query.answers) ? (
                                        <ul className="list-decimal list-inside">
                                            {query.answers.map((answer, i) => (
                                                <li key={i}>{answer}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No answers available</p>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right flex gap-4 justify-end">
                                    <button
                                        type="button"
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                        onClick={() => handleDelete(query.queryText)}
                                    >
                                        <img className="h-6 w-6" src="https://www.svgrepo.com/show/494410/delete.svg" alt="Delete" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </InfiniteScroll>
    );
};

export default List;
