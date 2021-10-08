import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import UseInput from '../../hooks/use-input';
import {
	initDate,
	validateCardName,
	validateCardNumber,
	validateCVV,
} from '../../utils/utils';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import styles from './CheckoutForm.module.scss';

const CheckoutForm = ({ onConfirm }) => {
	const {
		value: nameValue,
		inputIsValid: nameIsValid,
		inputHasError: nameHasError,
		inputChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		inputResetHandler: nameResetHandler,
	} = UseInput(validateCardName);

	const {
		value: cardNumberValue,
		inputIsValid: cardNumberIsValid,
		inputHasError: cardNumberHasError,
		inputChangeHandler: cardNumberChangeHandler,
		inputBlurHandler: cardNumberBlurHandler,
		inputResetHandler: cardNumberResetHandler,
	} = UseInput(validateCardNumber);

	const {
		value: cvvValue,
		inputIsValid: cvvIsValid,
		inputHasError: cvvHasError,
		inputChangeHandler: cvvChangeHandler,
		inputBlurHandler: cvvBlurHandler,
		inputResetHandler: cvvResetHandler,
	} = UseInput(validateCVV);

	const [enteredDate, setEnteredDate] = useState(initDate);

	const formIsValid = nameIsValid && cardNumberIsValid && cvvIsValid;

	const cart = useSelector((state) => state.cart);

	const nameRef = useRef();
	const cardNumberRef = useRef();
	const cvvRef = useRef();

	/* Focus on first input with error */
	const focusOnInputError = () => {
		if (!nameIsValid) {
			nameRef.current.focus();
			return;
		}

		if (!cardNumberIsValid) {
			cardNumberRef.current.focus();
			return;
		}

		if (!cvvIsValid) {
			cvvRef.current.focus();
		}
	};

	const resetForm = () => {
		nameResetHandler();
		cardNumberResetHandler();
		cvvResetHandler();
	};

	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	};

	const saveInput = () => {
		onConfirm({
			name: nameValue,
			cardNumber: cardNumberValue,
			cvv: cvvValue,
			cart,
		});

		resetForm();
	};

	const blurInputs = () => {
		nameBlurHandler();
		cardNumberBlurHandler();
		cvvBlurHandler();
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		/** Avoid empty values on first page load */
		blurInputs();

		return formIsValid ? saveInput() : focusOnInputError();
	};

	return (
		<form className={styles['checkout-form']} onSubmit={handleSubmit}>
			<div className={styles.controls}>
				<Input
					label="name on card"
					errorMsg="invalid name"
					isInvalid={nameHasError}
					id="name"
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
					ref={nameRef}
					value={nameValue}
				/>

				<Input
					label="card number"
					errorMsg="invalid card number"
					isInvalid={cardNumberHasError}
					id="cardNumber"
					onChange={cardNumberChangeHandler}
					onBlur={cardNumberBlurHandler}
					ref={cardNumberRef}
					value={cardNumberValue}
				/>

				<Input
					label="CVV"
					errorMsg="invalid CVV"
					isInvalid={cvvHasError}
					id="cvv"
					onChange={cvvChangeHandler}
					onBlur={cvvBlurHandler}
					ref={cvvRef}
					value={cvvValue}
				/>

				<Input
					type="date"
					label="date"
					value={enteredDate}
					min="2021-01-01"
					isInvalid={false}
					onChange={dateChangeHandler}
				/>
			</div>

			<div className={styles['btn-container']}>
				<Button isSubmit onClick={handleSubmit} cssClass={styles['form-btn']}>
					confirm
				</Button>
			</div>
		</form>
	);
};

CheckoutForm.defaultProps = {
	onConfirm: () => {},
};

CheckoutForm.propTypes = {
	onConfirm: PropTypes.func,
};

export default CheckoutForm;
