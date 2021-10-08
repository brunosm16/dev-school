import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import styles from './OrderPreviewItem.module.scss';
import Button from '../../UI/Button/Button';
import { cartActions } from '../../../store/cart-slice';

const OrderPreviewItem = ({
	// eslint-disable-next-line no-unused-vars
	id,
	name,
	price,
	totalPrice,
	imgUrl,
	quantity,
	onUpdateItems,
}) => {
	const dispatch = useDispatch();
	const handleAddItem = () => {
		dispatch(
			cartActions.addItem({
				id,
				name,
				price,
				totalItemPrice: totalPrice,
				imgUrl,
				itemQuantity: quantity,
			})
		);

		onUpdateItems();
	};

	const handleRemoveItem = () => {
		dispatch(cartActions.removeItem(id));
		onUpdateItems();
	};
	return (
		<li className={styles['item-preview']}>
			<div className={styles['img-container']}>
				<img src={imgUrl} alt="item" />
			</div>

			<div className={styles['order-container']}>
				<div className={styles['item-info']}>
					<h4>{name}</h4>
					<span>${price.toFixed(2)} / per item</span>
				</div>

				<div className={styles['order-total-actions']}>
					<h4 className={styles.total}>${totalPrice.toFixed(2)}</h4>

					<div className={styles.actions}>
						<Button onClick={handleRemoveItem}>
							<AiOutlineMinus />
						</Button>
						<span>{quantity}</span>
						<Button onClick={handleAddItem}>
							<AiOutlinePlus />
						</Button>
					</div>
				</div>
			</div>
		</li>
	);
};

OrderPreviewItem.defaultProps = {
	id: '',
	name: '',
	price: 0,
	totalPrice: 0,
	imgUrl: '',
	quantity: 0,
	onUpdateItems: () => {},
};

OrderPreviewItem.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	totalPrice: PropTypes.number,
	imgUrl: PropTypes.string,
	quantity: PropTypes.number,
	onUpdateItems: PropTypes.func,
};

export default OrderPreviewItem;
