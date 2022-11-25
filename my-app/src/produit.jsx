import React, { useEffect, useState } from 'react';
import axios from 'axios';
import s4 from './user.png';




function Produit() {
    const cartSidebar = document.getElementById("cart-sidebar");
    const affich= () =>{
        cartSidebar.className="show";
        alert("m2");
    };
    const [product,setproduct]=useState([])
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/carts/7")
       .then((res)=>{setproduct(res.data)})
      },[]);   
  return (
    <header>
        {/* <div class="icons">
                
                <button id="connect-btn">
                    <img src={s4} class="far" />
                </button>
                
            </div> */}
    

   
    <section id="cart-sidebar" className="cart-sidebar">
        
        
        <div className="cart-header-padding">
            <div className="cart-header">
                <p>
                    <span className="title">cart</span> <span className="items">(1 item)</span>
                </p>
                <button id="close-btn">
                    <i className="fas fa-window-close"></i>
                </button>
            </div>
        </div>
        
        <div className="cart-products">
        {/* {product.map(products=>{
        return(
            <div className="product">
                <div className="details">
                    <img src="images/womenThing5.jpeg" alt="Des lunettes de soleil" className="product-img" />
                    <div className="product-info">
                        <p className="product-name">Des lunettes de soleil</p>
                        <p className="product-price">{products.quantity}</p>
                    </div>
                </div>
                <div className="controls">
                    <div className="quantity">
                        <button className="decrement-btn">
                            <i className="fas fa-minus"></i>
                        </button>
                        <p className="quantity-num">{products.quantity}</p>
                        <button className="increment-btn">
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                    <button className="trash-btn">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
            
           



)
}
)
} */}
</div>

            <div className="cart-footer">
            <div className="total">
                <p>total</p>
                <p>$179.96</p>
            </div>
            <a href="#" className="checkout-link">checkout</a>
        </div>
    </section>
   
    </header>
    );
   
}



export default Produit;