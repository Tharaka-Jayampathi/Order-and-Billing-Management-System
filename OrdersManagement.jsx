import { Plus, Search, Filter, Edit2, Trash2 } from 'lucide-react';
import { recentOrders } from '../data/mockData';
import './OrdersManagement.css';

export default function OrdersManagement() {
  return (
    <div className="main-content">
      <div className="header">
        <h1>Orders</h1>
        <button className="btn btn-primary">
          <Plus size={16} /> New Order
        </button>
      </div>

      <div className="table-container">
        <div className="table-header">
          <div className="search-bar">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search orders..." />
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary"><Filter size={16} /> Filter</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td className="col-order-id">{order.id}</td>
                <td>{order.customer}</td>
                <td className="col-date">{order.date}</td>
                <td className="col-amount">{order.amount}</td>
                <td>
                  <span className={`badge ${order.status === 'Completed' ? 'badge-success' : order.status === 'Processing' ? 'badge-warning' : 'badge-danger'}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn-icon"><Edit2 size={16} /></button>
                    <button className="btn-icon text-danger"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
