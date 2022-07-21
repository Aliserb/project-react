import styles from './Item.module.css';

const Item = (props) => {
    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>

            <div className={styles.text}>
                <span>
                    {props.text}
                </span>
            </div>
        </div>
    );
}

export default Item;