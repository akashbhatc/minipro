import React, { useState } from 'react';
import { Navbar } from './admincomponents/Navbar';
import AddCompany from './admincomponents/addcompany';
//import CompanyTable from './admincomponents/companytable';


const Companies = () => {
    const [companies, setCompanies] = useState([]);
  
    const handleAddCompany = (company) => {
      setCompanies((prevCompanies) => [...prevCompanies, company]);
    };
  
    // const handleDeleteCompany = (index) => {
    //   setCompanies((prevCompanies) => prevCompanies.filter((_, i) => i !== index));
    // };
  
    return (
      <>
        <div>
          <Navbar />
        </div>
        <div className="p-4 sm:ml-64">
          <div className="grid grid-cols-1 gap-4">
            <AddCompany onAddCompany={handleAddCompany} />
          </div>
        </div>
      </>
    );
  };
  
  export default Companies;