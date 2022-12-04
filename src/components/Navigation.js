import React, { useState } from "react";

const Navigation = (props) => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <ul>
          {props.pages.map((item, index) => (
            <li onClick={() => props.setCurrentPage(item)}>{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
