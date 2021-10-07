import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmptyItems.module.scss';

const EmptyItems = ({ cssClass }) => (
	<div className={`${styles['empty-msg-container']} ${cssClass}`}>
		<h3>it looks like your shopping cart is empty</h3>
	</div>
);

EmptyItems.defaultProps = {
	cssClass: '',
};

EmptyItems.propTypes = {
	cssClass: PropTypes.string,
};

export default EmptyItems;
