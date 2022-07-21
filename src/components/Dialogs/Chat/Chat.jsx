import styles from './Chat.module.css';
import Item from "./Item/Item";

const Chat = () => {
    return (
        <div className={styles.right_side}>
            <Item avatar="https://lh3.googleusercontent.com/ogw/AOh-ky32dXIwjY0OFfs9VEeLtMCbKTHL5l0W5Ofcps153g=s64-c-mo" text="hello" />
        </div>
    );
}

export default Chat;