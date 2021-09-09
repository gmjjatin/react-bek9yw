import React from 'react';
import {
  tableIcon,
  groupIcon,
  filterIcon,
  sortIcon,
  hideIcon
} from '../../assets/svg';
import './style.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-items selected">{tableIcon}Table</div>
      <div className="nav-items">{groupIcon}Group</div>
      <div className="nav-items">{filterIcon}Filter</div>
      <div className="nav-items">{sortIcon}Sort</div>
      <div className="nav-items">
        {hideIcon}
        {'Hide Fields'}
      </div>
    </div>
  );
}
