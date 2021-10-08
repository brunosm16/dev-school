import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import styles from './CategoriesList.module.scss';

const CategoriesList = ({ courses }) => (
	<div className={styles['categories-list']}>
		{courses[0] &&
			courses[0].map((category) => (
				<CategoryItem
					key={category.id}
					id={category.id}
					title={category.name}
				/>
			))}
	</div>
);

CategoriesList.defaultProps = {
	courses: {},
};

CategoriesList.propTypes = {
	courses: PropTypes.arrayOf(PropTypes.array),
};

export default CategoriesList;
