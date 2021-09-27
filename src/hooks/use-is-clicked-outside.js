import { useEffect, useRef } from 'react';

const UseIsClickedOutside = (doSomething) => {
	const ref = useRef();

	useEffect(() => {
		const handler = (event) => {
			/* Click occur outside of ref */
			if (!ref.current.contains(event.target)) {
				/* Perform the desired action when the click,
				 is outside of ref */
				doSomething();
			}
		};

		document.addEventListener('mousedown', handler);
	}, []);

	return ref;
};

export default UseIsClickedOutside;
