/* eslint-disable no-undef */
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Cart.module.scss';
import CartButtonIcon from '../CartButtonIcon/CartButtonIcon';
import OrderPreview from '../OrderPreview/OrderPreview';
import useIsClickedOutside from '../../hooks/use-is-clicked-outside';

const Cart = () => {
	const [previewIsOpen, setPreviewIsOpen] = useState(false);

	const cart = useSelector((state) => state.cart);

	const handleTogglePreview = () => {
		setPreviewIsOpen(!previewIsOpen);
	};

	const hidePreview = () => {
		setPreviewIsOpen(false);
	};

	const cartPreviewRef = useIsClickedOutside(hidePreview);

	return (
		<div className={styles.cart} ref={cartPreviewRef}>
			<CartButtonIcon
				quantity={cart.totalQuantity}
				onTogglePreview={handleTogglePreview}
			/>
			{previewIsOpen && (
				<OrderPreview onClosePreview={hidePreview} items={cart.items} />
			)}
		</div>
	);
};

export default Cart;
