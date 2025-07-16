import Post from '../components/Post';
import styles from './Feed.module.css';

import type { FeedPost, FeedPostDb } from '../types/feedPost';
import { User } from '../types/user';
import NewPost from '../components/NewPost';
import { BACKEND_URL_BASE } from '../const';
import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

function Feed() {
  const { posts } = useLoaderData() as { posts: Promise<FeedPost[]> };

  return (
    <>
      <NewPost />
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={posts}>
          {(loadedPosts: FeedPost[]) => (
            <div className={styles.feed}>
              {loadedPosts.map(({ id, userName, text, author_id }) => (
                <Post
                  userName={userName}
                  postText={text}
                  key={id}
                  authorId={author_id}
                />
              ))}
            </div>
          )}
        </Await>
      </Suspense>
    </>
  );
}

export async function loadPosts() {
  const [postsResponse, usersResponse] = await Promise.all([
    fetch(`${BACKEND_URL_BASE}/posts`),
    fetch(`${BACKEND_URL_BASE}/users`),
  ]);

  if (!postsResponse.ok || !usersResponse.ok) {
    throw new Response(
      JSON.stringify({
        message: 'Could not fetch events.',
      }),
      { status: 500 }
    );
  }

  const posts: FeedPostDb[] = await postsResponse.json();
  const users: User[] = await usersResponse.json();

  const usersObj = users.reduce(
    (
      acc: Record<User['id'], { id: User['id']; name: User['name'] }>,
      cur: User
    ) => {
      return { ...acc, [cur.id]: { id: cur.id, name: cur.name } };
    },
    {}
  );

  const result = posts.reverse().map((cur: FeedPostDb) => {
    const feedPost: FeedPost = {
      id: cur.id,
      text: cur.text,
      userName: usersObj[cur.author_id].name,
      author_id: usersObj[cur.author_id].id,
    };

    return feedPost;
  });

  return result;
}

export async function loader() {
  const promise = new Promise((resolve) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      resolve(loadPosts());
    }, 10000);
  });

  return {
    posts: loadPosts(), //promise,
  };
}

export default Feed;
