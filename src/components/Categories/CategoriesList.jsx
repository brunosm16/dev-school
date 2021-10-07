import React from 'react';
import CategoryItem from './CategoryItem';
import styles from './CategoriesList.module.scss';
import { fakeCourses } from '../../mock/fakeCourses';

const CategoriesList = () => (
	<div className={styles['categories-list']}>
		{fakeCourses.map((category) => (
			<CategoryItem key={category.id} id={category.id} title={category.name} />
		))}
	</div>
);

export default CategoriesList;
