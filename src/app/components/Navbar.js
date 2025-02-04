import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>My Website</h1>
            <ul className={styles.menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
