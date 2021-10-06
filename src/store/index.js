import cartSlice from './cart-slice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
	reducer: { cart: cartSlice.reducer },
});

export default store;
