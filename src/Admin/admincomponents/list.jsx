import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({ users }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-1 mt-10 ml-100"> 
      <ul className="max-w-md divide-y divide-black dark:divide-black">
        {users.map((user) => (
          <li key={user.id} className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src={user.image} alt={`${user.name} image`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-black truncate dark:text-white">
                  {user.name}
                </p>
                <p className="text-sm text-black truncate dark:text-gray-400">
                  {user.email}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-black dark:text-white">
                ${user.amount}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
};

export default UserList;
