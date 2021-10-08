export const validateCardNumber = (name) => name.trim().length >= 4;

export const validateCardName = (cardName) => cardName.trim().length >= 4;

export const validateCVV = (cvv) => cvv.trim().length >= 3;

export const DEFAULT_EMPTY_CART_MSG = 'it looks like your cart is empty';

/**
 * Initial states
 */
export const initDate = '2021-01-01';

/**
 * @param {*} items - items to search the item
 * @param {*} id - id of item to be searched
 * @returns - the item if it was found, otherwise
 * -1.
 */
export const findExistingItemById = (items, id) =>
	items.find((item) => item.id === id);

export const removeItemById = (items, id) =>
	items.filter((item) => item.id !== id);
