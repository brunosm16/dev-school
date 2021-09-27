import React from 'react';
import PropTypes from 'prop-types';
import { RiShoppingCartLine } from 'react-icons/ri';
import Button from '../UI/Button/Button';
import styles from './CartButtonIcon.module.scss';

const CartButtonIcon = ({ quantity, onTogglePreview }) => {
	const handleToggleButton = () => {
		onTogglePreview();
	};

	return (
		<Button
			cssClass={styles['cart-btn-container']}
			onClick={handleToggleButton}
		>
			<RiShoppingCartLine className={styles.icon} />
			<span className={styles.quantity}>{quantity}</span>
		</Button>
	);
};

CartButtonIcon.defaultProps = {
	quantity: 0,
	onTogglePreview: () => {},
};

CartButtonIcon.propTypes = {
	quantity: PropTypes.number,
	onTogglePreview: PropTypes.func,
};

export default CartButtonIcon;
