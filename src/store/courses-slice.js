/* eslint-disable no-param-reassign */
const { createSlice } = require('@reduxjs/toolkit');

const coursesInitialState = {
	courses: [],
	requestState: {
		message: null,
		hasError: false,
	},
};

const coursesSlice = createSlice({
	name: 'courses',
	initialState: coursesInitialState,
	reducers: {
		setCourses(state, action) {
			state.courses = action.payload;
		},
		setRequestState(state, action) {
			const { message, hasError } = action.payload;

			state.requestState.message = message;
			state.requestState.hasError = hasError || state.requestState.hasError;
		},
		/* Error is not set as null because user needs to reload page to 
		   make another request without error
		*/
		resetRequestState(state) {
			state.requestState.message = null;
		},
	},
});

export const coursesActions = coursesSlice.actions;

export default coursesSlice;
