import React, { useState, useEffect } from "react";
import styles from "./WildbeatsPosts.module.css";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Liking from "../assets/Liking.png";
import wildbeatslogo from "../assets/wildbeatslogo.png";
import ClubHeader from "./ClubHeader.jsx";
import Scroll from "./Scroll.jsx";
import SubClub from "./SubClub.jsx";

function WildbeatsPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  // Function to delete a post
  const handleDelete = (indexToDelete) => {
    const updatedPosts = posts.filter((_, index) => index !== indexToDelete);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

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
          <div className={styles.head}>
            <ClubHeader />
          </div>
          <div className={styles.totaldiv}>
            <div className={styles.names}>
              <div className={styles.xyz}>
                <div className={styles.scroll}>
                  <Scroll />
                </div>
              </div>
              <div className={styles.postsWrapper}>
                <div className={styles.posts}>
                  {posts.length > 0 ? (
                    posts.slice().reverse().map((post, index) => (
                      <div key={index} className={styles.post}>
                        {post.image && (
                          <img
                            src={post.image}
                            width="380px"
                            height="350px"
                            alt="Wild beats post"
                          />
                        )}
                        <div className={styles.text1}>
                          <div className={styles.head1}>
                            <img
                              src={wildbeatslogo}
                              width="48px"
                              height="48px"
                              alt="wildbeats logo"
                            />
                            <pre className={styles.name1}>Wildbeats</pre>
                          </div>
                          <div className={styles.text2}>
                            <p>{post.description}</p>
                          </div>
                          <div className={styles.logos}>
                            <div className={styles.Liking}>
                              <img
                                src={Liking}
                                width="35px"
                                height="35px"
                                alt="Like"
                              />
                            </div>
                          </div>
                          <div className={styles.textlike}>
                            <p>100 Likes</p>
                          </div>
                          <button
                            className={styles.deleteButton}
                            onClick={() =>
                              handleDelete(posts.length - 1 - index)
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className={styles.noPostsMessage}>
                      <p style={{ color: "white" }}>No posts available</p>
                    </div>
                  )}
                </div>
                <div
                  className={
                    posts.length === 0
                      ? `${styles.subclub} ${styles.subclubNoPosts}`
                      : styles.subclub
                  }
                >
                  <SubClub />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WildbeatsPosts;
