import s4 from './index.png';
import React from 'react';
import { BrowserRouter, Route,Routes, Link} from 'react-router-dom';
import { useSelector } from "react-redux";

function Header() {
    // const state = useSelector((state) => state.handleCart);
  return (
    
    <header>
        <div class="info">
            <div class="contact">
                <span>+212 xxxxxxxxx</span>
                <span> fullstack@team.com</span>
            </div>
            <div class="more-info">
                <span><a href="#">Location</a></span>
                <span><a href="#">Daily deal</a></span>
                <span><a href="Mon_compt.html">Mon compt</a></span>
                <span><a href="#">Se connecter</a></span>
            </div>
        </div>
        <div class="main">
            <div class="logo">
                <a href="#">Shop<span>E</span> </a>
            </div>
            <div class="icons">
                
                <button id="connect-btn">
                    
                    <Link to="/cart"  class=" anim"  ><a> <span><img src={s4} class="far" />
                    {/* ({state.length}) */}
                    </span></a></Link>
                </button>
                
            </div>
           
        </div>
    </header>



    
  );
}

export default Header;

 