import '../index.css';

export default function SettingsManagement() {
  return (
    <div className="main-content">
      <div className="header">
        <h1>Settings</h1>
        <button className="btn btn-primary">
          Save Changes
        </button>
      </div>
      
      <div className="card-grid" style={{ gridTemplateColumns: '1fr', gap: '2rem' }}>
        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>User Profile</h2>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2.5rem', fontWeight: 'bold' }}>
                A
              </div>
              <button className="btn btn-secondary text-sm">Change Avatar</button>
            </div>
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Full Name</label>
                <input type="text" defaultValue="Admin User" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Role</label>
                <input type="text" defaultValue="Administrator" disabled style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-secondary)', opacity: 0.7 }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
                <input type="email" defaultValue="admin@omakcomputers.lk" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Password</label>
                <button className="btn btn-secondary" style={{ width: '100%' }}>Change Password</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Store Settings</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Store Name</label>
              <input type="text" defaultValue="Omak Computers" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Contact Email</label>
              <input type="email" defaultValue="support@omakcomputers.lk" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Currency</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                <option value="LKR">LKR - Sri Lankan Rupee</option>
                <option value="USD">USD - US Dollar</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Tax Rate (%)</label>
              <input type="number" defaultValue="15" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }} />
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>User Preferences</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <input type="checkbox" defaultChecked />
              Enable Email Notifications for New Orders
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <input type="checkbox" defaultChecked />
              Show Low Stock Alerts on Dashboard
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <input type="checkbox" />
              Enable Two-Factor Authentication
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
