export const enum Color {
  Green,
  Red,
  Blue,
  Orange,
  Purple,
  Cyan,
  Yellow,
  Black,
}

export interface StoreShape {
  // First index is row starting from bottom
  // Second index is column going left to right
  board: (Block | null)[][];
  currentPiece: CurrentPieceInfo;
}

export interface CurrentPieceInfo {
  type: BlockType;
  position: Location;
  direction: Direction;
}

export interface Block {
  color: Color;
}

export interface Location {
  row: number;
  column: number;
}

export const enum BlockType {
  S,
  Z,
  T,
  L,
  ReverseL,
  Square,
  Line,
}

export const enum Direction {
  North,
  South,
  East,
  West,
}
