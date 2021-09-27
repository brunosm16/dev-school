import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import styles from './Navbar.module.scss';

const Navbar = () => (
	<header>
		<div className={styles.navbar}>
			<h2 className={styles.brand}>
				<Link to="/" className={styles.link}>
					dev school
				</Link>
			</h2>

			<Cart />
		</div>
	</header>
);

export default Navbar;
