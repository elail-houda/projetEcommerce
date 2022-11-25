
import './App.css';
import './contact.js';
import React from 'react';
import Header from './header.jsx';
import Contenu from './contenu.jsx';
import  Categorie from './categorie.jsx';
import Contact from './contact.jsx';
import { BrowserRouter, Route,Routes, Link} from 'react-router-dom';
import Product from './Product.jsx';
// import { NavLink } from "react-router-dom


function App() {
  
  return (
    
       <BrowserRouter>
       <Header/>
      <header>
        
        <nav>
          <a> <span><Link to="/" class=" anim" >Accueil</Link>
          </span></a>
          <a> <span><Link to="/categorie" class=" anim"  ><a> <span>categorie</span></a></Link>
          </span></a>
          <a> <span><Link to="/contact" class=" anim"  ><a> <span>Nous contacter</span></a></Link>
          </span></a>
      
          {/* <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                Cart ({state.length})
              </NavLink> */}
         
      
       </nav>
        </header>
           <Routes>
            <Route path="/" element={< Contenu/>} className="btn"/>
            <Route path="/categorie" element={<Categorie/>}className="btn"/>
            <Route path="/contact" element={<Contact/>} className="btn"/>
            <Route exact path="/product" component={Product} />
           <Route component={Error}/>
          </Routes>
          
     </BrowserRouter>
  );
}



export default App;




