import Frame from './Frame';
import styles from './NewPost.module.css';

const NewPost = () => {
  return (
    <>
      <Frame>
        <textarea className={styles['new-post']} placeholder='What’s happening?' />
      </Frame>
      <div className={styles['post-button-container']}>
        <button className={styles['post-button']}>Post</button>
      </div>
    </>
  );
};

export default NewPost;
