import React from 'react';

const List = () => {
    const handleDelete = (query) => {
        console.log(`Deleting query: ${query}`);
    };

    const handleAddToWishlist = (query) => {
        console.log(`Adding query to wishlist: ${query}`);
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="overflow-hidden overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Recent Queries
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Student Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Query
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Answer by alumni
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                JohnMan
                            </th>
                            <td className="px-6 py-4">
                                How to get placed 
                            </td>
                            <td className="px-6 py-4">
                                Chill
                            </td>
                            <td className="px-6 py-4 text-right flex gap-4 justify-end">
                                <button 
                                    type="button" 
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    onClick={() => handleAddToWishlist("How to get placed")}
                                >
                                    <img className="h-8 w-8" src="https://www.svgrepo.com/show/447850/wishlist.svg" alt="Add to Wishlist" />
                                </button>
                                <button 
                                    type="button" 
                                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                    onClick={() => handleDelete("How to get placed")}
                                >
                                    <img className="h-8 w-8" src="https://www.svgrepo.com/show/494410/delete.svg" alt="Delete" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;
