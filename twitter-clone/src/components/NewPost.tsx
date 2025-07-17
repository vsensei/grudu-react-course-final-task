import { Form, useSubmit } from 'react-router-dom';
import { getSession } from '../auth';
import { BACKEND_URL_BASE } from '../const';
import Frame from './Frame';

import styles from './NewPost.module.css';

type ActionData = Record<string, { message: string; status: number }>;

const NewPost = () => {
  const submit = useSubmit();
  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const form = event.currentTarget.form;

    submit(form);
    form?.reset();
  };

  return (
    <Form method='post'>
      <Frame addClass={styles['new-post-frame']}>
        <textarea
          name='posttext'
          className={styles['new-post']}
          placeholder='What’s happening?'
        />
      </Frame>
      <div className={styles['post-button-container']}>
        <button
          type='submit'
          className={styles['post-button']}
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </Form>
  );
};

export default NewPost;

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
