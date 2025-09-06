import type { PostType } from "../hooks/use-post";
import { Heart, Comment, Send2 } from "./icons";

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const showAlert = () => {
    alert("Function not implemented");
  };

  return (
    <div className='rounded-3xl bg-gray-6 p-2 hover-lift'>
      <div className='bg-white rounded-3xl p-6 shadow-sm border border-gray-9'>
        <div className='flex items-center space-x-3 mb-4'>
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className='w-9 h-9 rounded-full object-cover'
          />
          <div className='flex-1'>
            <h3 className='font-semibold text-sm'>{post.author.name}</h3>
            <p className='text-xs text-gray-7 font-medium'>{post.timestamp}</p>
          </div>
        </div>

        <div className='flex items-start space-x-4'>
          <div className='bg-gray-8 rounded-full flex items-center justify-center w-8 h-8'>
            <span className='text-xl flex-shrink-0'>{post.emoji}</span>
          </div>
          <p className='text-black-1 leading-relaxed flex-1'>{post.content}</p>
        </div>
      </div>
      <div className='flex items-center space-x-6 mt-4 mb-2 px-6'>
        <button
          onClick={showAlert}
          className='flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors group'
        >
          <Heart />
        </button>

        <button
          onClick={showAlert}
          className='flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors group'
        >
          <Comment />
        </button>

        <button
          onClick={showAlert}
          className='flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors group'
        >
          <Send2 />
        </button>
      </div>
    </div>
  );
}
