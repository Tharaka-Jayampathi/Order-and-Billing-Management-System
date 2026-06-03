import { useState, useEffect } from 'react';
import { Search, FileText, Download } from 'lucide-react';
import { fetchInvoices, updateInvoiceStatus } from '../services/api';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadInvoices = () => {
    setLoading(true);
    fetchInvoices()
      .then(setInvoices)
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadInvoices();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateInvoiceStatus(id, newStatus);
      loadInvoices();
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  const getStatusBadgeClass = (status) => {
    if (status === 'PAID') return 'badge-success';
    if (status === 'OVERDUE' || status === 'CANCELLED') return 'badge-danger';
    return 'badge-warning'; // UNPAID
  };

  return (
    <div>
      <div className="page-header">
        <h1>Billing & Invoices</h1>
        <div className="header-actions">
          <div className="search-bar">
            <Search size={18} className="text-secondary" />
            <input type="text" placeholder="Search invoices..." />
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Order #</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="8" style={{ textAlign: 'center' }}>Loading...</td></tr>
            ) : invoices.length === 0 ? (
              <tr>
                <td colSpan="8">
                  <div className="empty-state">
                    <FileText size={48} />
                    <h3>No invoices found</h3>
                  </div>
                </td>
              </tr>
            ) : (
              invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="font-mono text-cyan">{invoice.invoiceNumber}</td>
                  <td className="font-mono">{invoice.order?.orderNumber || 'N/A'}</td>
                  <td>{invoice.customerName}</td>
                  <td className="font-medium">${invoice.totalAmount?.toFixed(2)}</td>
                  <td>
                    <span className={`badge ${getStatusBadgeClass(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td>{new Date(invoice.issuedDate).toLocaleDateString()}</td>
                  <td>
                    <span className={new Date(invoice.dueDate) < new Date() && invoice.status !== 'PAID' ? 'text-danger' : ''}>
                      {new Date(invoice.dueDate).toLocaleDateString()}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <select 
                        className="filter-select" style={{ minWidth: '100px', padding: '0.4rem' }}
                        value={invoice.status}
                        onChange={(e) => handleStatusChange(invoice.id, e.target.value)}
                      >
                        <option value="UNPAID">Unpaid</option>
                        <option value="PAID">Paid</option>
                        <option value="OVERDUE">Overdue</option>
                        <option value="CANCELLED">Cancelled</option>
                      </select>
                      <button className="btn-icon" title="Download PDF">
                        <Download size={18} />
                      </button>
                    </div>
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

export default Invoices;
