
    const dishes = [
      { name: "Pizza", price: 250, available: 30, img: "./pizza.jpg" },
      { name: "Burger", price: 200, available: 25, img: "../images/burger.webp" },
      { name: "French Fries", price: 130, available: 20, img: "../images/frenchfries.jpg" },
      { name: "Prawns Wrapped In Noodles", price: 2.82, available: 35, img: "https://via.placeholder.com/120?text=Prawns" },
      { name: "Spicy Ginger Szechuan Beef", price: 5.63, available: 15, img: "https://via.placeholder.com/120?text=Beef" },
      { name: "Sushi Spicy Tuna Roll", price: 3.34, available: 20, img: "https://via.placeholder.com/120?text=Sushi" }
    ];

    let subtotal = 0;

    $(document).ready(function () {
      dishes.forEach((dish, index) => {
        $('#dish-list').append(`
          
        <div class="col-md-4 mb-4">
          <div class="dish-card">
            <div class="image-wrapper">
              <img src="${dish.img}" alt="${dish.name}" />
            </div>
            <div class="content">
              <span class="subtitle">Main Course</span>
              <div class="title-price">
                <h2 class="title">${dish.name}</h2>
                <span class="price">Rs.${dish.price.toFixed(2)}</span>
              </div>
              <div class="controls">
                <div class="qty-control">
                  <button class="qty-btn decrease">−</button>
                  <span class="qty-number">0</span>
                  <button class="qty-btn increase">+</button>
                </div>
                <button class="add-btn add-cart" 
                data-id="${index}" 
                data-img="${dish.img}"
                data-name="${dish.name}"
                data-price="${dish.price.toFixed(2)}"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="20" height="20">
                    <path fill="white" d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      `);

      });

    
      $(document).on('click', '.remove-btn', function () {
        const priceText = $(this).closest('.order-item').find('small').text();
        const price = parseFloat(priceText.replace('$', ''));
        subtotal -= price;
        $('#subtotal').text(`$${subtotal.toFixed(2)}`);
        $(this).closest('.order-item').remove();
      });
    });

    $(document).on('click', '.add-cart', function (){
      const dish = dishes[$(this).data('id')];
      const price = parseFloat($(this).data('price'));
      const name = $(this).data('name');
      const img = $(this).data('img');
      $('#order-items').append(`
          
        <div class="add-item-sec">
          <div class="dish-card">
            <div class="content">
              <span class="subtitle">Main Course</span>
              <div class="title-price">
                <h2 class="title">${name}</h2>
                <span class="price">$${price}</span>
              </div>
              <div class="controls">
                <div class="qty-control">
                  <button class="qty-btn decrease">−</button>
                  <span class="qty-number">0</span>
                  <button class="qty-btn increase">+</button>
                </div>
                <button class="btn btn-sm remove-btn">🗑️</button>
              </div>
              
            </div>
          </div>
        </div>
      `);
    });

    
  