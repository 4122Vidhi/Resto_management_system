import React from 'react'

function dashboard() {
  return (
    <div>
      
    <div className="index">
    <div className="container-fluid d-flex p-0">
    {/* Main */}
    <div className="main-content flex-grow-1">
      <h3>Restaurant POS</h3>
      <p className="text-secondary">Sunday, 26 March 2023</p>

      {/* Category Tabs */}
      <div className="container mt-5">
        <div className="filter-right-group">
        <div className="filter-bar  ">
          
        <div className="d-flex align-items-center">
            {/* <div className="filter-label">Explore Menu</div> */}
            <div className="category-tabs filter-right-group">
            <button className="category-tab">All</button>
            <button className="category-tab active">Main Course <span>24</span></button>
            <button className="category-tab">Soup</button>
            <button className="category-tab">Salads</button>
            <button className="category-tab">Drinks</button>
            <button className="category-tab">Appetizer</button>
            <button className="category-tab">Dessert</button>
            </div>
        </div>
        <div className="filter-actions">
            <button className="icon-button">🔍</button>
            <button className="icon-button">⚙️</button>
        </div>
        </div>
        </div>
    </div>

      {/* Dishes */}

      <div className="container">
      <div className="row" id="dish-list">
        {/* JS Appended Cards Here */}
      </div>
</div>


      {/* <div className="dish-card" role="group" aria-label="Tuna Boiled Eggs dish card">
  <div className="image-wrapper">
    <img src="https://placehold.co/100x100/png?text=Tuna+Boiled+Eggs" alt="Overhead view of a white plate with tuna boiled eggs garnished with herbs on dark table setting" />
  </div>
  <div className="content">
    <span className="subtitle">Main Course</span>
    <div className="title-price">
      <h2 className="title">Tuna Boiled Eggs</h2>
      <span className="price">$12.50</span>
    </div>
    <div className="controls">
      <div className="qty-control" aria-label="Quantity controls">
        <button className="qty-btn" aria-label="Decrease quantity" id="decreaseBtn">−</button>
        <span className="qty-number" id="quantity" aria-live="polite" aria-atomic="true">0</span>
        <button className="qty-btn" aria-label="Increase quantity" id="increaseBtn">+</button>
      </div>
      <button className="add-btn" aria-label="Add to cart">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
        </svg>
      </button>
    </div>
  </div>
</div> */}


        {/* Dishes injected by JS */}
      </div>
    </div>

    {/* Cart */}
    <div className="cart">
      <h5>Orders #84621</h5>
      <div className=" mb-3 btn-category">
        <button className="btn btn-category-tab active">Dine In</button>
        <button className="btn btn-category-tab">To Go</button>
        <button className="btn btn-category-tab">Delivery</button>
      </div>
      
      <div id="order-items">
        {/* Order items will be added here */}
      </div>

      <hr className="text-secondary"/>
      <p>Discount: <span className="float-end">Rs.0.0</span></p>
      <p>Sub Total: <span className="float-end" id="subtotal">Rs.0.00</span></p>

      <button className="btn btn-submit mt-3">Continue to Payment</button>
    </div>
  </div>

    </div>
  )
}

export default dashboard