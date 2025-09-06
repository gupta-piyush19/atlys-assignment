import {
  TextBold,
  TextItalic,
  TextUnderline,
  ListUnordered,
  ListOrdered,
  Quotes,
  Script,
  Trash,
} from "../icons";
import { Separator } from "../common/separator";
import { ToolbarButton } from "./toolbar-button";

interface ToolbarProps {
  handleToolbarClick: () => void;
}

export const Toolbar = ({ handleToolbarClick }: ToolbarProps) => {
  return (
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
          <ToolbarButton
            onClick={handleToolbarClick}
            icon={<TextBold />}
            active
          />
          <ToolbarButton onClick={handleToolbarClick} icon={<TextItalic />} />

          <ToolbarButton
            onClick={handleToolbarClick}
            icon={<TextUnderline />}
          />
        </div>
        <Separator />

        <div className='flex items-center space-x-1'>
          <ToolbarButton
            onClick={handleToolbarClick}
            icon={<ListUnordered />}
          />
          <ToolbarButton onClick={handleToolbarClick} icon={<ListOrdered />} />
        </div>
        <Separator />

        <div className='flex items-center space-x-1 mr-2'>
          <ToolbarButton onClick={handleToolbarClick} icon={<Quotes />} />
          <ToolbarButton onClick={handleToolbarClick} icon={<Script />} />
        </div>
      </div>

      <button
        onClick={handleToolbarClick}
        className='p-2 bg-red-2 hover:bg-red-2/80 transition-colors flex items-center justify-center rounded-xl w-10 h-10 cursor-pointer shadow-sm'
      >
        <Trash className='text-red-1' />
      </button>
    </div>
  );
};
