import { useState } from "react";
import {
  Trash,
  Send,
  Plus,
  Microphone,
  TextBold,
  TextItalic,
  TextUnderline,
  ListUnordered,
  ListOrdered,
  Quotes,
  Script,
  VideoCamera,
  Emoji,
} from "./icons";
import { Separator } from "./separator";

interface PostEditorProps {
  onPublish: (content: string) => void;
  onInteraction: () => void;
  isAuthenticated: boolean;
}

export function PostEditor({
  onPublish,
  onInteraction,
  isAuthenticated,
}: PostEditorProps) {
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

  const handleToolbarClick = () => {
    onInteraction();
  };

  return (
    <div className='rounded-3xl bg-gray-6 p-2 hover-lift'>
      <div className='bg-white rounded-2xl border border-gray-10 shadow-xs'>
        <div className=' p-2'>
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center space-x-4 bg-gray-6 rounded-xl p-1'>
              <select
                className='text-sm text-black-2 bg-white p-2 rounded-md shadow-sm border-none outline-none cursor-pointer'
                defaultValue='Paragraph'
              >
                <option>Paragraph</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
              </select>

              <div className='flex items-center space-x-1 ml-2'>
                <button
                  onClick={handleToolbarClick}
                  className='p-1 transition-colors w-8 h-8 bg-white flex items-center justify-center rounded-md shadow-sm cursor-pointer'
                >
                  <TextBold />
                </button>
                <button
                  onClick={handleToolbarClick}
                  className='p-1 transition-colors w-8 h-8 flex items-center justify-center rounded-md hover:shadow-sm cursor-pointer hover:bg-white'
                >
                  <TextItalic />
                </button>
                <button
                  onClick={handleToolbarClick}
                  className='p-1 transition-colors w-8 h-8 flex items-center justify-center rounded-md hover:shadow-sm cursor-pointer hover:bg-white'
                >
                  <TextUnderline />
                </button>
              </div>
              <Separator />

              <div className='flex items-center space-x-1'>
                <button
                  onClick={handleToolbarClick}
                  className='p-1 transition-colors w-8 h-8 flex items-center justify-center rounded-md hover:shadow-sm cursor-pointer hover:bg-white'
                >
                  <ListUnordered />
                </button>
                <button
                  onClick={handleToolbarClick}
                  className='p-1 transition-colors w-8 h-8 flex items-center justify-center rounded-md hover:shadow-sm cursor-pointer hover:bg-white'
                >
                  <ListOrdered />
                </button>
              </div>
              <Separator />

              <div className='flex items-center space-x-1 mr-2'>
                <button
                  onClick={handleToolbarClick}
                  className='p-1 transition-colors w-8 h-8 flex items-center justify-center rounded-md hover:shadow-sm cursor-pointer hover:bg-white'
                >
                  <Quotes />
                </button>
                <button
                  onClick={handleToolbarClick}
                  className='p-1 transition-colors w-8 h-8 flex items-center justify-center rounded-md hover:shadow-sm cursor-pointer hover:bg-white'
                >
                  <Script />
                </button>
              </div>
            </div>

            <button
              onClick={handleToolbarClick}
              className='p-2 bg-red-2 hover:bg-red-2/80 transition-colors flex items-center justify-center rounded-xl w-10 h-10 cursor-pointer shadow-sm'
            >
              <Trash className='text-red-1' />
            </button>
          </div>

          <div className='flex items-start space-x-2'>
            <button
              className='ml-1 mt-0.5 text-2xl hover:scale-110 transition-transform'
              onClick={handleToolbarClick}
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
              onClick={handleToolbarClick}
              className='text-gray-500 hover:text-gray-700 transition-colors bg-gray-12 flex items-center justify-center rounded-xl w-8 h-8 cursor-pointer shadow-sm'
            >
              <Plus />
            </button>
            <button
              onClick={handleToolbarClick}
              className='text-gray-14 hover:text-gray-700 transition-colors cursor-pointer'
            >
              <Microphone />
            </button>
            <button
              onClick={handleToolbarClick}
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
}
