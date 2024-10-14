import React, { useState } from 'react';

// Mock data for demonstration
const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', registrationDate: '2023-01-01' },
  // ... more users
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // Function to handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle role filter
  const handleRoleFilter = (e) => {
    setFilterRole(e.target.value);
  };

  // Function to handle status filter
  const handleStatusFilter = (e) => {
    setFilterStatus(e.target.value);
  };

  // Filtered and searched users
  const filteredUsers = users.filter(user => 
    (user.name.includes(searchTerm) || user.email.includes(searchTerm)) &&
    (filterRole ? user.role === filterRole : true) &&
    (filterStatus ? user.status === filterStatus : true)
  );

  return (
    <div>
      <h1>User Management</h1>
      
      {/* Search and Filters */}
      <input type="text" placeholder="Search by name or email" value={searchTerm} onChange={handleSearch} />
      <select onChange={handleRoleFilter}>
        <option value="">All Roles</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        {/* Add more roles as needed */}
      </select>
      <select onChange={handleStatusFilter}>
        <option value="">All Statuses</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="banned">Banned</option>
      </select>

      {/* User List Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date of Registration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>{user.registrationDate}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
                <button>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New User Form */}
      <h2>Add New User</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <select>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          {/* Add more roles as needed */}
        </select>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserManagement;
