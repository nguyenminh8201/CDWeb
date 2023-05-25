import { AccountCircle } from '@mui/icons-material';
import { Icon } from '@mui/material';

import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <head>
        <link href="css/font-face.css" rel="stylesheet" media="all"></link>
      <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all"></link>
      <link href="vendor/font-awesome-5/css/fontawesome-all.min.css" rel="stylesheet" media="all"></link>
      <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all"></link>


      <link href="vendor/bootstrap-4.1/bootstrap.min.css" rel="stylesheet" media="all"></link>


      <link href="vendor/animsition/animsition.min.css" rel="stylesheet" media="all"></link>
      <link href="vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" media="all"></link>
      <link href="vendor/wow/animate.css" rel="stylesheet" media="all"></link>
      <link href="vendor/css-hamburgers/hamburgers.min.css" rel="stylesheet" media="all"></link>
      <link href="vendor/slick/slick.css" rel="stylesheet" media="all"></link>
      <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all"></link>
      <link href="vendor/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" media="all"></link>


      <link href="css/theme.css" rel="stylesheet" media="all"></link>
      </head>
      <header className="header-desktop">
        <div className="section__content section__content--p30">
          <div className="container-fluid">
            <div className="header-wrap">
              <form className="form-header" action="" method="POST">
                <input
                  className="au-input au-input--xl"
                  type="text"
                  name="search"
                  placeholder="Search..."
                />
                <button className="au-btn--submit" type="submit">
                  <i className="zmdi zmdi-search"></i>
                </button>
              </form>
              <div className="header-button">
                <div className="account-wrap">
                  <div className="">
                    <div className="content" style={{ display: "flex" }}>
                      <a className="">
                        <AccountCircle />
                      </a>
                      <span class="text-black font-medium">Logout</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
