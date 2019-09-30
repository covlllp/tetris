import { StoreShape, Block } from 'data/types';

export function getBoard(store: StoreShape): (Block | null)[][] {
  return store.board;
}
