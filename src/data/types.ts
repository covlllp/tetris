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
}

export interface Block {
  color: Color;
}
