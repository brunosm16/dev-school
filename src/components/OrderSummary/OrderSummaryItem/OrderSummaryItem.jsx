import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './OrderSummaryItem.module.scss';
import Button from '../../UI/Button/Button';
import { cartActions } from '../../../store/cart-slice';

const OrderSummaryItem = ({
	id,
	imgUrl,
	name,
	price,
	quantity,
	totalPrice,
}) => {
	const dispatch = useDispatch();

	const handleDecreaseQuantity = () => {
		dispatch(cartActions.removeItem(id));
	};

	const handleIncreaseQuantity = () => {
		dispatch(cartActions.addItem({ id, price }));
	};

	const handleRemoveItem = () => {
		dispatch(cartActions.deleteItem(id));
	};

	return (
		<li className={styles['order-summary-item']}>
			<div className={styles['img-container']}>
				<img src={imgUrl} alt="item" />
			</div>

			<div className={styles['name-price']}>
				<h3>{name}</h3>
				<h4>${price.toFixed(2)}</h4>
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
				<h3>${totalPrice.toFixed(2)}</h3>
				<Button cssClass={styles.btn} onClick={handleRemoveItem}>
					X
				</Button>
			</div>
		</li>
	);
};

OrderSummaryItem.defaultProps = {
	id: '',
	imgUrl: 'item',
	name: 'item name',
	price: 0,
	quantity: 0,
	totalPrice: 0,
};

OrderSummaryItem.propTypes = {
	id: PropTypes.string,
	imgUrl: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	quantity: PropTypes.number,
	totalPrice: PropTypes.number,
};

export default OrderSummaryItem;
