import styles from './Users.module.css';
import Item from "./Item/Item";

const Users = () => {
    return (
        <div className={styles.left_side}>
            <Item avatar="https://lh3.googleusercontent.com/ogw/AOh-ky32dXIwjY0OFfs9VEeLtMCbKTHL5l0W5Ofcps153g=s64-c-mo" name="Dima" />
        </div>
    );
}

export default Users;