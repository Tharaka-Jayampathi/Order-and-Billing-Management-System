import { useState, useEffect } from 'react';
import { DollarSign, ShoppingCart, Clock, Package, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchDashboardStats } from '../services/api';

const mockChartData = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 2000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 1890 },
  { name: 'Sat', revenue: 2390 },
  { name: 'Sun', revenue: 3490 },
];

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalRevenue: 12426,
    totalOrders: 156,
    pendingOrders: 23,
    activeProducts: 45,
    recentOrders: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats()
      .then(data => {
        setStats({
          totalRevenue: data.totalRevenue || 0,
          totalOrders: data.totalOrders || 0,
          pendingOrders: data.pendingOrders || 0,
          activeProducts: data.activeProducts || 0,
          recentOrders: data.recentOrders || []
        });
      })
      .catch(error => console.error("Failed to fetch stats, using mock data", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="header">
        <h1>Dashboard Overview</h1>
      </div>

      <div className="card-grid">
        <div className="card">
          <div className="card-header">
            <span>Total Revenue</span>
            <div className="stat-icon cyan">
              <DollarSign size={20} />
            </div>
          </div>
          <div className="card-value">${stats.totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          <div className="card-trend text-success">
            <TrendingUp size={14} /> <span>+12.5% from last month</span>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span>Total Orders</span>
            <div className="stat-icon purple">
              <ShoppingCart size={20} />
            </div>
          </div>
          <div className="card-value">{stats.totalOrders}</div>
          <div className="card-trend text-success">
            <TrendingUp size={14} /> <span>+5.2% from last month</span>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span>Pending Orders</span>
            <div className="stat-icon warning">
              <Clock size={20} />
            </div>
          </div>
          <div className="card-value">{stats.pendingOrders}</div>
          <div className="card-trend text-secondary">
            <span>Requires processing</span>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span>Active Products</span>
            <div className="stat-icon success">
              <Package size={20} />
            </div>
          </div>
          <div className="card-value">{stats.activeProducts}</div>
          <div className="card-trend text-secondary">
            <span>In inventory</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <h2>Revenue Overview</h2>
        <div style={{ height: 300, width: '100%' }}>
          <ResponsiveContainer>
            <AreaChart data={mockChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--accent-cyan)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--accent-cyan)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text-secondary)" tick={{ fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
              <YAxis stroke="var(--text-secondary)" tick={{ fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--glass-border)', borderRadius: 'var(--radius-sm)' }}
                itemStyle={{ color: 'var(--accent-cyan)' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="var(--accent-cyan)" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="table-container">
        <div className="table-header">
          <h2>Recent Transactions</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {stats.recentOrders.length > 0 ? (
              stats.recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="font-mono text-cyan">{order.orderNumber}</td>
                  <td>{order.customerName}</td>
                  <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                  <td>${order.totalAmount.toFixed(2)}</td>
                  <td>
                    <span className={`badge ${
                      order.status === 'COMPLETED' ? 'badge-success' : 
                      order.status === 'CANCELLED' ? 'badge-danger' : 
                      'badge-warning'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              // Mock fallback
              <>
                <tr>
                  <td className="font-mono text-cyan">ORD-8491</td>
                  <td>Alex Mercer</td>
                  <td>May 5, 2026</td>
                  <td>$349.98</td>
                  <td><span className="badge badge-success">Completed</span></td>
                </tr>
                <tr>
                  <td className="font-mono text-cyan">ORD-8492</td>
                  <td>Sarah Chen</td>
                  <td>May 5, 2026</td>
                  <td>$1,299.00</td>
                  <td><span className="badge badge-warning">Processing</span></td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
