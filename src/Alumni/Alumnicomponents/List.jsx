import React from 'react';
import Modal from './Modal';

const List = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedQuery, setSelectedQuery] = React.useState(null);

    const openModal = (query) => {
        setSelectedQuery(query);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Recent Queries</p>
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
                            Answers by other users
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Respond</span>
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
                        <td className="px-6 py-4 text-right">
                            <button 
                                type="button" 
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                onClick={() => openModal("How to get placed")}
                            >
                                Respond
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {isModalOpen && (
                <Modal 
                    username="JohnMan" 
                    query={selectedQuery} 
                    closeModal={closeModal} 
                />
            )}
        </div>
    );
};

export default List;
