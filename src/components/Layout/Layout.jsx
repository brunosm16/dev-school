import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
	<div className={styles.layout}>
		<Navbar />
		<main>{children}</main>
	</div>
);

Layout.defaultProps = {
	children: {},
};

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
