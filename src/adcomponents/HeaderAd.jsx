import { AccountCircle } from '@mui/icons-material';
import { Icon } from '@mui/material';

import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="header-desktop">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="header-wrap">
            <form className="form-header" action="" method="POST">
              <input
                className="au-input au-input--xl"
                type="text"
                name="search"
                placeholder="Tìm kiếm dữ liệu..."
              />
              <button className="au-btn--submit" type="submit">
                <i className="zmdi zmdi-search"></i>
              </button>
            </form>
            <div className="header-button">
              <div className="account-wrap">
                <div className="account-item clearfix js-item-menu">
                  <div className="content">
                    <a className="js-acc-btn">
                      <AccountCircle/>
                     
                    </a>
                    <span class="text-black font-medium" >Logout</span>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
