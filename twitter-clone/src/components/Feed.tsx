import Post from './Post';
import styles from './Feed.module.css';

const postsDummy = [
  {
    id: '1',
    userName: 'firstName lastName',
    postText: '[postText1]',
  },
  {
    id: '2',
    userName: 'test1fn test1ln',
    postText: '[postText2]',
  },
];

function Feed() {
  return (
    <div className={styles.feed}>
      {postsDummy.map(({ id, userName, postText }) => (
        <Post userName={userName} postText={postText} key={id} />
      ))}
    </div>
  );
}

export default Feed;
