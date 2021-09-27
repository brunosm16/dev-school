import React from 'react';
import CategoryItem from './CategoryItem';
import styles from './CategoriesList.module.scss';

const CategoriesList = () => (
	<div className={styles['categories-list']}>
		<CategoryItem title="front end" />
		<CategoryItem title="back end" />
		<CategoryItem title="dev ops" />
	</div>
);

export default CategoriesList;
