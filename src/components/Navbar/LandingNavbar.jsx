import React from 'react'
import{Link} from 'react-router-dom'
import '../style/landNav.css'

const LandingNavbar = () => {
  return (
    <div className="container">
      <div className="row">
        <nav className="landing-nav sticky">
          <div className="nav-land-container">
            <div className="nav-land-row">
              <div className="land-logo-container">
                <h1><b>My</b>QUote's</h1>
              </div>
              <div className="land-menu-container">
                <ul className="land-menu">
                  {menu.map((item,index)=>(
                    <li className="land-menu-item" key={index}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="land-action-button">
              <Link to={"/signin"}  className='link-action'><button type='button'>Join</button></Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default LandingNavbar

const menu=[
  {
    name:"Home",
    link:"#home"
  },
  {
    name:"about",
    link:"#about"
  },
  {
    name:"service",
    link:"#service"
  },
  {
    name:"Contact Us",
    link:"#contactUs"
  }
]