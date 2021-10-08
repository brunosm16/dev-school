/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Courses from './components/Courses/CoursesList';
import Layout from './components/Layout/Layout';
import Categories from './pages/Categories';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import fetchCoursesData from './store/courses-actions';
import { coursesActions } from './store/courses-slice';
import LocalStorage from './storage/local-storage';
import { cartActions } from './store/cart-slice';

let firstLoad = true;

const App = () => {
	const dispatch = useDispatch();
	const courses = useSelector((state) => state.courses);
	const cart = useSelector((state) => state.cart);

	/* Only show request state for 1000 ms */
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (courses.requestState.message && !courses.requestState.hasError) {
				dispatch(coursesActions.resetRequestState(null));
			}
		}, 1000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [courses.requestState]);

	/* Load courses */
	useEffect(() => {
		dispatch(fetchCoursesData());
	}, [dispatch]);

	/* Update localStorage with cartItems */
	useEffect(() => {
		const currCart = LocalStorage.getItem('cart');

		if (firstLoad && currCart) {
			firstLoad = false;

			const parsedObj = JSON.parse(currCart);

			const cartObj = {
				totalPrice: parsedObj.totalPrice,
				totalQuantity: parsedObj.totalQuantity,
				items: Object.values(parsedObj.items),
			};

			dispatch(cartActions.replaceCart(cartObj));
		} else {
			console.log(cart);
			LocalStorage.updateItems('cart', cart);
		}
	}, [cart]);

	const coursesListArr = Object.values(courses.courses);

	return (
		<Layout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/checkout" component={Checkout} />
				<Route exact path="/categories" component={Categories} />
				<Route exact path="/categories/:categoryId">
					<Courses courses={coursesListArr} />
				</Route>
				<Route path="*" component={NotFound} />
			</Switch>
		</Layout>
	);
};

export default App;
