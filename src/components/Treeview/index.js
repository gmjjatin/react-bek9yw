import React from 'react';
import {
  searchIcon,
  closePaneIcon,
  notificationIcon,
  rightArrowIcon,
  downArrowIcon
} from '../../assets/svg';
import './style.scss';

export default function Treeview() {
  return (
    <div className="treeview">
      <div className="panel">
        <div className="heading ">
          <h3>WorkSpace 1</h3>
          <span className="svg">{closePaneIcon}</span>
        </div>
        <div className="item">
          {searchIcon}
          <span>Search</span>
        </div>
      </div>
    </div>
  );
}
