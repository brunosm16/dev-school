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

const App = () => {
	const dispatch = useDispatch();
	const courses = useSelector((state) => state.courses);

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

	return (
		<Layout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/checkout" component={Checkout} />
				<Route exact path="/categories" component={Categories} />
				<Route exact path="/categories/:categoryId" component={Courses} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Layout>
	);
};

export default App;
