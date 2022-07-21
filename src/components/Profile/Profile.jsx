import styles from './Profile.module.css';
import Banner from "./Banner/Banner";
import User from "./User/User";
import MyPosts from "./MyPosts/MyPosts";
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={styles.content}>
            <Banner />
            <User />
            <MyPosts />
            <Posts avatar="https://yt3.ggpht.com/yti/AJo0G0nZKaLd8u3vT7ekmqGvvzr-dIu3VOBbBFYp_bv6wA=s88-c-k-c0x00ffffff-no-rj-mo" message="hello" />
            <Posts avatar="https://i.pinimg.com/736x/14/b9/36/14b936c28ed5bb31f64b8352ba562578.jpg" message="world" />
        </div>
    );
}

export default Profile;