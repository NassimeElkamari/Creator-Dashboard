import React, { useState } from 'react';

// Mock data for demonstration
const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', registrationDate: '2023-01-01' },
  { id: 1, name: 'Ali', email: 'ali@example.com', role: 'admin', status: 'active', registrationDate: '2023-01-01' },
  // ... more users
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sortField, setSortField] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleRoleFilter = (e) => setFilterRole(e.target.value);
  const handleStatusFilter = (e) => setFilterStatus(e.target.value);
  const handleSort = (field) => setSortField(field);

  const sortedUsers = [...users].sort((a, b) => {
    if (sortField) {
      return a[sortField].localeCompare(b[sortField]);
    }
    return 0;
  });

  const filteredUsers = sortedUsers.filter(user =>
    (user.name.includes(searchTerm) || user.email.includes(searchTerm)) &&
    (filterRole ? user.role === filterRole : true) &&
    (filterStatus ? user.status === filterStatus : true)
  );

  const handleEdit = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
  };

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add or update user
    setIsEditing(false);
    setCurrentUser(null);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">User Management</h1>
      
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <select onChange={handleRoleFilter} className="p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <select onChange={handleStatusFilter} className="p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="banned">Banned</option>
        </select>
        <button onClick={() => handleSort('name')} className="p-2 bg-blue-500 dark:bg-blue-700 text-white rounded">Sort by Name</button>
        <button onClick={() => handleSort('email')} className="p-2 bg-blue-500 dark:bg-blue-700 text-white rounded">Sort by Email</button>
        <button onClick={() => handleSort('registrationDate')} className="p-2 bg-blue-500 dark:bg-blue-700 text-white rounded">Sort by Date</button>
      </div>

      <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-gray-900 dark:text-gray-100">Name</th>
            <th className="py-2 px-4 border-b text-gray-900 dark:text-gray-100">Email</th>
            <th className="py-2 px-4 border-b text-gray-900 dark:text-gray-100">Role</th>
            <th className="py-2 px-4 border-b text-gray-900 dark:text-gray-100">Status</th>
            <th className="py-2 px-4 border-b text-gray-900 dark:text-gray-100">Date of Registration</th>
            <th className="py-2 px-4 border-b text-gray-900 dark:text-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="py-2 px-4 border-b text-gray-900 dark:text-gray-100">{user.name}</td>
              <td className="py-2 px-4 border-b text-gray-900 dark:text-gray-100">{user.email}</td>
              <td className="py-2 px-4 border-b text-gray-900 dark:text-gray-100">{user.role}</td>
              <td className="py-2 px-4 border-b text-gray-900 dark:text-gray-100">{user.status}</td>
              <td className="py-2 px-4 border-b text-gray-900 dark:text-gray-100">{user.registrationDate}</td>
              <td className="py-2 px-4 border-b">
                <button onClick={() => handleEdit(user)} className="mr-2 p-1 bg-yellow-500 dark:bg-yellow-700 text-white rounded">Edit</button>
                <button onClick={() => handleDelete(user.id)} className="mr-2 p-1 bg-red-500 dark:bg-red-700 text-white rounded">Delete</button>
                <button className="p-1 bg-green-500 dark:bg-green-700 text-white rounded">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditing && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Edit User</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" defaultValue={currentUser.name} className="p-2 border border-gray-300 dark:border-gray-700 rounded mb-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
              <input type="email" placeholder="Email" defaultValue={currentUser.email} className="p-2 border border-gray-300 dark:border-gray-700 rounded mb-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
              <select defaultValue={currentUser.role} className="p-2 border border-gray-300 dark:border-gray-700 rounded mb-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <select defaultValue={currentUser.status} className="p-2 border border-gray-300 dark:border-gray-700 rounded mb-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="banned">Banned</option>
              </select>
              <div className="flex justify-end space-x-2">
                <button type="submit" className="p-2 bg-blue-500 dark:bg-blue-700 text-white rounded">Save Changes</button>
                <button type="button" onClick={() => setIsEditing(false)} className="p-2 bg-gray-500 dark:bg-gray-700 text-white rounded">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <h2 className="text-xl font-bold mt-6 mb-4 text-gray-900 dark:text-gray-100">Add New User</h2>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded shadow-md">
        <input type="text" placeholder="Name" className="p-2 border border-gray-300 dark:border-gray-700 rounded mb-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
        <input type="email" placeholder="Email" className="p-2 border border-gray-300 dark:border-gray-700 rounded mb-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
        <input type="password" placeholder="Password" className="p-2 border border-gray-300 dark:border-gray-700 rounded mb-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
        <select className="p-2 border border-gray-300 dark:border-gray-700 rounded mb-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit" className="p-2 bg-blue-500 dark:bg-blue-700 text-white rounded w-full">Add User</button>
      </form>
    </div>
  );
};

export default UserManagement;