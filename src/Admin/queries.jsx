import React from "react";
import { Navbar } from "./admincomponents/Navbar";
import UserList from "./admincomponents/list";

const users = [
  {
    id: 1,
    name: "Neil Sims",
    email: "email@flowbite.com",
    image: "/docs/images/people/profile-picture-1.jpg",
    amount: 320,
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    image: "/docs/images/people/profile-picture-2.jpg",
    amount: 250,
  },
];

const Adqueries = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className="p-4 sm:ml-64">
      <div className="grid flex grid-cols-1 gap-4">
      </div>
    </div>
    </>
  );
};

export default Adqueries;
