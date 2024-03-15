import React from 'react';
import logo from "../images/Apple.jpg"

function Navbar() {
    return (
        <div>
    <nav>
    <ul>
      <li> <img src={logo} alt="logo"/></li>
      <li>Store</li>
      <li>Mac</li>
      <li>iPad</li>
      <li>iPhone</li>
      <li>Watch</li>
      <li>Airpods</li>
      <li>TV & Home</li>
      <li>Entertainment</li>
      <li>Accessories</li>
      <li>Support</li>

        <button class="icon-button" onClick="#"><i class="fa-solid fa-magnifying-glass fa-sm"></i></button>
        <button class="icon-button" onClick="#"><i class="fa-solid fa-cart-shopping fa-sm"></i></button>
       </ul>
       </nav>
       <div className='offers'>
      <p>Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit Cards.* Plus No Cost EMI from most leading banks <a href="#">Shop now > </a></p>
      
    </div>
    </div>
   
    )
}

export default Navbar;