import type { PostType } from "~/types/post";
import { Heart, Comment, Send2 } from "./icons";

interface PostProps {
  post: PostType;
  onInteraction: () => void;
}

export const Post = ({ post, onInteraction }: PostProps) => {
  const buttons = [
    {
      icon: <Heart />,
      color: "text-red-500",
    },
    {
      icon: <Comment />,
      color: "text-blue-500",
    },
    {
      icon: <Send2 />,
      color: "text-green-500",
    },
  ];

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
        {buttons.map((button) => (
          <button
            onClick={onInteraction}
            className={`flex items-center space-x-2 text-gray-500 hover:${button.color} transition-colors cursor-pointer`}
          >
            {button.icon}
          </button>
        ))}
      </div>
    </div>
  );
};
