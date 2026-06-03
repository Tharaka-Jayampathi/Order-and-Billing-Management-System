import { useState, useEffect } from 'react';
import { Users, Mail } from 'lucide-react';
import { fetchOrders } from '../services/api';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders()
      .then(orders => {
        // Extract unique customers from orders and aggregate stats
        const customerMap = new Map();
        
        orders.forEach(order => {
          const email = order.customerEmail;
          if (!customerMap.has(email)) {
            customerMap.set(email, {
              name: order.customerName,
              email: email,
              totalOrders: 0,
              totalSpent: 0,
              lastOrder: order.orderDate
            });
          }
          
          const customer = customerMap.get(email);
          customer.totalOrders += 1;
          customer.totalSpent += order.totalAmount || 0;
          if (new Date(order.orderDate) > new Date(customer.lastOrder)) {
            customer.lastOrder = order.orderDate;
          }
        });
        
        setCustomers(Array.from(customerMap.values()));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="page-header">
        <h1>Customers Directory</h1>
      </div>

      {customers.length === 0 ? (
        <div className="empty-state">
          <Users size={48} />
          <h3>No customers found</h3>
        </div>
      ) : (
        <div className="customer-grid">
          {customers.map((customer, idx) => (
            <div key={idx} className="customer-card">
              <div className="customer-avatar">
                {customer.name.substring(0, 2).toUpperCase()}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{customer.name}</h3>
              <div className="flex items-center gap-2 text-secondary text-sm mb-2">
                <Mail size={14} />
                <span>{customer.email}</span>
              </div>
              
              <div className="customer-stats">
                <div className="customer-stat">
                  <label>Total Orders</label>
                  <span>{customer.totalOrders}</span>
                </div>
                <div className="customer-stat">
                  <label>Total Spent</label>
                  <span className="text-cyan">${customer.totalSpent.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Customers;
