import { NavLink, Redirect, useParams } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import CourseItem from './CourseItem/CourseItem';
import styles from './CoursesList.module.scss';

const Courses = ({ courses }) => {
	const params = useParams();

	const currentCategory =
		courses[0] &&
		courses[0].find((category) => category.id === params.categoryId);

	if (!currentCategory) {
		return <Redirect to="/not-found" />;
	}

	return (
		<div className={styles.courses}>
			<div className={styles['courses-header']}>
				<h2 className={styles['category-header']}>
					{currentCategory.name} courses
				</h2>

				<nav className={styles['courses-nav']}>
					<ul>
						<li>
							<NavLink to="/" className={styles['nav-link']}>
								home/
							</NavLink>
						</li>

						<li>
							<NavLink to="/categories" className={styles['nav-link']}>
								categories/
							</NavLink>
						</li>

						<li>
							<NavLink
								to={`/categories/${currentCategory.id}`}
								className={styles['nav-link']}
							>
								{currentCategory.name}
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>

			<ul className={styles['courses-list']}>
				{currentCategory.courses.map((course) => (
					<CourseItem
						key={course.id}
						id={course.id}
						name={course.name}
						imgUrl={course.imgUrl}
						price={course.price}
					/>
				))}
			</ul>
		</div>
	);
};

Courses.defaultProps = {
	courses: [],
};

Courses.propTypes = {
	courses: PropTypes.arrayOf(PropTypes.array),
};

export default Courses;
