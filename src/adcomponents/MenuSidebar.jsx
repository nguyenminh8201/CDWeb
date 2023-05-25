import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Router } from 'react-router-dom';

const MenuSidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <aside className="menu-sidebar2 d-none d-lg-block">
        <div className="logo title-6">
          <a href="admin-index.html" style={{ color: 'black' }}>
            <span style={{ fontWeight: 700 }}>Timup</span> SHOP
          </a>
        </div>
        <div className="menu-sidebar2__content js-scrollbar2">
          <nav className="navbar-sidebar2">
          <ul className="list-unstyled navbar__list">
              <li>
                <Link to={"/statistical"}>
                  <i className="fas fa-chart-bar"></i>Statistical
                  </Link>
              </li>
              <li className="has-sub">
                <a className="js-arrow" href="#" onClick={handleOpen}>
                  <i className="fas fa-calculator"></i>Manage
                  <span className="arrow">
                    <i className="fas fa-angle-down"></i>
                  </span>
                </a>
                {open && (
                  <ul className="list-unstyled js-sub-list">
                    <li style={{ background: '#f5f5f5' }}>
                      <Link to={"/category"}>
                        <i className="fas fa-object-group"></i>Category Manager
                        </Link>                    
                    </li>
                    <li style={{ background: '#f5f5f5' }}>
                    <Link to={"/productManager"}>
                        <i className="fas fa-floppy-o"></i>Product Management
                        </Link> 
                    </li>
                    <li style={{ background: '#f5f5f5' }}>
                      <Link to={"/order"}>
                        <i className="fas fa-sticky-note"></i>Order Management
                        </Link>
                      <span className="inbox-num">3</span>
                    </li>
                    {/* <li style={{ background: '#f5f5f5' }}>
                      <a href="quan-ly-tuong-tac.html">
                        <i className="fas fa-send"></i>Quản lý tương tác
                      </a>
                      <span className="inbox-num">1</span>
                    </li> */}
                  </ul>
                )}
              </li>
              <li className="has-sub">
                <a className="js-arrow" href="#">
                  <i className="fas fa-group"></i>User
                </a>
              </li>
              <li className="has-sub">
                <a className="js-arrow" href="#">
                  <i className="fas fa-check-square"></i>Bill
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <Outlet />
    </div>
  );
};

export default MenuSidebar;
