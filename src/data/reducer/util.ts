import { Color } from 'data/types';
import { clone } from 'lodash';

export function createEmptyBoard(height: number, width: number): null[][] {
  const row = [];
  for (let i = 0; i < width; i++) {
    row.push(null);
  }
  const board = [];
  for (let i = 0; i < height; i++) {
    const newRow = clone(row);
    const j = i % width;
    newRow[j] = { color: Color.Blue };
    board.push(newRow);
  }
  return board;
}
