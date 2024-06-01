import React from "react";
import { Navbar } from "./admincomponents/Navbar";
import List from "./admincomponents/list";

const Adqueries = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className="p-4 sm:ml-64">
      <div className="grid flex grid-cols-1 gap-4">
        <List/>
      </div>
    </div>
    </>
  );
};

export default Adqueries;
