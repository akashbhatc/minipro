import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from './Studentcomponent/Navbar';
import CompanyList from './Studentcomponent/companylist';

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();
    const { studentId } = useParams(); // Get userIdFromUrl from URL params

    useEffect(() => {
        async function fetchCompanies() {
            try {
                console.log(studentId); // Check if userIdFromUrl is received correctly
                const response = await axios.get(`http://localhost:3004/student/${studentId}/company`);
                setCompanies(response.data);
            } catch (error) {
                console.error('Error fetching companies:', error);
                navigate('/login');
            }
        }

        fetchCompanies();
    }, [studentId, navigate]); // studentId and navigate are dependencies

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="p-4 sm:ml-64">
                <div className="grid grid-cols-1 gap-4">
                    {/* Pass userIdFromUrl to CompanyList */}
                    <CompanyList companies={companies} userIdFromUrl={studentId} />
                </div>
            </div>
        </>
    );
};

export default Companies;
