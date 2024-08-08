import React, { useState } from 'react';

const CounsellorPanel = () => {
  const [activeSection, setActiveSection] = useState('section-1');

  const renderTable = () => {
    switch (activeSection) {
      case 'section-1':
        return <div>Section 1 Table</div>;
      case 'section-2':
        return <div>Section 2 Table</div>;
      case 'section-3':
        return <div>Section 3 Table</div>;
      case 'section-4':
        return <div>Section 4 Table</div>;
      default:
        return <div>Default Table</div>;
    }
  };

  return (
    <div className="counsellor-panel">
      <header>
        <h1>Counsellor Panel</h1>
      </header>
      <main>
        <div className="buttons">
          <button onClick={() => setActiveSection('section-1')}>Section 1</button>
          <button onClick={() => setActiveSection('section-2')}>Section 2</button>
          <button onClick={() => setActiveSection('section-3')}>Section 3</button>
          <button onClick={() => setActiveSection('section-4')}>Section 4</button>
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

export default CounsellorPanel;
