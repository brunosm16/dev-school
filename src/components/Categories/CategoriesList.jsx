import React from 'react';
import CategoryItem from './CategoryItem';
import styles from './CategoriesList.module.scss';

const mockCategories = [
	{
		id: '83762d75-e164-44c7-99dc-77271badaaf8',
		name: 'front end',
	},
	{
		id: '3f7dcc84-53d7-4a72-8a3c-b9eb3b7a48e2',
		name: 'back end',
	},
	{
		id: 'b28b492d-a40f-4798-afad-5daa4b1f1700',
		name: 'dev ops',
	},
];

const CategoriesList = () => (
	<div className={styles['categories-list']}>
		{mockCategories.map((category) => (
			<CategoryItem id={category.id} title={category.name} />
		))}
	</div>
);

export default CategoriesList;
