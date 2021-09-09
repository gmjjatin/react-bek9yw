import React from 'react';
import './style.scss';

export default function Title() {
  return (
    <div className="title">
      <div className="breadcrumb">
        All Leads
        <div className="breadcrumb-divder">/</div>
        By Category
        <div className="breadcrumb-divder">/</div>
        Wallpapers
      </div>
      <h2>Wallpaper</h2>
    </div>
  );
}
