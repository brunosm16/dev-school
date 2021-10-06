import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummaryItem.module.scss';
import Button from '../../UI/Button/Button';

const OrderSummaryItem = ({ imgUrl, name, price, quantity, totalPrice }) => {
	const handleDecreaseQuantity = () => {
		console.log('decrease');
	};

	const handleIncreaseQuantity = () => {
		console.log('increase');
	};

	const handleRemoveItem = () => {
		console.log('remove item');
	};

	return (
		<li className={styles['order-summary-item']}>
			<div className={styles['img-container']}>
				<img src={imgUrl} alt="item" />
			</div>

			<div className={styles['name-price']}>
				<h3>{name}</h3>
				<h4>{price}</h4>
			</div>

			<div className={styles['quantity-actions']}>
				<Button cssClass={styles.btn} onClick={handleDecreaseQuantity}>
					-
				</Button>
				<span>{quantity}</span>
				<Button cssClass={styles.btn} onClick={handleIncreaseQuantity}>
					+
				</Button>
			</div>

			<div className={styles['total-price-remove']}>
				<h3>{totalPrice}</h3>
				<Button cssClass={styles.btn} onClick={handleRemoveItem}>X</Button>
			</div>
		</li>
	);
};

OrderSummaryItem.defaultProps = {
	imgUrl: 'item',
	name: 'item name',
	price: 0,
	quantity: 0,
	totalPrice: 0,
};

OrderSummaryItem.propTypes = {
	imgUrl: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	quantity: PropTypes.number,
	totalPrice: PropTypes.number,
};

export default OrderSummaryItem;
