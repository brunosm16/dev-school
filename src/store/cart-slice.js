/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { findExistingItemById, removeItemById } from '../utils/utils';

const cartInitialState = {
	items: [],
	totalPrice: 0,
	totalQuantity: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: cartInitialState,
	reducers: {
		addItem(state, action) {
			const currItems = state.items;

			const inputItem = action.payload;

			const existingItem = findExistingItemById(currItems, inputItem.id);

			/* If item already exists only increase item amount,
               otherwise push item in current items(currItems)
             */
			if (existingItem) {
				existingItem.itemQuantity += 1;
				existingItem.totalItemPrice += existingItem.price;
			} else {
				currItems.push({
					id: inputItem.id,
					name: inputItem.name,
					price: inputItem.price,
					itemQuantity: 1,
					totalItemPrice: inputItem.price,
					imgUrl: inputItem.imgUrl,
				});
			}

			state.totalPrice += inputItem.price;
			state.totalQuantity += 1;
		},

		removeItem(state, action) {
			const itemId = action.payload;
			const currItems = state.items;

			const itemToDelete = findExistingItemById(currItems, itemId);

			/* if there is only one quantity of the item it is deleted, otherwise
               item quantity is decreased
             */
			if (itemToDelete && itemToDelete.itemQuantity === 1) {
				state.items = removeItemById(currItems, itemId);
			} else {
				itemToDelete.itemQuantity -= 1;
				itemToDelete.totalItemPrice -= itemToDelete.price;
			}

			state.totalPrice -= itemToDelete.price;
			state.totalQuantity -= 1;
		},

		deleteItem(state, action) {
			const itemId = action.payload;
			const currItems = state.items;

			const itemToDelete = findExistingItemById(currItems, itemId);

			state.items = removeItemById(currItems, itemId);
			state.totalPrice -= itemToDelete.totalItemPrice;
			state.totalQuantity -= itemToDelete.itemQuantity;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
