// src/App.jsx
import React, { useState, useEffect } from 'react'
import ProductGrid from './components/ProductGrid'
import './App.css'

export default function App() {
  // === State ===
  const [cartItems, setCartItems] = useState([])
  const [popupVisible, setPopupVisible] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const [fullscreenImageUrl, setFullscreenImageUrl] = useState(null)
  const [showCart, setShowCart] = useState(false)

  // === Handlers ===
  const handleAddToCart = item => {
    setCartItems(prev => [...prev, item])
    setPopupVisible(true)
    setIsFading(false)
  }

  useEffect(() => {
    if (!popupVisible) return
    const t1 = setTimeout(() => setIsFading(true), 1500)
    const t2 = setTimeout(() => {
      setPopupVisible(false)
      setIsFading(false)
    }, 3500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [popupVisible])

  const handleProductClick = item => {
    setSelectedItem(item)
    setModalImageIndex(0)
  }
  const handleCloseModal = () => setSelectedItem(null)

  const handleImageClick = url => setFullscreenImageUrl(url)
  const handleCloseFullscreen = () => setFullscreenImageUrl(null)

  const handleModalMainImageClick = () => {
    setFullscreenImageUrl(selectedItem.imageUrls[modalImageIndex])
  }
  const handleThumbnailClick = idx => setModalImageIndex(idx)

  const handleSearch = q => console.log('Search for:', q)

  const handleCartClick = () => setShowCart(true)
  const handleCloseCart = () => setShowCart(false)
  const handleRemoveFromCart = id => {
    setCartItems(prev => prev.filter(i => i.id !== id))
  }

  // === Data (15 items, reviewCount=2, no badges) ===
  const items = [
    { id:1, imageUrl:'/images/mens_wash.png', imageUrls:['/images/mens_wash.png'], title:"Men's Body Wash: Fresh Scent Ketchup", price:999.99, rating:4.5, reviewCount:3, reviews:[{id:1,reviewer:'Alice',rating:5,text:'Unique scent but I love how clean it leaves me.'},{id:2,reviewer:'Bob',rating:4,text:'Cleans well. Smell is odd but fun.'}] },
    { id:2, imageUrl:'/images/mens_wash.png', imageUrls:['/images/mens_wash.png'], title:"Men's Body Wash: Citrus Burst Ketchup", price:999.99, rating:4.0, reviewCount:2, reviews:[{id:1,reviewer:'Dan',rating:4,text:'Good lather. Citrus note mixed with ketchup is weird but works.'},{id:2,reviewer:'Eva',rating:4,text:'My skin felt refreshed. The scent is a conversation-starter.'}] },
    { id:3, imageUrl:'/images/mens_wash.png', imageUrls:['/images/mens_wash.png'], title:"Men's Body Wash: Ocean Breeze Ketchup", price:999.99, rating:3.5, reviewCount:2, reviews:[{id:1,reviewer:'Frank',rating:3,text:'Cleaned okay but scent was too subtle for me.'},{id:2,reviewer:'Grace',rating:4,text:'Lather is nice. Scent is mild but interesting.'}] },
    { id:4, imageUrl:'/images/mens_wash.png', imageUrls:['/images/mens_wash.png'], title:"Men's Body Wash: Unscented Ketchup", price:999.99, rating:4.2, reviewCount:2, reviews:[{id:1,reviewer:'Henry',rating:4,text:'No scent but cleans well.'},{id:2,reviewer:'Ivy',rating:4.5,text:'Perfect if you dislike fragrances.'}] },
    { id:5, imageUrl:'/images/mens_wash.png', imageUrls:['/images/mens_wash.png'], title:"Men's Body Wash: Sport Edition Ketchup", price:999.99, rating:4.7, reviewCount:2, reviews:[{id:1,reviewer:'Jack',rating:5,text:'Great after workout. Smells weird but refreshing.'},{id:2,reviewer:'Kate',rating:4.5,text:'Nice lather and cooling feeling.'}] },
    { id:6, imageUrl:'/images/mens_wash.png', imageUrls:['/images/mens_wash.png'], title:"Men's Body Wash: Charcoal Clean Ketchup", price:999.99, rating:4.3, reviewCount:2, reviews:[{id:1,reviewer:'Leo',rating:4,text:'Charcoal helps exfoliate. Scent is unexpected.'},{id:2,reviewer:'Mona',rating:4.5,text:'Skin feels smooth. Packaging is cool.'}] },
    { id:7, imageUrl:'/images/mens_wash.png', imageUrls:['/images/mens_wash.png'], title:"Men's Body Wash: Mint Refresh Ketchup", price:999.99, rating:4.6, reviewCount:2, reviews:[{id:1,reviewer:'Nate',rating:5,text:'Mint note is strong. Cleansing is good.'},{id:2,reviewer:'Olivia',rating:4,text:'Refreshing but the ketchup hint is odd.'}] },
    { id:8, imageUrl:'/images/mens_wash.png', imageUrls:['/images/mens_wash.png'], title:"Men's Body Wash: Aloe Vera Ketchup", price:999.99, rating:4.1, reviewCount:2, reviews:[{id:1,reviewer:'Paul',rating:4,text:'Gentle on skin. Scent is mild.'},{id:2,reviewer:'Quinn',rating:4.2,text:'Soothing but unusual aroma.'}] },
    { id:9, imageUrl:'/images/mens_wash.png', imageUrls:['/images/mens_wash.png'], title:"Men's Body Wash: Wood & Spice Ketchup", price:999.99, rating:4.4, reviewCount:2, reviews:[{id:1,reviewer:'Ryan',rating:4,text:'Warm woody scent. Unique.'},{id:2,reviewer:'Sara',rating:4.5,text:'Nice after shower. Packaging stands out.'}] },
    { id:10,imageUrl:'/images/mens_wash.png',imageUrls:['/images/mens_wash.png'],title:"Men's Body Wash: Sport Fresh Ketchup",price:999.99,rating:4.5,reviewCount:2,reviews:[{id:1,reviewer:'Tom',rating:5,text:'Perfect post-game shower.'},{id:2,reviewer:'Uma',rating:4,text:'Good lather and scent.'}]},
    { id:11,imageUrl:'/images/mens_wash.png',imageUrls:['/images/mens_wash.png'],title:"Men's Body Wash: Energy Boost Ketchup",price:999.99,rating:4.0,reviewCount:2,reviews:[{id:1,reviewer:'Vince',rating:4,text:'Wake-up feel is good.'},{id:2,reviewer:'Wendy',rating:4,text:'Deep clean as promised.'}]},
    { id:12,imageUrl:'/images/mens_wash.png',imageUrls:['/images/mens_wash.png'],title:"Men's Body Wash: Deep Clean Ketchup",price:999.99,rating:4.3,reviewCount:2,reviews:[{id:1,reviewer:'Xander',rating:4.5,text:'Skin feels refreshed.'},{id:2,reviewer:'Yara',rating:4,text:'Nice zing! Cleans well but a bit intense.'}]},
    { id:13,imageUrl:'/images/mens_wash.png',imageUrls:['/images/mens_wash.png'],title:"Men's Body Wash: Spicy Kick Ketchup",price:999.99,rating:4.2,reviewCount:2,reviews:[{id:1,reviewer:'Zack',rating:4.5,text:'Fun scent, surprising but works.'},{id:2,reviewer:'Amy',rating:4,text:'Sweet twist, cleans nicely.'}]},
    { id:14,imageUrl:'/images/mens_wash.png',imageUrls:['/images/mens_wash.png'],title:"Men's Body Wash: Berry Blast Ketchup",price:999.99,rating:4.1,reviewCount:2,reviews:[{id:1,reviewer:'Ben',rating:4.2,text:'Unique berry-ketchup combo, surprisingly refreshing.'},{id:2,reviewer:'Cara',rating:5,text:'Mint + citrus is cool, ketchup note subtle.'}]},
    { id:15,imageUrl:'/images/mens_wash.png',imageUrls:['/images/mens_wash.png'],title:"Men's Body Wash: Mint Citrus Ketchup",price:999.99,rating:4.4,reviewCount:2,reviews:[{id:1,reviewer:'Drew',rating:4,text:'Refreshing and cleans well.'},{id:2,reviewer:'Ethan',rating:5,text:'Perfect balance of mint and ketchup.'}]},
  ]

  // === Inline Header ===
  const Header = ({ onSearch, cartCount, onCartClick }) => {
    const submit = e => { e.preventDefault(); onSearch(e.target.searchInput.value) }
    return (
      <header className="app-header">
        <div className="header-left">
          <a href="/" className="logo-link">
            <img src="/images/logo.png" alt="Logo" className="logo-img" />
          </a>
          <span className="site-name">Heiniz</span>
        </div>
        <div className="header-center">
          <form className="search-form" onSubmit={submit}>
            <input name="searchInput" className="search-input" placeholder="Search Heiniz" />
            <button type="submit" className="search-button">🔍</button>
          </form>
        </div>
        <div className="header-right">
          <div className="nav-item"><span>Hello, Sign in</span><span>Account & Lists</span></div>
          <div className="nav-item"><span>Returns</span><span>& Orders</span></div>
          <div className="nav-item cart-item" onClick={onCartClick}>🛒<span className="cart-count">{cartCount}</span></div>
        </div>
      </header>
    )
  }

  // === Inline CartModal ===
  const CartModal = ({ items, onClose, onRemove }) => {
    const counts = {}
    items.forEach(i => counts[i.id] = (counts[i.id]||0)+1)
    const unique = [...new Set(items.map(i => i.id))].map(id => items.find(i => i.id===id))
    return (
      <div className="product-modal-overlay" onClick={onClose}>
        <div className="product-modal-content" onClick={e=>e.stopPropagation()}>
          <div className="product-modal-header">
            <div className="product-modal-title">Your Cart</div>
            <button className="product-modal-close" onClick={onClose}>×</button>
          </div>
          <div className="product-modal-body">
            {unique.length===0
              ? <div>Your cart is empty.</div>
              : unique.map(item=>(
                <div key={item.id} className="cart-row">
                  <img src={item.imageUrl} alt="" className="cart-img"/>
                  <div className="cart-info">
                    <div>{item.title}</div>
                    <div>${item.price.toFixed(2)}</div>
                    <div>Qty: {counts[item.id]}</div>
                  </div>
                  <button className="remove-btn" onClick={()=>onRemove(item.id)}>Remove</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header onSearch={handleSearch} cartCount={cartItems.length} onCartClick={handleCartClick} />

      <div className="content-container">
        {/* LEFT AD */}
        <div className="ad-sidebar">
          <img src="/images/blue_jay.png" alt="Blue Jay Ad" />
          <div className="ad-caption">Annoyed by your pesky dog named Ruger? Buy now the attacking Blue Jays!</div>
        </div>

        {/* MAIN CONTENT */}
        <div className="main-content">
          <ProductGrid
            items={items}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
            onImageClick={handleImageClick}
          />

          {popupVisible && (
            <div className={`popup-overlay${isFading?' fade-out':''}`}>
              <img src="/images/ronny_t.png" alt="Added" className="popup-image"/>
            </div>
          )}

          {/* DETAIL MODAL */}
          {selectedItem && (
            <div className="product-modal-overlay" onClick={handleCloseModal}>
              <div className="product-modal-content" onClick={e=>e.stopPropagation()}>
                <div className="product-modal-header">
                  <div className="product-modal-title">{selectedItem.title}</div>
                  <button className="product-modal-close" onClick={handleCloseModal}>×</button>
                </div>
                <div className="product-modal-body">
                  <div className="product-modal-top">
                    <div className="product-modal-image-container">
                      <img
                        src={selectedItem.imageUrls[modalImageIndex]}
                        alt={selectedItem.title}
                        onClick={handleModalMainImageClick}
                      />
                    </div>
                    <div className="product-modal-details">
                      <div className="product-modal-price">${selectedItem.price.toFixed(2)}</div>
                      <div className="product-modal-rating">
                        {Array.from({length:5}).map((_,i)=>{
                          const full = Math.floor(selectedItem.rating)
                          const half = selectedItem.rating-full>=0.5
                          if(i<full) return <span key={i} className="star full">★</span>
                          if(i===full&&half) return <span key={i} className="star half">★</span>
                          return <span key={i} className="star empty">★</span>
                        })}
                        <span style={{marginLeft:4,color:'#007185'}}>({selectedItem.reviewCount} reviews)</span>
                      </div>
                      <button className="card-button" onClick={()=>handleAddToCart(selectedItem)}>Add to Cart</button>
                    </div>
                  </div>
                  {selectedItem.imageUrls.length>1 && (
                    <div className="image-carousel">
                      {selectedItem.imageUrls.map((url,idx)=>(
                        <img
                          key={idx}
                          src={url}
                          alt=""
                          className={idx===modalImageIndex?'selected':''}
                          onClick={()=>handleThumbnailClick(idx)}
                        />
                      ))}
                    </div>
                  )}
                  <div className="product-modal-reviews">
                    <h3>Customer Reviews</h3>
                    {selectedItem.reviews.map(r=>(
                      <div key={r.id} className="product-modal-review-item">
                        <div className="product-modal-review-author">{r.reviewer}</div>
                        <div className="product-modal-review-rating">
                          {Array.from({length:5}).map((_,i)=>{
                            const full = Math.floor(r.rating)
                            const half = r.rating-full>=0.5
                            if(i<full) return <span key={i} className="star full">★</span>
                            if(i===full&&half) return <span key={i} className="star half">★</span>
                            return <span key={i} className="star empty">★</span>
                          })}
                        </div>
                        <div className="product-modal-review-text">{r.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {showCart && (
            <CartModal items={cartItems} onClose={handleCloseCart} onRemove={handleRemoveFromCart} />
          )}

          {fullscreenImageUrl && (
            <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
              <img src={fullscreenImageUrl} alt="Fullscreen" />
            </div>
          )}
        </div>

        {/* RIGHT AD */}
        <div className="ad-sidebar">
          <img src="/images/blue_jay.png" alt="Blue Jay Ad" />
          <div className="ad-caption">Annoyed by your pesky dog named Ruger? Buy now the attacking Blue Jays!</div>
        </div>
      </div>
    </div>
  )
}
