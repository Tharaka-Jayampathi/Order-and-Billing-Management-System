import { useState, useEffect } from 'react';
import { Search, Plus, ChevronDown, ShoppingCart } from 'lucide-react';
import { fetchOrders, updateOrderStatus } from '../services/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrders = () => {
    setLoading(true);
    fetchOrders()
      .then(setOrders)
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateOrderStatus(id, newStatus);
      loadOrders();
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  const getStatusBadgeClass = (status) => {
    if (status === 'COMPLETED' || status === 'DELIVERED') return 'badge-success';
    if (status === 'CANCELLED') return 'badge-danger';
    if (status === 'PENDING') return 'badge-warning';
    return 'badge-info'; // PROCESSING, SHIPPED
  };

  return (
    <div>
      <div className="page-header">
        <h1>Orders Management</h1>
        <div className="header-actions">
          <div className="search-bar">
            <Search size={18} className="text-secondary" />
            <input type="text" placeholder="Search orders..." />
          </div>
          <button className="btn btn-primary">
            <Plus size={18} />
            <span>Create Order</span>
          </button>
        </div>
      </div>

      <div className="filter-bar">
        <select className="filter-select">
          <option value="ALL">All Statuses</option>
          <option value="PENDING">Pending</option>
          <option value="PROCESSING">Processing</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Order #</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="7" style={{ textAlign: 'center' }}>Loading...</td></tr>
            ) : orders.length === 0 ? (
              <tr>
                <td colSpan="7">
                  <div className="empty-state">
                    <ShoppingCart size={48} />
                    <h3>No orders yet</h3>
                  </div>
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td className="font-mono text-cyan">{order.orderNumber}</td>
                  <td>
                    <div className="font-medium">{order.customerName}</div>
                    <div className="text-xs text-secondary">{order.customerEmail}</div>
                  </td>
                  <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                  <td>{order.items?.length || 0} items</td>
                  <td className="font-medium">${order.totalAmount?.toFixed(2)}</td>
                  <td>
                    <span className={`badge ${getStatusBadgeClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <select 
                      className="filter-select" style={{ minWidth: '130px', padding: '0.4rem' }}
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    >
                      <option value="PENDING">Pending</option>
                      <option value="PROCESSING">Processing</option>
                      <option value="SHIPPED">Shipped</option>
                      <option value="DELIVERED">Delivered</option>
                      <option value="COMPLETED">Completed</option>
                      <option value="CANCELLED">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
