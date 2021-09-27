import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OrderPreview.module.scss';
import OrderPreviewItem from './OrderPreviewItem/OrderPreviewItem';

const mockItems = [
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

const OrderPreview = ({ onClosePreview }) => (
	<div className={styles['order-preview']}>
		<ul className={styles['order-preview-list']}>
			{mockItems.map((item) => (
				<OrderPreviewItem
					key={item.id}
					id={item.id}
					name={item.name}
					price={item.price}
					quantity={item.quantity}
					totalPrice={item.totalPrice}
					imgUrl={item.imgUrl}
				/>
			))}
		</ul>

		<div className={styles['checkout-container']}>
			<Link
				to="/checkout"
				className={styles['checkout-link']}
				onClick={onClosePreview}
			>
				<h3>go to checkout!</h3>
			</Link>
		</div>
	</div>
);

OrderPreview.defaultProps = {
	onClosePreview: () => {},
};

OrderPreview.propTypes = {
	onClosePreview: PropTypes.func,
};

export default OrderPreview;
