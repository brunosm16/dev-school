import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';
import OrderSummary from '../components/OrderSummary/OrderSummary';
import sendOrderData from '../store/cart-actions';
import { DEFAULT_EMPTY_CART_MSG } from '../utils/utils';
import styles from './page-styles/Checkout.module.scss';

const Checkout = () => {
	const cart = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	const handleConfirm = (order) => {
		dispatch(sendOrderData(order));
	};

	return (
		<div className={styles.checkout}>
			{cart.items.length > 0 && (
				<>
					<OrderSummary />
					<CheckoutForm onConfirm={handleConfirm} />
				</>
			)}

			{cart.items.length === 0 && (
				<div className={styles['empty-checkout-container']}>
					<h3>{DEFAULT_EMPTY_CART_MSG}</h3>
					<Link to="/" className={styles.link}>
						go back home
					</Link>
				</div>
			)}
		</div>
	);
};

export default Checkout;
