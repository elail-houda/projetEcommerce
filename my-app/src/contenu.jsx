

import Produit from './produit.jsx';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './contenu.css';

function Contenu() {
    const [product,setproduct]=useState([])
useEffect(()=>{
  axios.get('https://fakestoreapi.com/products?limit=20')
   .then((res)=>{setproduct(res.data)})
  },[]);
  return (
    <div className='contain'>
        <Produit/>
        <section class="dubit">
        <div class="first"></div>
        <div class="ad">
            <h4>JUSQU'À 50% DE RÉDUCTION</h4>
            <h2>meilleure collection de mode <br></br> de tous les temps</h2>
            <p>Trouvez votre bonheur la nouvelle collection de vêtements signés<br></br> Soyez votre propre
                style<br></br>Shopper les nouveaux</p>
            <span class="firstad"></span><button class="btn">ACHETEZ MAINTENANT!</button>
        </div>
    </section>
    <section class="content">
        <h1>Article tendance</h1>
    
        <div class="boxe">
{product.map(products=>{
return(
<article >
<img src={products.image} alt='imag' className='imgs'/>
<h3 className='g'>title:
{products.title}</h3>
<h3>Prix :{products.price}</h3>
<p  className='g'>description:{products.description}</p>
 <p>category:{products.category}</p>
 <button>acheter</button>
 </article>

)
}
)}

</div>
</section>
</div>
  
    );
}


export default Contenu;