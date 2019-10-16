import { Location, StoreShape, Block, CurrentPieceInfo } from 'data/types';

import { getBlockColor, getBlockLocations } from 'lib/block';
import { safeUpdateBoardLocation } from 'lib/board';

export function getBoard(store: StoreShape): (Block | null)[][] {
  return store.board;
}

export function getCurrentPiece(store: StoreShape): CurrentPieceInfo {
  return store.currentPiece;
}

export function getBoardWithCurrentPiece(
  store: StoreShape,
): (Block | null)[][] {
  const board = getBoard(store);
  const currentPiece = getCurrentPiece(store);
  const pieceColor = getBlockColor(currentPiece.type);
  const pieceOffsets = getBlockLocations(currentPiece.type);
  pieceOffsets.forEach((location: Location) => {
    safeUpdateBoardLocation({
      row: location.row + currentPiece.position.row,
      column: location.column + currentPiece.position.column,
      color: pieceColor,
      board,
    });
  });
  return board;
}
