import { NavLink, Redirect, useParams } from 'react-router-dom';
import React from 'react';
import CourseItem from './CourseItem/CourseItem';
import styles from './CoursesList.module.scss';
import { fakeCourses } from '../../mock/fakeCourses';

const Courses = () => {
	const params = useParams();

	const currentCategory = fakeCourses.find(
		(category) => category.id === params.categoryId
	);

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

export default Courses;
