/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialUiState = {
	errorMsg: null,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState: initialUiState,
	reducers: {
		setErrorMsg(state, action) {
			state.errorMsg = action.payload;
		},

		resetErrorMsg(state) {
			state.errorMsg = null;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice;
