import React from 'react'
import './ProductGrid.css' // your grid/card CSS

// Helper for stars
const RatingStars = ({ rating }) => {
  const stars = []
  const fullCount = Math.floor(rating)
  const remainder = rating - fullCount
  const hasHalf = remainder >= 0.5
  const totalStars = 5

  for (let i = 0; i < totalStars; i++) {
    if (i < fullCount) {
      stars.push(<span key={i} className="star full">★</span>)
    } else if (i === fullCount && hasHalf) {
      stars.push(<span key={i} className="star half">★</span>)
    } else {
      stars.push(<span key={i} className="star empty">★</span>)
    }
  }
  return <>{stars}</>
}

/*
 items: array of { id, imageUrl, title, price, rating?, reviewCount?, badge? }
 onAddToCart: function(item)
 onProductClick: function(item)
*/
const ProductGrid = ({ items = [], onAddToCart, onProductClick }) => {
  return (
    <div className="grid-container">
      {items.map(item => (
        <div key={item.id} className="card-wrapper">
          <div
            className="card"
            onClick={() => {
              if (onProductClick) {
                onProductClick(item)
              }
            }}
          >
            {item.badge && <div className="card-badge">{item.badge}</div>}
            <div className="card-image-container">
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.title} />
              ) : (
                <div style={{ color: '#777', fontSize: '0.9rem' }}>
                  No Image
                </div>
              )}
            </div>
            <div className="card-body">
              <div className="card-title">{item.title}</div>
              {item.rating != null && (
                <div className="card-rating">
                  <RatingStars rating={item.rating} />
                  {item.reviewCount != null && (
                    <span className="review-count">
                      ({item.reviewCount})
                    </span>
                  )}
                </div>
              )}
              {item.price != null && (
                <div className="card-price">
                  ${
                    typeof item.price === 'number'
                      ? item.price.toFixed(2)
                      : item.price
                  }
                </div>
              )}
              <div className="card-button-container">
                <button
                  className="card-button"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (onAddToCart) {
                      onAddToCart(item)
                    }
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid
