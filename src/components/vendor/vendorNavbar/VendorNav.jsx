import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../style/HomeNav.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const VendorNavbar = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const data=localStorage.getItem("vendorData")
  const[vendor,setVendor]=useState(JSON.parse(data))
  

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlogout=()=>{
    localStorage.removeItem('vendorData')
  }
  return (
    <div className="continer">
      <div className="row">
        <div className="nav_bar">
          <nav>
            <div className="nav_box">
              <div className="nav_title">
                <h2 className="title_log">
                  <b style={{color:'red'}}>my</b>quotes<span></span>
                </h2>
              </div>
              <div className="nav_menu">
                <div className="menu_item_box">
                  <ul className="menu_list">
                    {pages.map((item,index)=>(
                      <li className="menu_item" key={index}>
                        <Link to={item.path} className="link">{item.display}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{color:'white',width:'20px'}}
              >
                <AccountCircleIcon sx={{fontSize:'40px'}} />
              </IconButton>
              <div className="mui-app-bar">
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{marginTop:'60px',padding:'200px',fontSize:'20px',textAlign:'center'}}
              >
                <MenuItem onClick={handleClose} sx={{fontSize:'25px',width:'200px',textAlign:'center',fontWeight:'bold',textTransform:'uppercase',color:'gray'}}>{vendor.vendorName}</MenuItem>
                <MenuItem onClick={handleClose} sx={{fontSize:'25px',width:'200px',textAlign:'center',fontWeight:'bold'}}><Link className='Link-nav'>Profile</Link></MenuItem>
                <MenuItem onClick={handleClose} sx={{fontSize:'25px',width:'200px',textAlign:'center',fontWeight:'bold'}}><Link className='Link-nav' to={'/vendor/Report'}>Report</Link></MenuItem>
                <MenuItem onClick={handlogout} sx={{fontSize:'25px',width:'200px',textAlign:'center',fontWeight:'bold'}}><Link className='Link-nav' to='/vendor/plan/subscription'>Subcreation</Link></MenuItem>
                <MenuItem onClick={handlogout} sx={{fontSize:'25px',width:'200px',textAlign:'center',fontWeight:'bold'}}><Link className='Link-nav' to={'/vendor/longin'}>Logout</Link></MenuItem>
              </Menu>
              </div>
            </div>
          )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default VendorNavbar


const pages = [
  {
      display:"DashBord",
      path:"/"
  },
  {
    display:"View RFQ",
    path:"/vendor/viewRfq"
  },
  {
      display:"Manage QUOTS",
      path:"/vendor/viewQuot"
  },
  {
    display:"wip",
    path:"/vendor/rfq/quoteAccpte/clientquote"
},
];
