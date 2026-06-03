import { useState } from 'react';

const Settings = () => {
  const [toggles, setToggles] = useState({
    notifications: true,
    emailAlerts: false,
    autoInvoice: true,
    darkMode: true
  });

  const handleToggle = (key) => {
    setToggles({ ...toggles, [key]: !toggles[key] });
  };

  return (
    <div>
      <div className="page-header">
        <h1>Settings & Preferences</h1>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <h3>System Preferences</h3>
          <p>Configure global application settings and theme preferences.</p>
          
          <div className="settings-item">
            <span>Dark Mode Theme</span>
            <div 
              className={`toggle ${toggles.darkMode ? 'active' : ''}`} 
              onClick={() => handleToggle('darkMode')}
            />
          </div>
        </div>

        <div className="settings-card">
          <h3>Notifications</h3>
          <p>Manage how you receive alerts and updates from the system.</p>
          
          <div className="settings-item">
            <span>Push Notifications</span>
            <div 
              className={`toggle ${toggles.notifications ? 'active' : ''}`} 
              onClick={() => handleToggle('notifications')}
            />
          </div>
          <div className="settings-item">
            <span>Email Alerts</span>
            <div 
              className={`toggle ${toggles.emailAlerts ? 'active' : ''}`} 
              onClick={() => handleToggle('emailAlerts')}
            />
          </div>
        </div>

        <div className="settings-card">
          <h3>Billing Automation</h3>
          <p>Configure how invoices are generated and handled.</p>
          
          <div className="settings-item">
            <span>Auto-generate Invoices</span>
            <div 
              className={`toggle ${toggles.autoInvoice ? 'active' : ''}`} 
              onClick={() => handleToggle('autoInvoice')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
