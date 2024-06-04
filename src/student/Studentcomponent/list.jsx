
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const List = ({ queries, handleDelete }) => {
    const handleAddToWishlist = (query) => {
        console.log(`Adding query to wishlist: ${query}`);
    };

    return (
        <InfiniteScroll
            dataLength={queries.length}
            next={() => {}}
            hasMore={false}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more queries</p>}
        >
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Recent Queries
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Student Username</th>
                            <th scope="col" className="px-6 py-3">Query</th>
                            <th scope="col" className="px-6 py-3">Company</th>
                            <th scope="col" className="px-6 py-3">Answer by alumni</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {queries.map((query, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                    {query.studentUsername}
                                </th>
                                <td className="px-6 py-4">{query.query}</td>
                                <td className="px-6 py-4">{query.company}</td>
                                <td className="px-6 py-4">{query.answer}</td>
                                <td className="px-6 py-4 text-right flex gap-4 justify-end">
                                    <button
                                        type="button"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        onClick={() => handleAddToWishlist(query.query)}
                                    >
                                        <img className="h-6 w-6" src="https://www.svgrepo.com/show/447850/wishlist.svg" alt="Add to Wishlist" />
                                    </button>
                                    <button
                                        type="button"
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                        onClick={() => handleDelete(query.query)}
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
