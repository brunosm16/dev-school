import { React, useState } from 'react';
import styles from './Cart.module.scss';
import CartButtonIcon from '../CartButtonIcon/CartButtonIcon';
import OrderPreview from '../OrderPreview/OrderPreview';
import useIsClickedOutside from '../../hooks/use-is-clicked-outside';

const Cart = () => {
	const [previewIsOpen, setPreviewIsOpen] = useState(false);

	const handleTogglePreview = () => {
		setPreviewIsOpen(!previewIsOpen);
	};

	const hidePreview = () => {
		setPreviewIsOpen(false);
	};

	const cartPreviewRef = useIsClickedOutside(hidePreview);

	return (
		<div className={styles.cart} ref={cartPreviewRef}>
			<CartButtonIcon onTogglePreview={handleTogglePreview} />
			{previewIsOpen && <OrderPreview onClosePreview={hidePreview} />}
		</div>
	);
};

export default Cart;
