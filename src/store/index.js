import cartSlice from './cart-slice';
import coursesSlice from './courses-slice';
import uiSlice from './ui-slice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		ui: uiSlice.reducer,
		courses: coursesSlice.reducer,
	},
});

export default store;
