import React , {useState} from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  const [MobileMenu,setMobileMenu]=useState(false)
  return (
    <>
    <header className='header'>
       <div className='container d_flex'>
        <div className='categories d_flex'>
           <span className='fa-solid fa-border-all'></span>
           <h4>Categories
            <i className='fa fa-chevron-down'></i>
           </h4>
        </div>
           <div className="navlink">
            <ul className={MobileMenu?'nav-links-mobile':'link f_flex c capitalize'} onClick={()=>setMobileMenu(false)}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/pages">Pages</Link>
                  </li>
                  <li>
                    <Link to="/user">User Account</Link>
                  </li>
                  <li>
                    <Link to="/vendor">Vendor Account</Link>
                  </li>
                  <li>
                    <Link to="/track">Track My Order</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
            </ul>

            <button className='toggle' onClick={()=>setMobileMenu(!MobileMenu)}>
                {MobileMenu?<i className='fas fa-times close home-bth'></i>:
               <i className="fa-sharp fa-regular fa-bars open"></i>}
   
            </button>
           </div>
       </div>
    </header>
    </>
  )
}

export default Navbar