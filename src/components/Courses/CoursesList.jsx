import { NavLink, Redirect, useParams } from 'react-router-dom';
import React from 'react';
import CourseItem from './CourseItem/CourseItem';
import styles from './CoursesList.module.scss';

const fakeCategories = [
	{
		id: '83762d75-e164-44c7-99dc-77271badaaf8',
		name: 'front end',
		courses: [
			{
				id: 'c1',
				name: 'Complete React Js Course',
				price: 39.99,
				quantity: 3,
				totalPrice: 119.97,
				imgUrl:
					'https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			},

			{
				id: 'c1',
				name: 'Complete React Js Course',
				price: 39.99,
				quantity: 3,
				totalPrice: 119.97,
				imgUrl:
					'https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png',
			},

			{
				id: 'c1',
				name: 'Complete React Js Course',
				price: 39.99,
				quantity: 3,
				totalPrice: 119.97,
				imgUrl:
					'https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png',
			},
		],
	},
];

const Courses = () => {
	const params = useParams();

	const currentCategory = fakeCategories.find(
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
