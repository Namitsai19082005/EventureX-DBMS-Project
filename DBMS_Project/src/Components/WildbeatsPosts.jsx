import React from "react";
import styles from "./WildbeatsPosts.module.css";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Scroll from "./Scroll.jsx";
import ClubHeader from "./ClubHeader.jsx";
import SubClub from "./SubClub.jsx";
import wildbeats from "../assets/wildbeats.png"

function WildbeatsPosts({ posts, deletePost }) {
  const subClubMarginLeft = posts && posts.length > 0 ? '140px' : '850px';

  return (
    <div className={styles.wildbeatsposts}>
      <header className={styles.header}>
        <Header />
      </header>
      <div className={styles.side}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.header1}>
          <ClubHeader />
          <div className={styles.totaldiv}>
            <Scroll />
            <div className={styles.flexing}>
            <div className={styles.postsContainer}>
              {posts.length > 0 ? (
                posts.slice().reverse().map((post, index) => (
                  <div key={index} className={styles.post}>
                    {post.image && (
                      <img src={post.image} width="380px" height="350px" alt="Wildbeats post" />
                    )}
                    <div className={styles.text1}>
                      <div className={styles.head1}>
                      <img src={wildbeats} className={styles.image} width="60px" height="60px"/>
                        <p>Wildbeats</p>
                      </div>
                      <div className={styles.text2}>
                      <p className={styles.desc}>{post.description}</p>
                      </div>
                      <button
                  className={styles.deleteButton}
                  onClick={() => deletePost(index)} 
                >
                  Delete
                </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.noPostsMessage}>
                  <p>No posts available</p>
                </div>
              )}
            </div>
            <div style={{ marginLeft: subClubMarginLeft }}>
              <SubClub />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WildbeatsPosts;