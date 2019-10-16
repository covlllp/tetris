import { clone } from 'lodash';

import { BlockType } from 'data/types';

export function createEmptyBoard(height: number, width: number): null[][] {
  const row = [];
  for (let i = 0; i < width; i++) {
    row.push(null);
  }
  const board = [];
  for (let i = 0; i < height; i++) {
    const newRow = clone(row);
    board.push(newRow);
  }
  return board;
}

export function getRandomPiece(): BlockType {
  const blockTypes = [
    BlockType.S,
    BlockType.Z,
    BlockType.T,
    BlockType.L,
    BlockType.ReverseL,
    BlockType.Square,
    BlockType.Line,
  ];
  const index = Math.floor(Math.random() * blockTypes.length);
  return blockTypes[index];
}
