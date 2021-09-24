import { Link } from 'react-router-dom';
import CartButtonIcon from '../CartButtonIcon/CartButtonIcon';
import styles from './Navbar.module.scss';

const Navbar = () => (
	<header>
		<div className={styles.navbar}>
			<h2 className={styles.brand}>
				<Link to="/" className={styles.link}>
					dev school
				</Link>
			</h2>

			<CartButtonIcon />
		</div>
	</header>
);

export default Navbar;
