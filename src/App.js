// import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';

class App extends React.Component {
  render () {
    return (
      <div className="App">

<header>
  <nav className= "nav"> 
  <ul> 
    <li><a href="e_com_project/index.html">Home</a></li>
    <li><a href="./product.html">Discover </a></li>
    <li><a href="./contact.html">Contact</a></li>
  </ul>
   </nav>
  </header>
  
  
  <main className="hero-image">
   <div className="hero-text">
      <h1> Yankee Candles </h1>
    <p> Handcrafted Candles For Every Season </p>
    </div>
   </main>
 
  
  

  
  
  <article className="card-container">
  <h6> Homepage section </h6>
    <section class="card"> 
      <h2> About Us </h2>
    <img className="candles" alt="fall large jar candles" src="https://cf.ltkcdn.net/candles/images/orig/262695-1600x1030-best-candle-making-books-all-levels.jpg"/> 
      <p className="facts"> We are a candle company that only creates fragrances per current season. We believe that each scent in the household should radiate whatever season is taking place. Please let us know if we can be of service!</p>
    </section>

    <section className="card"> 
      <h2> Fall is here! </h2>
    <img className="candles" alt="fall large jar candles" src="https://bloximages.chicago2.vip.townnews.com/ahwatukee.com/content/tncms/assets/v3/editorial/5/4b/54bafcce-7cfb-5f1a-9323-42491439787e/502ed919001fc.image.jpg"/> 
      <p className="facts"> We are now selling our fall collection. Enjoy fragrances full of evergreens, spices, and baked treats. A scent for every occasion and a perfect gift for the seasons! </p>
    </section>
    
  </article>


        




      </div>
    );
  }
}

export default App;
