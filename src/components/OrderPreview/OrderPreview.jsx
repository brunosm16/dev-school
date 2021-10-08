import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_EMPTY_CART_MSG } from '../../utils/utils';
import styles from './OrderPreview.module.scss';
import OrderPreviewItem from './OrderPreviewItem/OrderPreviewItem';

const OrderPreview = ({ onClosePreview, items }) => (
	<div className={styles['order-preview']}>
		{items.length > 0 && (
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
		)}

		{items.length === 0 && (
			<h4 className={styles['empty-warning']}>{DEFAULT_EMPTY_CART_MSG}</h4>
		)}

		<div className={styles['link-container']}>
			<Link
				to={`${items.length === 0 ? '/' : '/checkout'}`}
				className={styles['checkout-link']}
				onClick={onClosePreview}
			>
				<h3>go to {`${items.length === 0 ? 'home' : 'checkout'}`}</h3>
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
