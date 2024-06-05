import React from 'react';

const List = ({ students }) => {
    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100">
            <div className="w-full max-w-4xl relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">First Name</th>
                            <th scope="col" className="px-6 py-3">Last Name</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students && students.map(student => (
                            <tr key={student._id}>
                                <td className="px-6 py-4">{student.firstName}</td>
                                <td className="px-6 py-4">{student.lastName}</td>
                                <td className="px-6 py-4">{student.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;
