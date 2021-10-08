import {
	DEFAULT_ERROR_MESSAGE,
	DEFAULT_LOADING_MESSAGE,
	DEFAULT_SUCCESSFUL_MESSAGE,
	ENDPOINT,
	headerJSON,
} from '../utils/http-utils';
import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

const sendOrderData = (cart) => async (dispatch) => {
	const sendOrder = async () => {
		dispatch(
			uiActions.setNotification({
				msg: DEFAULT_LOADING_MESSAGE,
				isLoading: true,
			})
		);

		const response = await fetch(`${ENDPOINT}/orders`, {
			body: JSON.stringify(cart),
			method: 'POST',
			headers: headerJSON,
		});

		if (!response.ok) {
			throw new Error('could not send request');
		}

		const data = await response.json();

		return data;
	};

	try {
		const order = await sendOrder();

		console.log('order send', order);

		dispatch(
			uiActions.setNotification({
				msg: DEFAULT_SUCCESSFUL_MESSAGE,
			})
		);

		/* Clear cart */
		dispatch(
			cartActions.replaceCart({ items: [], totalPrice: 0, totalQuantity: 0 })
		);
	} catch (e) {
		dispatch(
			uiActions.setNotification({
				msg: DEFAULT_ERROR_MESSAGE,
				isError: true,
			})
		);
	}
};

export default sendOrderData;
