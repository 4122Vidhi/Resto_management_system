import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Menu() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch menu items when component mounts
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("http://localhost:8080/getmenu");
        const data = await res.json();
        if (data.success) {
          setDishes(data.items);
        }
      } catch (err) {
        console.error("Error fetching menu:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    < >
      <div className="main-content flex-grow-1">
        <div className=" d-flex justify-content-between">
          <div>
            <h3>Food Menu</h3>
          </div>
          <div>
            <a href="./addmenu">
              <button className="btn-primary">Add Item</button>
            </a>
          </div>
        </div>
        <div>
          {/* Category Tabs */}
          <div className="container mt-5">
            <div className="filter-right-group">
              <div className="filter-bar">
                <div className="d-flex align-items-center">
                  <div className="category-tabs filter-right-group">
                    <button className="category-tab active">All</button>
                    <button className="category-tab">Main Course</button>
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
          <div className="container mt-4">
            {loading ? (
              <p>Loading menu...</p>
            ) : dishes.length === 0 ? (
              <p>No menu items available</p>
            ) : (
              <div className="row dish-card-gap" id="dish-list">
                {dishes.map((dish) => (
                  <div className="col-md-4 mb-4" key={dish._id}>
                    <div className="dish-card">
                      <div className="image-wrapper">
                        <img
                          src={dish.image || "https://placehold.co/100x100"}
                          alt={dish.name}
                          width="100"
                          height="100"
                        />
                      </div>
                      <div className="content">
                        <span className="subtitle">{dish.category}</span>
                        <div className="title-price">
                          <h2 className="title">{dish.name}</h2>
                          <span className="price">{dish.price}</span>
                        </div>
                        <button className="add-btn-edit add-cart">              
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"/>
                          </svg>
                        </button>
                        <button className="add-btn add-cart" >              
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>


        </div>

      </div>
    </>
  );
}

export default Menu;
