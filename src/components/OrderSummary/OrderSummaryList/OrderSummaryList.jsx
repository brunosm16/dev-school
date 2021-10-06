import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummaryList.module.scss';
import OrderSummaryItem from '../OrderSummaryItem/OrderSummaryItem';

const OrderSummaryList = ({ items }) => (
	<div className={styles['list-wrapper']}>
		<h2>order summary</h2>

		<ul className={styles['order-summary-list']}>
			{items.map((item) => (
				<OrderSummaryItem
					imgUrl={item.imgUrl}
					name={item.name}
					price={item.price}
					quantity={item.quantity}
					totalPrice={item.totalPrice}
				/>
			))}
		</ul>
	</div>
);

OrderSummaryList.defaultProps = {
	items: [],
};

OrderSummaryList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
};

export default OrderSummaryList;
