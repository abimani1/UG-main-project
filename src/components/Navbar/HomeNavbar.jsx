import { Link, useLocation } from 'react-router-dom';
import '../style/HomeNav.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useEffect, useState } from 'react';
import { clientData } from '../../server/api';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HomeNavbar = () => {

  const[user,setUser]=useState([])
  const[pops,setPops]=useState(null)
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(()=>{
    // userData()
    const cData=localStorage.getItem("clientData");
    if(cData){
      setUser(JSON.parse(cData))
      console.log(user);
    }
  },[])

  const handlogout=()=>{
    localStorage.clear()
  }
  return (
    <div className="continer">
      <div className="row">
        <div className="nav_bar">
          <nav className='sticky'>
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
                        <Link to={item.path} className="link" >{item.display}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <Link to={'/vendor/longin'}  className='link'>List Your Business</Link>
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
                sx={{marginTop:'60px',padding:'20px',fontSize:'16px'}}
              >
                <MenuItem onClick={handleClose} sx={{fontSize:'25px',width:'200px',textAlign:'center',fontWeight:'bold',textTransform:'uppercase',color:'gray'}}>{user.clientName}</MenuItem>
                <MenuItem onClick={handleClose} sx={{fontSize:'25px',width:'200px',textAlign:'center',fontWeight:'bold'}}><Link className='Link-nav'>Profile</Link></MenuItem>
                <MenuItem onClick={handleClose} sx={{fontSize:'25px',width:'200px',textAlign:'center',fontWeight:'bold'}}><Link className='Link-nav' to={'/client/deashbord'}>Deshbord</Link></MenuItem>
                <MenuItem onClick={handlogout} sx={{fontSize:'25px',width:'200px',textAlign:'center',fontWeight:'bold'}}><Link className='Link-nav' to={'/signin'}>Logout</Link></MenuItem>
              </Menu>
            </div>
          )}
            </div>
          </nav>
        </div>
      </div>
      
    </div>
  )
}

export default HomeNavbar

const pages = [
  {
      display:"POST RFQ",
      path:"/client/rfq",
  },
  {
      display:"Manage RFQ",
      path:"/client/viewrfq"
  },
  {
    display:"View qutoe's",
    path:"/client/viewQuot"
  },
  {
    display:"wip",
    path:"/client/quote/inbox"
  },
];
