import React from 'react';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';
import OrderSummary from '../components/OrderSummary/OrderSummary';
import styles from './page-styles/Checkout.module.scss';

const Checkout = () => (
	<div className={styles.checkout}>
		<OrderSummary />

		<CheckoutForm />
	</div>
);

export default Checkout;
