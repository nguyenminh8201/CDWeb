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
                <Link to={"/"}>
                  <i className="fas fa-chart-bar"></i>Thống kê
                  </Link>
              </li>
              <li className="has-sub">
                <a className="js-arrow" href="#" onClick={handleOpen}>
                  <i className="fas fa-calculator"></i>Quản lý
                  <span className="arrow">
                    <i className="fas fa-angle-down"></i>
                  </span>
                </a>
                {open && (
                  <ul className="list-unstyled js-sub-list">
                    <li style={{ background: '#f5f5f5' }}>
                      <Link to={"/category"}>
                        <i className="fas fa-object-group"></i>Quản lý danh mục
                        </Link>                    
                    </li>
                    <li style={{ background: '#f5f5f5' }}>
                    <Link to={"/product"}>
                        <i className="fas fa-floppy-o"></i>Quản lý sản phẩm
                        </Link> 
                    </li>
                    <li style={{ background: '#f5f5f5' }}>
                      <Link to={"/order"}>
                        <i className="fas fa-sticky-note"></i>Quản lý đơn hàng
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
                  <i className="fas fa-group"></i>Khách hàng
                </a>
              </li>
              <li className="has-sub">
                <a className="js-arrow" href="#">
                  <i className="fas fa-check-square"></i>Hóa đơn
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
