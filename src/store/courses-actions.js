import { ENDPOINT } from '../utils/http-utils';
import { coursesActions } from './courses-slice';

const fetchCoursesData = () => async (dispatch) => {
	const fetchCourses = async () => {
		dispatch(coursesActions.setRequestState({ message: 'loading resources' }));

		const response = await fetch(`${ENDPOINT}/courses`);

		if (!response.ok) {
			throw new Error('could not fetch courses');
		}

		const data = await response.json();

		return data;
	};

	try {
		const coursesData = await fetchCourses();

		dispatch(
			coursesActions.setCourses({
				courses: coursesData || [],
			})
		);

		dispatch(coursesActions.setRequestState({ message: null }));
	} catch (e) {
		dispatch(
			coursesActions.setRequestState({
				message: 'an error ocurred while trying to load resources',
				hasError: true,
			})
		);
	}
};

export default fetchCoursesData;
