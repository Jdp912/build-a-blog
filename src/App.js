import React from 'react';
import './App.css';
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
import Example from './components/example.js'
import Card from './components/card.js'
import Description from './components/description.js'
import Image from './components/image.js'

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <div class="container">
        <h1 class="section-title"> <Example/> </h1>
        <ul class="cards">
          <li class="cards-item quarter">
            <div class="card">
              <div class="card-content">
                <div class="card-image"> <Image/> </div>
                <div class="card-container">
                  <div class="card-title"> <Card/> </div>
                  <p class="card-text"> <Description/> </p>
                  <div class="btn-block">
                    <button class="btn third">
                      <span role="img" aria-label="Add to Album">➕</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Email">✉️</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Favorite">⭐</span>
                    </button>
                  </div>
                </div>
                <div class="btn-block">
                  <button class="btn full">
                    <span role="img" aria-label="Comment">💬</span> 
                    <span class="small">[100]</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
