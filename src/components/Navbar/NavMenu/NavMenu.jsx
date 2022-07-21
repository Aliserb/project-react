import styles from './NavMenu.module.css';
import NavMenuItem from "./NavMenuItem/NavMenuItem";

const NavMenu = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <NavMenuItem name="profile" link="profile" />
                <NavMenuItem name="messages" link="messages" />
            </ul>
        </nav>
    );
}

export default NavMenu;