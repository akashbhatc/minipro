import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Studentcomponent/Navbar';
import CompanyList from './Studentcomponent/companylist';

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function fetchCompanies() {
            try {
                const response = await axios.get('http://localhost:3004/student/6643afc55bd49f8bfa7eba69/company');
                setCompanies(response.data);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        }

        fetchCompanies();
    }, []);


    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="p-4 sm:ml-64">
                <div className="grid grid-cols-1 gap-4">
                    <CompanyList companies={companies} />
                </div>
            </div>
        </>
    );
};

export default Companies;
