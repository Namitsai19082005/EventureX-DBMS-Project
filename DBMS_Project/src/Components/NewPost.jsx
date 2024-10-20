import styles from "./NewPost.module.css";
import Header from "./Header.jsx";
import Coremembersidebar from "./Coremembersidebar.jsx";
import Scroll from "./Scroll.jsx";
import SubClubHeader from "./SubClubHeader.jsx";
import Coremembermanage from "./Coremembermanage.jsx";
import upload from "../assets/upload.png";
import { useState, useEffect } from "react";

function NewPost() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

  // Load posts from local storage on component mount
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = async () => {
    if (description || image) {
      const newPost = { description, image };
  
      // Send the new post to the backend
      try {
        const response = await fetch('http://127.0.0.1:5000/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPost),
        });
  
        if (response.ok) {
          const updatedPosts = [...posts, newPost];
          setPosts(updatedPosts);
          localStorage.setItem("posts", JSON.stringify(updatedPosts));
  
          // Clear the input after posting
          setDescription(""); 
          setImage(null);
        } else {
          console.error('Failed to create post');
        }
      } catch (error) {
        console.error('Error while creating post:', error);
      }
    }
  };
  

  return (
    <div className={styles.galleryevents}>
      <header className={styles.header}>
        <Header />
      </header>
      <div className={styles.galleryeventscontent}>
        <div className={styles.sidebar}>
          <Coremembersidebar />
        </div>
        <div>
          <SubClubHeader />
          <div className={styles.content}>
            <div>
              <Scroll />
              <div className={styles.upload}>
                  <div className={styles.uploadimage}>
                    <img src={upload} width="230px" height="220px" alt="Upload Cover" />
                    <input
                      type="file"
                      onChange={handleImageChange}
                      accept="image/*"
                      required
                    />
                  </div>
              <div>
            </div>
                <p className={styles.text1}>Description</p>
                <hr />
                <textarea
                  className={styles.text2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Type here"
                />
              </div>
              <button
                type="button"
                className={`${styles.btn} ${styles.btn1} ${styles.contact}`}
                onClick={handlePost}
              >
                Post
              </button>
            </div>
            <div>
              <Coremembermanage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;