import React from "react";
import second from "../CartWidget"
export const NavBar = () => {
    return ( <div className="container">

    <nav className="nav">
    
    <div className="nav_brand">
    
    <a className="nav_link" href="#">Vikinga indumentaria</a>
    
    </div>
    
    <ul className="nav_list">
    
    <li>
    
    <a className="nav_link" href="#">Remera</a>
    
    </li> <li>
    
    <a className="nav_link" href="#">Pantalon</a>
    
    </li>
    
    <li>
    
    <a className="nav_link" href="#"><CartWidget />
    
    </li>
    </ul>
    </nav>
    </div>
       
    );
    
}
export default NavBar