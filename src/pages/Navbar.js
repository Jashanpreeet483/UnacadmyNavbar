import React from "react";
import Aboutexam from './Aboutexam'
import Batch from './Batch'
import Getstarted from './Getstarted'
import Educator from './Educator'
import Store from './Store'
import Subscription from './Subscription'
import Successstories from './Successstories'
import {Link, Outlet} from 'react-router-dom'
import logo from './unacdmy_logo.png';
import './navbar.css'

const Navbar=()=>{
    return(
        <body>
            
       
       <div className="main">
        <div className="shadow">
        <div className="navbar_header">
        <img src={logo} alt="" id="logo1" />
        <div className="dropdown">
            <div className="dropdown-option">
            <select name="courses" id="courses">
                <option value="CDS">CDS</option>
                <option value="UPSC">UPSC</option>
                <option value="AFCAT">AFCAT</option>
            </select>
            </div>
           {/* --------------------------------searchbar------------------------ */}
          <div className="container">
            <form action="" className="search-bar">
               <input type="text"  placeholder="search anything" name="q" />
                {/* <button type="submit" className="button-icon"><i className="fa fa-search"></i></button> */}
            </form>
          </div>
          {/* -------------------------phone icon------------------------------- */}
          <div className="phone-item">
            <div className="phone-icon"><i className="fa fa-phone"></i></div>
            <div className="phone-no">
                talk to our experts <br />
                 <p>+91-8585858585</p>
            </div>
            <div className="gift-icon">
                <i className="fa fa-gift"></i>
            </div>
          </div>
        {/* ------------------------------nav button----------------------- */}
        <div className="nav-button">
           <div className="btn1"><button id="btn1">Log in</button></div> 
           <div className="btn2"><button id="btn2">Join for free</button></div> 
        </div>
        </div>
        </div>
        

        {/* ---------------------------------components-------------------------------------- */}
        
        <div className="components">
        <nav>
        <Link to="/">Get Started</Link>
        <Link to="/educator">Educators</Link>
        <Link to="/batch">Batch</Link>
        <Link to="/store">Store</Link>
        <Link to="/subscriptionplan">Subscription Plan</Link>
        <Link to="/successstories">Success Stories</Link>
        <Link to="/aboutexam">About Exam</Link>
        
        </nav>
        <Outlet />
        
       </div> 
       </div>

       
       
       
       </div>
       </body>
    )
}
export default Navbar;