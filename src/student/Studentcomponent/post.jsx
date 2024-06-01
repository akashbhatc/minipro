import React, { useState } from 'react';

const Post = ({ addQuery }) => {
    const [query, setQuery] = useState('');
    const [company, setCompany] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuery = {
            studentUsername: 'currentUsername',
            query,
            company,
        };
        addQuery(newQuery);
        setQuery('');
        setCompany('');
    };

    return (<div>
        <form className="max-w-full mx-auto bg-white p-4 shadow-md rounded-lg" onSubmit={handleSubmit}>
            <fieldset className="mb-2 relative">
                <legend className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Submit a Query</legend>
                <div className="mb-5">
                    <label htmlFor="query-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Query
                    </label>
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
                    <label htmlFor="company-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="company-input"
                        className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Enter company name"
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
        </div>
    );
};

export default Post;
