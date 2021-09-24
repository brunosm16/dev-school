import styles from './Navbar.module.scss';

const Navbar = () => (
	<header>
		<div className={styles.navbar}>
			<h3 className={styles.brand}>dev school</h3>

			{/* <CartButtonIcon /> */}
		</div>
	</header>
);

export default Navbar;
