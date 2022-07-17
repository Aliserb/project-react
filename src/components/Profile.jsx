const Profile = () => {
    return (
        <div className="content">
            <div className="content-banner">
                <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="banner"/>
            </div>

            <div className="user">
                <div className="avatar">
                    <img src="" alt=""/>
                </div>
                <div className="user-info">
                    <h3 className="user-name">
                        Dmitry K.
                    </h3>

                    <ul className="user-info-list">
                        <li>Date of Birth: 2 january</li>
                        <li>City: Minsk</li>
                        <li>Education: BSU 11</li>
                        <li>WEB site: https://samuraijs.com</li>
                    </ul>
                </div>

                <div className="myPosts">
                    <h2>
                        My posts
                    </h2>

                    <form className="myPosts-form">
                        <div className="myPosts-textarea">
                            <textarea name="myPosts" id="myPosts" cols="50" rows="10"></textarea>
                        </div>

                        <button className="myPosts-send">
                            send
                        </button>
                    </form>
                </div>

                <div className="other-posts">
                    <div className="other-posts-item">
                        <img src="https://i.pinimg.com/736x/14/b9/36/14b936c28ed5bb31f64b8352ba562578.jpg" className="other-posts-avatar" alt="other-posts-avatar"/>
                        <div className="other-posts-content">
                            Hey, nobody love me?
                        </div>
                    </div>

                    <div className="other-posts-item">
                        <img src="https://i.pinimg.com/736x/14/b9/36/14b936c28ed5bb31f64b8352ba562578.jpg" className="other-posts-avatar" alt="other-posts-avatar"/>
                        <div className="other-posts-content">
                            Hey, nobody love me?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;