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
					key={item.id}
					id={item.id}
					imgUrl={item.imgUrl}
					name={item.name}
					price={item.price}
					quantity={item.itemQuantity}
					totalPrice={item.totalItemPrice}
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
