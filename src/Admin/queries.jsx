// Queries.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from './admincomponents/Navbar';
import QueryList from './admincomponents/querylist';

const Queries = () => {
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        const fetchQueries = async () => {
            try {
                const response = await axios.get('http://localhost:3004/admin/queries');
                setQueries(response.data);
            } catch (error) {
                console.error('Error fetching queries:', error);
            }
        };

        fetchQueries();
    }, []);

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="p-4 sm:ml-64">
                <div className="grid grid-cols-1 gap-4">
                    <h1 className="text-2xl text-gray-800 font-bold">Queries</h1>
                    <QueryList queries={queries} />
                </div>
            </div>
        </>
    );
};

export default Queries;
