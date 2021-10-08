/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialUiState = {
	notification: null,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState: initialUiState,
	reducers: {
		setNotification(state, action) {
			const notification = action.payload;
			state.notification = {
				msg: notification.msg,
				isError: notification?.isError || false,
				isLoading: notification.isLoading || false,
			};
		},
		resetNotification(state) {
			state.notification = null;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice;
