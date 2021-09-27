import React from 'react';
import { Link } from 'react-router-dom';
import styles from './page-styles/NotFound.module.scss';

const NotFound = () => (
	<div className={styles['not-found']}>
		<div className={styles.text}>
			<h1>404</h1>
			<h2>it looks like you&apos;re lost ...</h2>
		</div>

		<div className={styles.link}>
			<Link to="/">go back home</Link>
		</div>
	</div>
);

export default NotFound;
