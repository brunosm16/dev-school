import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryItem.module.scss';

const CategoryItem = ({ id, title }) => {
	const titleSplit = title.split(' ');

	const firstName = titleSplit[0];
	const lastName = titleSplit[1];

	return (
		<Link to={`/categories/${id}`} className={styles['category-item']}>
			<h1>
				{firstName} <span>{lastName}</span>
			</h1>
		</Link>
	);
};

CategoryItem.defaultProps = {
	id: '',
	title: '',
};

CategoryItem.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
};

export default CategoryItem;
