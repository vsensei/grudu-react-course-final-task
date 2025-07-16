export type FeedPostDb = {
  id: string;
  author_id: string;
  text: string;
};

export type FeedPost = {
  id: string;
  text: string;
  userName: string;
  author_id: string;
};
