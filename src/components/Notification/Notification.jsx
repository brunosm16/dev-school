import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

const Notification = ({ msg, optionalClass }) => (
	<div className={`${styles.notification} ${styles[`${optionalClass}`]}`}>
		<h2>{msg}</h2>
	</div>
);

Notification.defaultProps = {
	msg: '',
	optionalClass: '',
};

Notification.propTypes = {
	msg: PropTypes.string,
	optionalClass: PropTypes.string,
};

export default Notification;
