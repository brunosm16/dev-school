import React from 'react';
import PropTypes from 'prop-types';
import { RiShoppingCartLine } from 'react-icons/ri';
import Button from '../UI/Button/Button';
import styles from './CartButtonIcon.module.scss';

const CartButtonIcon = ({ quantity }) => (
	<Button cssClass={styles['cart-btn-container']}>
		<RiShoppingCartLine className={styles.icon} />

		<div className={styles.quantity}>
			<span>{quantity}</span>
		</div>
	</Button>
);

CartButtonIcon.defaultProps = {
	quantity: 0,
};

CartButtonIcon.propTypes = {
	quantity: PropTypes.number,
};

export default CartButtonIcon;
