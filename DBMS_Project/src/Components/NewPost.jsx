import styles from "./NewPost.module.css";
import Header from "./Header.jsx";
import Coremembersidebar from "./Coremembersidebar.jsx";
import Scroll from "./Scroll.jsx";
import SubClubHeader from "./SubClubHeader.jsx";
import Coremembermanage from "./Coremembermanage.jsx";
import uploadimg from "../assets/uploadimg.png";
import { useState } from "react";

function NewPost({ addPost }) {
  const [postData, setPostData] = useState({
    description: '',
    image: null, // This will hold the base64 encoded image
  });

  // Handle input change for description
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  // Handle file upload and convert to base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setPostData({ ...postData, image: reader.result });
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Handle submit to send post data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:5000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),  // Sending the post data to Flask
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        addPost(postData);  // Update the state in parent component if needed
        setPostData({ description: '', image: null });  // Reset the form
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
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
            <Scroll />
          </div>
          <div className={styles.flexing}>
            <form onSubmit={handleSubmit}>
              <div className={styles.upload}>
                <div className={styles.uploadimage}>
                  <img src={uploadimg} width="230px" height="220px" alt="Upload Cover" />
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                  />
                </div>
                <p className={styles.text1}>Description</p>
                <hr />
                <textarea
                  className={styles.text2}
                  name="description"
                  value={postData.description}
                  onChange={handleChange}
                  placeholder="Type here"
                />
              </div>
              <button type="submit" className={`${styles.btn} ${styles.btn1} ${styles.contact}`}>
                Post
              </button>
            </form>
            <div className={styles.membermanage}>
              <Coremembermanage />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
