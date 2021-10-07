import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OrderPreview.module.scss';
import OrderPreviewItem from './OrderPreviewItem/OrderPreviewItem';

const OrderPreview = ({ onClosePreview, items }) => (
	<div className={styles['order-preview']}>
		<ul className={styles['order-preview-list']}>
			{items.map((item) => (
				<OrderPreviewItem
					key={item.id}
					id={item.id}
					name={item.name}
					price={item.price}
					quantity={item.itemQuantity}
					totalPrice={item.totalItemPrice}
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
	items: [],
};

OrderPreview.propTypes = {
	onClosePreview: PropTypes.func,
	items: PropTypes.arrayOf(PropTypes.object),
};

export default OrderPreview;
