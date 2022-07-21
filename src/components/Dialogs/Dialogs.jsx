import styles from './Dialogs.module.css';
import Users from './Users/Users';
import Chat from "./Chat/Chat";

const Dialogs = () => {
    return (
        <div>
            <h1 className={styles.title}>
                Dialogs
            </h1>

            <div className={styles.wrap}>
                <Users />
                <Chat />
            </div>
        </div>
    );
}

export default Dialogs;