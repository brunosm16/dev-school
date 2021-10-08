import React from 'react';
import PropTypes from 'prop-types';
import styles from './DisplayMessage.module.scss';

const DisplayMessage = ({ message, cssClass }) => (
	<div className={`${styles['empty-msg-container']} ${cssClass}`}>
		<h2>{message}</h2>
	</div>
);

DisplayMessage.defaultProps = {
	message: '',
	cssClass: '',
};

DisplayMessage.propTypes = {
	message: PropTypes.string,
	cssClass: PropTypes.string,
};

export default DisplayMessage;
