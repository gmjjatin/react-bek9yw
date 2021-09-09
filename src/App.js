import React from 'react';
import { Title, Navbar, Treeview } from './components';
import './style.css';

export default function App() {
  return (
    <div>
      <div className="sidebar">
        <Treeview />
      </div>
      <div className="main-container">
        <div className="topbar">
          <Title />
          <Navbar />
        </div>
        <div className="content">content</div>
      </div>
    </div>
  );
}
