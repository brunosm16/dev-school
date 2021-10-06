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

			const { id, name, unitPrice, totalItemPrice } = action.payload;

			const existingItem = findExistingItemById(currItems, id);

			/* If item already exists only increase item amount,
               otherwise push item in current items(currItems)
             */
			if (existingItem) {
				existingItem.itemQuantity += 1;
				existingItem.totalItemPrice += existingItem.unitPrice;
			} else {
				currItems.push({
					id,
					name,
					unitPrice,
					itemQuantity: 1,
					totalItemPrice,
				});
			}

			state.totalPrice += unitPrice;
			state.totalQuantity += 1;
		},

		removeItem(state, action) {
			const itemId = action.payload;
			let currItems = state.items;

			const itemToDelete = findExistingItemById(state.items, currItems);

			/* if there is only one quantity of the item it is deleted, otherwise
               item quantity is decreased
             */
			if (itemToDelete.itemQuantity === 1) {
				currItems = removeItemById(currItems, itemId);
			} else {
				itemToDelete.itemQuantity -= 1;
				itemToDelete.totalItemPrice -= itemToDelete.unitPrice;
			}

			state.totalPrice -= itemToDelete.unitPrice;
			state.totalQuantity -= 1;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
