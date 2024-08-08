import React, { useState } from 'react';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('all-updated-data');

  const renderTable = () => {
    switch (activeSection) {
      case 'all-updated-data':
        return <div>All Updated Data Table</div>;
      case 'all-campaign':
        return <div>All Campaign Table</div>;
      case 'all-counsellor-data':
        return <div>All Counsellor Data Table</div>;
      default:
        return <div>Default Table</div>;
    }
  };

  return (
    <div className="admin-panel">
      <header>
        <h1>Admin Panel</h1>
      </header>
      <main>
        <div className="buttons">
          <button onClick={() => setActiveSection('all-updated-data')}>All Updated Data</button>
          <button onClick={() => setActiveSection('all-campaign')}>All Campaign</button>
          <button onClick={() => setActiveSection('all-counsellor-data')}>All Counsellor Data</button>
        </div>
        <div className="table-section">
          {renderTable()}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 MyApp</p>
      </footer>
    </div>
  );
};

export default AdminPanel;
