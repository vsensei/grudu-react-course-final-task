import Avatar from './Avatar';
import Frame from './Frame';
import styles from './Post.module.css';

type PostArgs = {
  userName: string;
  postText: string;
};

function Post({ userName, postText }: PostArgs) {
  return (
    <Frame>
      <div className={styles.post}>
        <div className={styles['post-avatar']}>
          <Avatar userName={userName} />
        </div>
        <div className={styles['post-text-container']}>
          <div className={styles['post-text-username']}>{userName}</div>
          <div>{postText}</div>
        </div>
      </div>
    </Frame>
  );
}

export default Post;
