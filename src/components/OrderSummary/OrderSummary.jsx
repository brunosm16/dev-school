import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './OrderSummary.module.scss';
import OrderSummaryList from './OrderSummaryList/OrderSummaryList';

const OrderSummary = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<div className={styles['order-summary']}>
			<div className={styles['order-summary__list']}>
				<OrderSummaryList items={cart.items} />

				<div className={styles['order-summary__info']}>
					<Link to="/" className={styles.link}>
						<h3>&larr;</h3>
						<h3>continue shopping</h3>
					</Link>

					<div className={styles['order-info']}>
						<h3>
							subtotal: <span className={styles.total}>R${cart.totalPrice.toFixed(2)}</span>
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;
