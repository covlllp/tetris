import { Color, Block } from 'data/types';

interface UpdateBoardParams {
  board: (Block | null)[][];
  row: number;
  column: number;
  color: Color;
}

export function safeUpdateBoardLocation({
  board,
  row,
  column,
  color,
}: UpdateBoardParams): void {
  console.log(row);
  console.log(board.length);
  console.log(column);
  console.log(board[0].length);
  if (
    row < 0 ||
    column < 0 ||
    row >= board.length ||
    column >= board[0].length ||
    !!board[row][column]
  )
    return;
  board[row][column] = { color };
}
