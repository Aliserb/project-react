import styles from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={styles.myPosts}>
            <h2>
                My posts
            </h2>

            <form className={styles.myPosts_form}>
                <div className={styles.myPosts_textarea}>
                    <textarea name="myPosts" id="myPosts" cols="50" rows="10"></textarea>
                </div>

                <button className={styles.myPosts_send}>
                    send
                </button>
            </form>
        </div>
    );
}

export default MyPosts;