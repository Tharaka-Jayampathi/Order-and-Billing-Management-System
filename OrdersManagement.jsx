import { useState, useEffect } from "react";
import { Plus, Search, Filter, Edit2, Trash2, X, ShoppingCart, User, DollarSign, Tag } from "lucide-react";

const mockOrders = [
  { id: "ORD-001", customer: { name: "Alice Johnson" }, orderDate: "2024-05-01", totalAmount: 1200, status: "Completed" },
  { id: "ORD-002", customer: { name: "Bob Smith" }, orderDate: "2024-05-03", totalAmount: 850, status: "Processing" },
  { id: "ORD-003", customer: { name: "Carol White" }, orderDate: "2024-05-07", totalAmount: 3400, status: "Pending" },
];

export default function OrdersManagement() {
  const [orders, setOrders] = useState(mockOrders);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newOrder, setNewOrder] = useState({ customerId: "", totalAmount: "", status: "Pending" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOrder = () => {
    const order = {
      id: `ORD-00${orders.length + 1}`,
      customer: { name: `Customer #${newOrder.customerId}` },
      orderDate: new Date().toISOString(),
      totalAmount: parseFloat(newOrder.totalAmount) || 0,
      status: newOrder.status,
    };
    setOrders((prev) => [order, ...prev]);
    setShowModal(false);
    setNewOrder({ customerId: "", totalAmount: "", status: "Pending" });
  };

  const statusConfig = {
    Completed: { bg: "#d1fae5", color: "#065f46", dot: "#10b981" },
    Processing: { bg: "#fef3c7", color: "#92400e", dot: "#f59e0b" },
    Pending: { bg: "#fee2e2", color: "#991b1b", dot: "#ef4444" },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .om-page {
          font-family: Inter', sans-serif;
          background: #f4f6fb;
          min-height: 100vh;
          padding: 36px 40px;
        }

        /* ── Header ── */
        .om-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
        }
        .om-title {
          font-family: Inter', sans-serif;
          font-size: 30px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.5px;
        }
        .om-btn-new {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #0ea5e9;
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 11px 22px;
          font-family: Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(14,165,233,0.35);
        }
        .om-btn-new:hover {
          background: #0284c7;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(14,165,233,0.45);
        }
        .om-btn-new:active { transform: translateY(0); }

        /* ── Table card ── */
        .om-card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 2px 16px rgba(15,23,42,0.07);
          overflow: hidden;
        }
        .om-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid #f1f5f9;
        }
        .om-search {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          padding: 9px 14px;
          width: 260px;
        }
        .om-search input {
          border: none;
          background: transparent;
          outline: none;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #334155;
          width: 100%;
        }
        .om-search input::placeholder { color: #94a3b8; }
        .om-btn-filter {
          display: flex;
          align-items: center;
          gap: 7px;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          padding: 9px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #475569;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .om-btn-filter:hover { border-color: #cbd5e1; background: #f1f5f9; }
        table { width: 100%; border-collapse: collapse; }
        thead tr { background: #f8fafc; }
        thead th {
          padding: 13px 24px;
          text-align: left;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #94a3b8;
        }
        tbody tr {
          border-top: 1px solid #f1f5f9;
          transition: background 0.15s;
        }
        tbody tr:hover { background: #fafcff; }
        tbody td {
          padding: 15px 24px;
          font-size: 14px;
          color: #334155;
        }
        .td-id {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: #0f172a;
        }
        .td-amount { font-weight: 600; color: #0f172a; }
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        .btn-icon {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          color: #94a3b8;
          transition: background 0.15s, color 0.15s;
        }
        .btn-icon:hover { background: #f1f5f9; color: #475569; }
        .btn-icon.danger:hover { background: #fee2e2; color: #ef4444; }
        .actions-cell { display: flex; gap: 4px; align-items: center; }

        /* ── MODAL OVERLAY ── */
        .om-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeOverlay 0.2s ease;
        }
        @keyframes fadeOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── MODAL BOX ── */
        .om-modal {
          background: #fff;
          border-radius: 24px;
          width: 100%;
          max-width: 460px;
          box-shadow: 0 24px 60px rgba(15,23,42,0.22), 0 0 0 1px rgba(15,23,42,0.05);
          animation: slideUp 0.25s cubic-bezier(0.34,1.56,0.64,1);
          overflow: hidden;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }

        .om-modal-top {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          padding: 28px 28px 24px;
          position: relative;
        }
        .om-modal-icon {
          width: 44px;
          height: 44px;
          background: rgba(255,255,255,0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .om-modal-title {
          font-family: 'Inter', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.3px;
        }
        .om-modal-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          margin-top: 3px;
        }
        .om-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255,255,255,0.18);
          border: none;
          border-radius: 8px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
          transition: background 0.15s;
        }
        .om-modal-close:hover { background: rgba(255,255,255,0.3); }

        .om-modal-body {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* ── Form Fields ── */
        .om-field label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #64748b;
          margin-bottom: 8px;
        }
        .om-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .om-input-icon {
          position: absolute;
          left: 14px;
          color: #94a3b8;
          pointer-events: none;
        }
        .om-input-wrap input,
        .om-input-wrap select {
          width: 100%;
          padding: 12px 14px 12px 42px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #0f172a;
          background: #f8fafc;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          appearance: none;
          -webkit-appearance: none;
        }
        .om-input-wrap input:focus,
        .om-input-wrap select:focus {
          border-color: #0ea5e9;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(14,165,233,0.12);
        }
        .om-input-wrap input::placeholder { color: #cbd5e1; }

        /* Status pills inside select */
        .om-modal-footer {
          display: flex;
          gap: 12px;
          padding: 0 28px 28px;
        }
        .om-btn-cancel {
          flex: 1;
          padding: 13px;
          border: 2px solid #e2e8f0;
          background: #fff;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #64748b;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .om-btn-cancel:hover { border-color: #cbd5e1; background: #f8fafc; }
        .om-btn-save {
          flex: 2;
          padding: 13px;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          border: none;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(14,165,233,0.35);
        }
        .om-btn-save:hover {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(14,165,233,0.45);
        }
        .om-btn-save:active { transform: translateY(0); }
        .divider {
          height: 1px;
          background: #f1f5f9;
          margin: 0 28px 4px;
        }
      `}</style>

      <div className="om-page">
        {/* Header */}
        <div className="om-header">
          <h1 className="om-title">Orders</h1>
          <button className="om-btn-new" onClick={() => setShowModal(true)}>
            <Plus size={16} />
            New Order
          </button>
        </div>

        {/* Table */}
        <div className="om-card">
          <div className="om-toolbar">
            <div className="om-search">
              <Search size={15} color="#94a3b8" />
              <input type="text" placeholder="Search orders..." />
            </div>
            <button className="om-btn-filter">
              <Filter size={14} />
              Filter
            </button>
          </div>

          {loading ? (
            <p style={{ padding: 24, color: "#94a3b8" }}>Loading orders…</p>
          ) : (
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
                {orders.map((order) => {
                  const sc = statusConfig[order.status] || statusConfig.Pending;
                  return (
                    <tr key={order.id}>
                      <td className="td-id">{order.id}</td>
                      <td>{order.customer?.name ?? "Unknown"}</td>
                      <td style={{ color: "#94a3b8", fontSize: 13 }}>
                        {order.orderDate
                          ? new Date(order.orderDate).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              },
                            )
                          : "N/A"}
                      </td>
                      <td className="td-amount">
                        ${order.totalAmount.toLocaleString()}
                      </td>
                      <td>
                        <span
                          className="status-pill"
                          style={{ background: sc.bg, color: sc.color }}
                        >
                          <span
                            className="status-dot"
                            style={{ background: sc.dot }}
                          />
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <div className="actions-cell">
                          <button className="btn-icon">
                            <Edit2 size={15} />
                          </button>
                          <button className="btn-icon danger">
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* ── MODAL ── */}
      {showModal && (
        <div
          className="om-overlay"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="om-modal">
            {/* Gradient header */}
            <div className="om-modal-top">
              <div className="om-modal-icon">
                <ShoppingCart size={22} color="#fff" />
              </div>
              <div className="om-modal-title">Create New Order</div>
              <div className="om-modal-sub">
                Fill in the details below to add a new order
              </div>
              <button
                className="om-modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={16} />
              </button>
            </div>

            {/* Inputs */}
            <div className="om-modal-body">
              <div className="om-field">
                <label>Customer ID</label>
                <div className="om-input-wrap">
                  <User size={16} className="om-input-icon" />
                  <input
                    type="number"
                    name="customerId"
                    value={newOrder.customerId}
                    onChange={handleInputChange}
                    placeholder="e.g. 1042"
                  />
                </div>
              </div>

              <div className="om-field">
                <label>Total Amount</label>
                <div className="om-input-wrap">
                  <DollarSign size={16} className="om-input-icon" />
                  <input
                    type="number"
                    name="totalAmount"
                    value={newOrder.totalAmount}
                    onChange={handleInputChange}
                    placeholder="e.g. 1500"
                  />
                </div>
              </div>

              <div className="om-field">
                <label>Status</label>
                <div className="om-input-wrap">
                  <Tag size={16} className="om-input-icon" />
                  <select
                    name="status"
                    value={newOrder.status}
                    onChange={handleInputChange}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="divider" />

            {/* Footer */}
            <div className="om-modal-footer">
              <button
                className="om-btn-cancel"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="om-btn-save" onClick={handleAddOrder}>
                Save Order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
