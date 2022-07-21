import styles from './Navbar.module.css';
import NavMenu from "./NavMenu/NavMenu";

const Navbar = () => {
    return (
        <div className={styles.wrap}>
            <NavMenu />
        </div>
    );
}

export default Navbar;