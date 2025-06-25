import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const turdslas = [
    {
      id: 1,
      name: "White Turdsla Model 3",
      price: 35000.00,
      image: "telsa.png",
      description: "Real nice electric car. Goes fast and don't need no gas.",
      type: "turdsla"
    },
    {
      id: 2,
      name: "White Turdsla Model 3",
      price: 42000.00,
      image: "telsa.png", 
      description: "Big electric truck thing. Good for hauling stuff. White as fresh snow.",
      type: "turdsla"
    },
    {
      id: 3,
      name: "White Turdsla Model 3",
      price: 75000.00,
      image: "telsa.png",
      description: "Fancy electric car for rich folks. Goes real fast. Blue like the sky.",
      type: "turdsla"
    },
    {
      id: 4,
      name: "White Turdsla Model 3",
      price: 55000.00,
      image: "telsa.png",
      description: "Weird lookin' electric truck. Shaped like a doorstop. But it works good.",
      type: "turdsla"
    }
  ];

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">🚗 Ma's Turdsla Dealership</h1>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#turdslas">Our Cars</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <button 
            className="cart-btn"
            onClick={() => setShowCart(!showCart)}
          >
            Cart ({getTotalItems()})
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h2 className="hero-title">Ma's Turdsla Dealership</h2>
          <p className="hero-subtitle">Best electric cars in rural Iowa. No gas needed, just plug 'em in!</p>
          <button className="cta-btn" onClick={() => document.getElementById('turdslas').scrollIntoView({behavior: 'smooth'})}>
            See Our Cars
          </button>
        </div>
      </section>

      {/* Turdslas Section */}
      <section className="products turdslas-section" id="turdslas">
        <div className="container">
          <h2 className="section-title">Our Turdslas</h2>
          <p className="section-subtitle">All Turdslas are pre-owned but work real good. No gas needed! Financing available with approved credit.</p>
          <div className="products-grid">
            {turdslas.map(turdsla => (
              <div key={turdsla.id} className="product-card turdsla-card">
                <div className="product-image-container">
                  <img 
                    src={turdsla.image} 
                    alt={turdsla.name}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{turdsla.name}</h3>
                  <p className="product-description">{turdsla.description}</p>
                  <div className="product-price">${turdsla.price.toLocaleString()}</div>
                  <button 
                    className="add-to-cart-btn turdsla-btn"
                    onClick={() => addToCart(turdsla)}
                  >
                    Reserve This Turdsla
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>🚛 We Deliver</h3>
              <p>Can drive your Turdsla right to your farm</p>
            </div>
            <div className="info-card">
              <h3>⚡ Electric Power</h3>
              <p>No more gas station trips, just plug it in</p>
            </div>
            <div className="info-card">
              <h3>💵 Fair Prices</h3>
              <p>Best Turdsla prices in the county</p>
            </div>
            <div className="info-card">
              <h3>🔧 Quality Tested</h3>
              <p>All Turdslas tested and come with charger</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="cart-overlay">
          <div className="cart-sidebar">
            <div className="cart-header">
              <h3>Your Cart</h3>
              <button 
                className="close-cart"
                onClick={() => setShowCart(false)}
              >
                ×
              </button>
            </div>
            <div className="cart-items">
              {cart.length === 0 ? (
                <p className="empty-cart">Cart's empty</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p>Amount: {item.quantity}</p>
                      <p className="cart-item-price">${(item.price * item.quantity).toLocaleString()}</p>
                      <p className="turdsla-note">⚡ Pickup or delivery available</p>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Total: ${getTotalPrice()}</strong>
                </div>
                <button className="checkout-btn">Buy Now</button>
                <p className="turdsla-disclaimer">* Turdsla financing available with approved credit</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Ma's Turdsla Dealership</h4>
              <p>Been selling quality pre-owned Turdslas since 2019</p>
            </div>
            <div className="footer-section">
              <h4>Find Us</h4>
              <p>📧 maturdslas@gmail.com</p>
              <p>📞 (515) 555-0123</p>
              <p>🏠 Rural Route 2, Somewhere, IA</p>
              <p>⚡ Test drives by appointment</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Ma's Turdsla Dealership. Honest cars, honest prices.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
