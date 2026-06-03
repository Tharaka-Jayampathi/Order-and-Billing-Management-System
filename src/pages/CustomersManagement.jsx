import React, { useState } from 'react';
import './CustomersManagement.css';

function CustomersManagement() {
  const [customers, setCustomers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomerId, setEditingCustomerId] = useState(null);
  const [customerForm, setCustomerForm] = useState({ name: '', email: '', phone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerForm({ ...customerForm, [name]: value });
  };

  const handleSaveCustomer = (e) => {
    e.preventDefault();
    if (!customerForm.name || !customerForm.email || !customerForm.phone) {
      alert("Please fill in all fields!");
      return;
    }

    if (editingCustomerId) {
      const updatedCustomers = customers.map((cust) =>
        cust.id === editingCustomerId ? { ...cust, ...customerForm } : cust
      );
      setCustomers(updatedCustomers);
      setEditingCustomerId(null);
    } else {
      const customerId = `C00${customers.length + 1}`;
      const addedCustomer = { id: customerId, ...customerForm };
      setCustomers([...customers, addedCustomer]);
    }
    setCustomerForm({ name: '', email: '', phone: '' });
    setIsModalOpen(false);
  };

  const handleEditClick = (customer) => {
    setEditingCustomerId(customer.id); 
    setCustomerForm({ name: customer.name, email: customer.email, phone: customer.phone }); 
    setIsModalOpen(true);
  };

  const handleDeleteCustomer = (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      const filteredCustomers = customers.filter(customer => customer.id !== id);
      setCustomers(filteredCustomers);
    }
  };

  const openAddModal = () => {
    setEditingCustomerId(null);
    setCustomerForm({ name: '', email: '', phone: '' });
    setIsModalOpen(true);
  };

  return (
    <div className="customers-container">
      <div className="header-section">
        <h2>Customers</h2>
        <button className="add-btn" onClick={openAddModal}>
          + Add Customer
        </button>
      </div>

      <div className="filter-section">
        <input type="text" placeholder="Search customers..." className="search-bar" />
        <button className="filter-btn">Filter</button>
      </div>

      <table className="customers-table">
        <thead>
          <tr>
            <th>CUSTOMER ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', padding: '20px', color: '#64748b' }}>
              </td>
            </tr>
          ) : (
            customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>
                  <div className="action-buttons">
                
                    <button className="edit-btn" onClick={() => handleEditClick(customer)}>
                      Edit
                    </button>
              
                    <button className="delete-btn" onClick={() => handleDeleteCustomer(customer.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
      
            <h3>{editingCustomerId ? 'Edit Customer' : 'Add New Customer'}</h3>
            
            <form onSubmit={handleSaveCustomer}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={customerForm.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={customerForm.email} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input type="text" name="phone" value={customerForm.phone} onChange={handleInputChange} required />
              </div>
              <div className="modal-buttons">
                <button type="submit" className="save-btn">
                  {editingCustomerId ? 'Update' : 'Save'}
                </button>
                <button type="button" className="close-btn" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomersManagement;