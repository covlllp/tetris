import { BOARD_HEIGHT, BOARD_WIDTH } from 'data/constants';
import { StoreShape, Direction } from 'data/types';

import { createEmptyBoard, getRandomPiece } from './util';

const initialState: StoreShape = {
  board: createEmptyBoard(BOARD_HEIGHT, BOARD_WIDTH),
  currentPiece: {
    position: {
      row: BOARD_HEIGHT - 1,
      column: Math.floor(BOARD_WIDTH / 2),
    },
    type: getRandomPiece(),
    direction: Direction.North,
  },
};

export function reducer(state = initialState): StoreShape {
  return state;
}
