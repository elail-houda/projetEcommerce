import './categorie.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import s1 from './img/homme3.jpeg';
import s2 from './img/famme1.jpeg';
import s3 from './img/accessoires.jpg';
import s4 from './img/index.jpg';
import { NavLink } from 'react-router-dom';









function Categorie() {
   
    const [product,setproduct]=useState([])
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products/category/men's clothing")
       .then((res)=>{setproduct(res.data)})
      },[]);
    const [prod,setprod]=useState([])
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products/category/women's clothing")
       .then((res)=>{setprod(res.data)})
      },[]);
    const [prod1,setprod1]=useState([])
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products/category/jewelery")
       .then((res)=>{setprod1(res.data)})
      },[]);
    const [prod2,setprod2]=useState([])
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products/category/electronics")
       .then((res)=>{setprod2(res.data)})
      },[]);
   
let a = document.getElementById("cont");
let b = document.getElementById("cont1");
let c = document.getElementById("cont2");
let d = document.getElementById("cont3");
// const affiche = (x) => {
//     x.classList.toggle("produit");
//         
           
const afficher = (x)=> {
    
   x.className = 'produit';
       
     }
   const cacher= (x, y, z) =>{
        x.className='cont';
        y.className='cont';
        z.className='cont';
       
       
    }
                    
  return (
    

    <div className='contain'>
    <section className="content" id="content">
        <div class="boxes">
            <article class="hom categ" id="hom">
                <img src={s1} onClick={() => {cacher(b,c,d); afficher(a)}}/> 
                <h3>Homme</h3>
            </article>
            <article class="fem categ" id="fem"  >
                <img src={s2}  onClick={() => {cacher(a,c,d); afficher(b)}}/>
                <h3>Femme</h3>
            </article>
            <article class="enf categ" id="enfant">
                <img src={s3} onClick={() => {cacher(b,a,d); afficher(c)}}/>
                <h3>Accessoire</h3>
            </article>
            <article class="famille categ" id="famille">
                <img src={s4} onClick={() => {cacher(b,c,a); afficher(d)}}/>
                <h3>éléctronique</h3>
            </article>
        </div>
    </section>

    
     
    <section class="cont" id="cont">
        
        <h2 class="para">Les millieures articles pour vous</h2>
        <div class="boxe">

{product.map(products=>{
return(
<article>
<img src={products.image} alt='imag' className='imgs'/>
<h3 className='g'>title:
{products.title}</h3>
<h3>Prix :{products.price}</h3>
 <NavLink to={`/products/${product.id}`}>
 <button>acheter</button>
 </NavLink>
 </article>

)
}
)}

</div>

       
            </section>
    <section class="cont" id="cont1">
        
        <h2 class="para">Les millieures articles pour vous</h2>
        <div class="boxe">

{prod.map(products=>{
return(
<article >
<img src={products.image} alt='imag' className='imgs'/>
<h3 className='g'>title:
{products.title}</h3>
<h3>Prix :{products.price}</h3>
<p  className='g'>description:{products.description}</p>
 <p>category:{products.category}</p>
 <NavLink to={`/products/${product.id}`}>
 <button>acheter</button>
 </NavLink>
 </article>

)
}
)}

</div>

    
            </section>
    <section class="cont" id="cont2">
        
        <h2 class="para">Les millieures articles pour vous</h2>
        <div class="boxe">

{prod1.map(products=>{
return(
<article  key={product.id}>
<img src={products.image} alt='imag' className='imgs'/>
<h3 className='g'>title:
{products.title}</h3>
<h3>Prix :{products.price}</h3>
<p  className='g'>description:{products.description}</p>
 <p>category:{products.category}</p>
 <NavLink to={`/products/${product.id}`}>
 <button>acheter</button>
 </NavLink>
 </article>

)
}
)}

</div>

       
            </section>
    <section class="cont" id="cont3">
        
        <h2 class="para">Les millieures articles pour vous</h2>
        <div class="boxe">

{prod2.map(products=>{
return(
<article >
<img src={products.image} alt='imag' className='imgs'/>
<h3 className='g'>title:
{products.title}</h3>
<h3>Prix :{products.price}</h3>
<p  className='g'>description:{products.description}</p>
 <p>category:{products.category}</p>
 <NavLink to={`/products/${product.id}`}>
 <button>acheter</button>
 </NavLink>
 </article>

)
}
)}

</div>

       
            </section>


   
</div>
    );
   
}



export default Categorie;