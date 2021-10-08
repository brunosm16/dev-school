module.exports = class LocalStorage {
	static getItem(itemName) {
		return localStorage.getItem(itemName);
	}

	static updateItems(itemName, items) {
		let currItems = this.getItem(itemName);
		currItems = JSON.stringify(items);

		localStorage.setItem(itemName, currItems);
	}

	// static saveItem(itemName, newItem) {
	// 	const currItems = this.getItem(itemName);

	// 	/* If item already exists, just push newItem in already existing item,
	//        otherwise set a new item in localStorage.
	//      */
	// 	if (currItems) {
	// 		currItems.push(newItem);
	// 		localStorage.setItem(itemName, currItems);
	// 	} else {
	// 		localStorage.setItem(itemName, currItems);
	// 	}
	// }

	// static removeItemById(itemName, itemToRemove) {
	// 	const currItems = this.getItem(itemName);

	// 	if (currItems) {
	// 		currItems.filter((item) => item.id);
	// 	}
	// }
};
