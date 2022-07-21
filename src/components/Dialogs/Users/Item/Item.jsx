import styles from './Item.module.css';

const Item = (props) => {
    return (
        <div className={styles.item}>
            <img src={props.avatar} alt="avatar"/>
            <span>
                {props.name}
            </span>
        </div>
    );
}

export default Item;