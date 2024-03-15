import React from 'react';
import hero2 from "../images/hero2.jpg"
import apple2 from "../images/apple2.jpg"


function Hero2() {
    return(
<div className='hero-2'>
<div className='hero-image'>
  <img src={hero2} alt="logo" />
</div>
<div className='hero-content'>
<h1><img src={apple2} alt="logo"/> Macbook Pro</h1>
<p>Mind-blowing. Head-turning.</p>
<div className='mac-links'>
  <a href="https://www.apple.com/in/macbook-pro/">Learn more {'>'}</a>
  <a href="https://www.apple.com/in/shop/buy-mac/macbook-pro">Buy {'>'}</a>
</div>
</div>
</div>
    )
}

export default Hero2;