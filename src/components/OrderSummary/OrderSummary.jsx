import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OrderSummary.module.scss';
import OrderSummaryList from './OrderSummaryList/OrderSummaryList';

const fakeCategories = [
	{
		id: 'c1',
		name: 'Complete React Js Course',
		price: 39.99,
		quantity: 3,
		totalPrice: 119.97,
		imgUrl:
			'https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	},

	{
		id: 'c1',
		name: 'Complete React Js Course',
		price: 39.99,
		quantity: 3,
		totalPrice: 119.97,
		imgUrl:
			'https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png',
	},

	{
		id: 'c1',
		name: 'Complete React Js Course',
		price: 39.99,
		quantity: 3,
		totalPrice: 119.97,
		imgUrl:
			'https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png',
	},
];

const OrderSummary = () => (
	<div className={styles['order-summary']}>
		<div className={styles['order-summary__list']}>
			<OrderSummaryList items={fakeCategories} />

			<div className={styles['order-summary__info']}>
				<Link to="/" className={styles.link}>
					<h3>&larr;</h3>
					<h3>continue shopping</h3>
				</Link>

				<div className={styles['order-info']}>
					<h3>
						subtotal: <span className={styles.total}>$200</span>
					</h3>
				</div>
			</div>
		</div>
	</div>
);

export default OrderSummary;
