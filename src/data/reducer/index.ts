import { BOARD_HEIGHT, BOARD_WIDTH } from 'data/constants';
import { StoreShape } from 'data/types';

import { createEmptyBoard } from './util';

const initialState: StoreShape = {
  board: createEmptyBoard(BOARD_HEIGHT, BOARD_WIDTH),
};

export function reducer(state = initialState): StoreShape {
  return state;
}
