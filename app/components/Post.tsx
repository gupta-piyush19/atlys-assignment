import type { PostType } from "./Feed";
import { Heart, Comment, Share } from "./icons";

interface PostProps {
  post: PostType;
  onInteraction: () => void;
}

export default function Post({ post, onInteraction }: PostProps) {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-6 shadow-sm'>
      {/* Post Header */}
      <div className='flex items-center space-x-3 mb-4'>
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className='w-12 h-12 rounded-full object-cover'
        />
        <div className='flex-1'>
          <h3 className='font-semibold text-gray-900 dark:text-white'>
            {post.author.name}
          </h3>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            {post.timestamp}
          </p>
        </div>
      </div>

      {/* Post Content */}
      <div className='flex items-start space-x-4 mb-4'>
        <span className='text-2xl flex-shrink-0'>{post.emoji}</span>
        <p className='text-gray-700 dark:text-gray-200 leading-relaxed flex-1'>
          {post.content}
        </p>
      </div>

      {/* Post Actions */}
      <div className='flex items-center space-x-6 pt-4 border-t border-gray-100 dark:border-gray-700'>
        <button
          onClick={onInteraction}
          className='flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors group'
        >
          <Heart
            className='w-5 h-5 group-hover:fill-red-500 transition-colors'
            size={20}
          />
          <span className='text-sm font-medium'>Like</span>
        </button>

        <button
          onClick={onInteraction}
          className='flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors group'
        >
          <Comment className='w-5 h-5' size={20} />
          <span className='text-sm font-medium'>Comment</span>
        </button>

        <button
          onClick={onInteraction}
          className='flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors group'
        >
          <Share className='w-5 h-5' size={20} />
          <span className='text-sm font-medium'>Share</span>
        </button>
      </div>
    </div>
  );
}
