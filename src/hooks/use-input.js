import { useReducer } from 'react';
import inputReducer from '../reducers/input-reducer';

const defaultInputState = {
	value: '',
	isTouched: false,
};

const UseInput = (validateInput) => {
	const [inputState, dispatch] = useReducer(inputReducer, defaultInputState);

	const inputIsValid = validateInput(inputState.value);
	const inputHasError = !inputIsValid && inputState.isTouched;

	const inputChangeHandler = (event) => {
		dispatch({ type: 'INPUT_USER', value: event.target.value });
	};

	const inputBlurHandler = () => {
		dispatch({ type: 'INPUT_BLUR' });
	};

	const inputResetHandler = () => {
		dispatch({ type: 'INPUT_RESET' });
	};

	return {
		value: inputState.value,
		inputIsValid,
		inputHasError,
		inputChangeHandler,
		inputBlurHandler,
		inputResetHandler,
	};
};

export default UseInput;
