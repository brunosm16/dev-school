export const validateCardNumber = (name) => name.trim().length >= 4;

export const validateCardName = (cardName) => cardName.trim().length >= 4;

export const validateCVV = (cvv) => cvv.trim().length >= 3;

/**
 * Initial states
 */
export const initDate = '2021-01-01';
