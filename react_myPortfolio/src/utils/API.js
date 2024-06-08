import React, { useEffect, useState } from 'react';
import API from '../utils/API';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch all users when the component mounts
    API.getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleUserClick = (userId) => {
    // Fetch a single user when a user is clicked
    API.getSingleUser(userId)
      .then((response) => {
        setSelectedUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h2>{selectedUser.name}</h2>
          <p>{selectedUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserList;
