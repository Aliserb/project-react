import styles from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={styles.other_posts}>
            <div className={styles.item}>
                <img src={props.avatar} className={styles.avatar} alt="other-posts-avatar"/>
                <div className={styles.content}>
                    { props.message }
                </div>
            </div>
        </div>
    );
}

export default Posts;