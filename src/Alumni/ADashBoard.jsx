import React from "react";
import { Navbar } from "./Alumnicomponents/Navbar";
import Card from "./Alumnicomponents/card";

const ADashBoard = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col items-center mt-20 w-full">
        <Card />
      </div>
    </div>
  );
};

export default ADashBoard;
