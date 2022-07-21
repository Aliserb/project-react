import styles from './User.module.css';

const User = () => {
    return (
        <div className={styles.user}>
            <div className={styles.info_wrap}>
                <div>
                    <img src="https://i.pinimg.com/736x/14/b9/36/14b936c28ed5bb31f64b8352ba562578.jpg" className={styles.avatar} alt="avatar"/>
                </div>
                <div className={styles.user_info}>
                    <h3 className={styles.user_name}>
                        Dmitry K.
                    </h3>

                    <ul className={styles.user_info_list}>
                        <li>Date of Birth: 2 january</li>
                        <li>City: Minsk</li>
                        <li>Education: BSU 11</li>
                        <li>WEB site: https://samuraijs.com</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default User;