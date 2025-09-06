import { useState } from "react";
import { Send, Plus, Microphone, VideoCamera, Emoji } from "./icons";
import { Toolbar } from "./editor/toolbar";

interface PostEditorProps {
  onPublish: (content: string) => void;
  onInteraction: () => void;
  isAuthenticated: boolean;
}

export const PostEditor = ({
  onPublish,
  onInteraction,
  isAuthenticated,
}: PostEditorProps) => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!isAuthenticated) {
      onInteraction();
      return;
    }

    if (!content.trim()) return;

    onPublish(content);
    setContent("");
  };

  return (
    <div className='rounded-3xl bg-gray-6 p-2 hover-lift'>
      <div className='bg-white rounded-2xl border border-gray-10 shadow-xs'>
        <div className=' p-2'>
          <Toolbar handleToolbarClick={onInteraction} />

          <div className='flex items-start space-x-2'>
            <button
              className='ml-1 mt-0.5 text-2xl hover:scale-110 transition-transform'
              onClick={onInteraction}
            >
              <Emoji />
            </button>

            <div className='flex-1'>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='How are you feeling today?'
                className='w-full p-0 text-gray-700 text-sm font-medium placeholder-gray-13 bg-transparent border-none outline-none resize-none leading-relaxed'
                rows={3}
                style={{ minHeight: "80px" }}
              />
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between border-t border-gray-11 px-4 py-2'>
          <div className='flex items-center space-x-4'>
            <button
              onClick={onInteraction}
              className='text-gray-500 hover:text-gray-700 transition-colors bg-gray-12 flex items-center justify-center rounded-xl w-8 h-8 cursor-pointer shadow-sm'
            >
              <Plus />
            </button>
            <button
              onClick={onInteraction}
              className='text-gray-14 hover:text-gray-700 transition-colors cursor-pointer'
            >
              <Microphone />
            </button>
            <button
              onClick={onInteraction}
              className='text-gray-14 hover:text-gray-700 transition-colors cursor-pointer'
            >
              <VideoCamera />
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className='text-white font-medium transition-all duration-200 flex items-center transform hover:scale-110 active:scale-95 cursor-pointer'
          >
            <Send className='text-brand' />
          </button>
        </div>
      </div>
    </div>
  );
};
