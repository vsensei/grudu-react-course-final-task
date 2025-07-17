import { getSession } from '../auth';
import { BACKEND_URL_BASE } from '../const';
import Avatar from './Avatar';
import Frame from './Frame';

import styles from './Post.module.css';

type PostArgs = {
  userName: string;
  postText: string;
  authorId: string;
};

type ActionData = Record<string, { message: string; status: number }>;

function Post({ userName, postText, authorId }: PostArgs) {
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
        {authorId === getSession().id && <button>X</button>}
      </div>
    </Frame>
  );
}

export async function action({ request }: { request: Request }) {
  const errors: ActionData = {};
  const data = await request.formData();

  const newPostData = {
    text: data.get('posttext') as string,
  };

  try {
    const user = getSession();

    const response = await fetch(`${BACKEND_URL_BASE}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...newPostData, author_id: user.id }),
    });
    console.log('posted');
    if (!response.ok) {
      throw new Error('Not created');
    }

    const post = await response.json();

    if (!post) {
      throw new Error('Not created');
    }

    return null;
  } catch (err) {
    console.log(err);
    errors.autentication = { message: 'Server not available', status: 404 };
    return errors;
  }
}

export default Post;
