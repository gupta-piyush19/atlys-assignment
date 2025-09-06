export interface PostType {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  emoji: string;
}

export interface PostStore {
  posts: PostType[];
  addPost: (
    content: string,
    author: { name: string; avatar: string }
  ) => PostType;
}
