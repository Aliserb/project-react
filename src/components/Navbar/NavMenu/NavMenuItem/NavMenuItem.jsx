import styles from './NavMenuItem.module.css';

const NavMenuItem = (props) => {
    return (
        <li>
            <a href={props.link}>{props.name}</a>
        </li>
    );
}

export default NavMenuItem;