import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './CourseItem.module.scss';
import Button from '../../UI/Button/Button';
import { cartActions } from '../../../store/cart-slice';

const CourseItem = ({ id, name, price, imgUrl }) => {
	const dispatch = useDispatch();

	const addItemHandler = () => {
		dispatch(
			cartActions.addItem({
				id,
				name,
				price,
				imgUrl,
			})
		);
	};

	return (
		<li className={styles['item-container']}>
			<div className={styles['img-container']}>
				<img src={imgUrl} alt="course" />
			</div>
			<div className={styles['info-container']}>
				<div className={styles.info}>
					<h3>{name}</h3>
					<h4>${price.toFixed(2)}</h4>
				</div>

				<div className={styles.actions}>
					<Button onClick={addItemHandler}>add to cart</Button>
				</div>
			</div>
		</li>
	);
};

CourseItem.defaultProps = {
	id: '',
	name: '',
	imgUrl: '',
	price: '',
};

CourseItem.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	imgUrl: PropTypes.string,
	price: PropTypes.number,
};

export default CourseItem;
