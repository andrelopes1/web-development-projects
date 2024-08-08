// cartReducer.js
const initialState = {
  cart: []  // Ensure cart is an array
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item is already in the cart
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        // If it is, increment the quantity
        const newCart = [...state.cart];
        newCart[existingItemIndex].quantity += 1;
        return {
          ...state,
          cart: newCart
        };
      } else {
        // Otherwise, add the new item to the cart
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    case 'INCREMENT_ITEM':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    case 'DECREMENT_ITEM':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0) // Remove item if quantity is 0
      };
    default:
      return state;
  }
};

export default cartReducer;




