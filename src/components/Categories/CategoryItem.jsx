import PropTypes from 'prop-types';
import React from 'react';
import styles from './CategoryItem.module.scss';

const CategoryItem = ({ title }) => {
	const titleSplit = title.split(' ');

	const firstName = titleSplit[0];
	const lastName = titleSplit[1];

	return (
		<div className={styles['category-item']}>
			<h1>
				{firstName} <span>{lastName}</span>
			</h1>
		</div>
	);
};

CategoryItem.defaultProps = {
	title: '',
};

CategoryItem.propTypes = {
	title: PropTypes.string,
};

export default CategoryItem;
