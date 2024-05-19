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
    <div className="flex">
      <Navbar />
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="grid grid-cols-5 gap-4 mb-20">
          <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <UserList users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adqueries;
