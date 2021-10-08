import React from 'react';
import { useSelector } from 'react-redux';
import DisplayMessage from '../components/Warnings/DisplayMessage/DisplayMessage';
import CategoriesList from '../components/Categories/CategoriesList';

const Categories = () => {
	const courses = useSelector((state) => state.courses);

	const { requestState, courses: coursesList } = courses;

	const coursesListArr = Object.values(coursesList);

	return (
		<>
			{requestState.message && (
				<DisplayMessage message={requestState.message} />
			)}

			{!requestState.message && <CategoriesList courses={coursesListArr} />}
		</>
	);
};

export default Categories;
