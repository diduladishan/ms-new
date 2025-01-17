import { Board } from '@prisma/client';
import { BoardTitleForm } from './board-title-form';
import BoardOptions from './board-options';

interface BoardNavbarProps {
  data: Board;
}
export const BoardNavbar = async ({ data }: BoardNavbarProps) => {
  return (
    <div className="w-full md:w-[1192px] h-14 z-10 bg-black/50 fixed top-34 flex items-center px-6 gap-x-4 text-white rounded-md">
      <BoardTitleForm data={data} />
      <div className="ml-auto">
        <BoardOptions id={data.id} />
      </div>
    </div>
  );
};
