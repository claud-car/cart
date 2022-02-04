// export const createCardProduct = (name, description, price, stock, id) => {
//   const isInStock = Boolean(stock);
//   return `
//     <div class="product__card">
//     <div class="product__card-container">
//       <div class="product__image-container">
//         <img class="product__image" src="" alt="">
//       </div>
//       <h2 class= "product__name">${name}</h2>
//       <p class="product__description">${description}</p>
//       <p class="product__price">€ ${price}</p>
//       <p class = "product__stock">Quantity:
//         ${isInStock ? stock : "Out Of Stock"}
//       </p>
//     </div>
//       <button class="product__button js-product-button" data-id="${id}">ADD TO CART</button>
//     </div>
//     `;
// };

// export const createCartItem = (name, price, id) => {
//   return `
//       <div class="dropdown__item-card">
//         <div class="dropdown__img-wrapper"></div>
//         <div class="dropdown__item-wrapper">
//           <p class="dropdown__item-name">${name}</p>
//           <p class="dropdown__item-price">€ ${price}</p>
//           <p>Quantity: 1</p>
//         </div>
//         <div class="dropdown__item-remove-container js-remove-from-cart" data-cart="${id}">
//           <button class="dropdown__item-remove">X</button>
//         </div>
//       </div>

//     `;
// };

// export const createCartCounter = (quantity) => {
//   return `
//       <div class="navbar__quantity-value">${quantity}</div>
//     `;
// };

// export const createTotal = (total) => {
//   return `
//       <div class="navbar__cart-total-wrapper" id="js-cart-total">
//         <p>Totale: </p>
//         <p class="navbar__cart-total">€ ${total}</p>
//       </div>
//     `;
// };
