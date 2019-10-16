import { BlockType, Color, Location } from 'data/types';

export function getBlockColor(block: BlockType): Color {
  switch (block) {
    case BlockType.S:
      return Color.Green;
    case BlockType.Z:
      return Color.Red;
    case BlockType.T:
      return Color.Purple;
    case BlockType.L:
      return Color.Blue;
    case BlockType.ReverseL:
      return Color.Orange;
    case BlockType.Square:
      return Color.Yellow;
    case BlockType.Line:
      return Color.Cyan;
    default:
      return Color.Black;
  }
}

export function getBlockLocations(block: BlockType): Location[] {
  switch (block) {
    case BlockType.S:
      return [
        {
          row: 0,
          column: 0,
        },
        {
          row: 0,
          column: 1,
        },
        {
          row: 1,
          column: 1,
        },
        {
          row: -1,
          column: 0,
        },
      ];
    case BlockType.Z:
      return [
        {
          row: 0,
          column: 0,
        },
        {
          row: 0,
          column: 1,
        },
        {
          row: -1,
          column: 1,
        },
        {
          row: 1,
          column: 0,
        },
      ];
    case BlockType.T:
      return [
        {
          row: 0,
          column: 0,
        },
        {
          row: 0,
          column: 1,
        },
        {
          row: 1,
          column: 0,
        },
        {
          row: -1,
          column: 0,
        },
      ];
    case BlockType.L:
      return [
        {
          row: 0,
          column: 0,
        },
        {
          row: 1,
          column: 0,
        },
        {
          row: 1,
          column: 1,
        },
        {
          row: -1,
          column: 0,
        },
      ];
    case BlockType.ReverseL:
      return [
        {
          row: 0,
          column: 0,
        },
        {
          row: -1,
          column: 0,
        },
        {
          row: -1,
          column: 1,
        },
        {
          row: 1,
          column: 0,
        },
      ];
    case BlockType.Square:
      return [
        {
          row: 0,
          column: 0,
        },
        {
          row: 0,
          column: 1,
        },
        {
          row: 1,
          column: 1,
        },
        {
          row: 1,
          column: 0,
        },
      ];
    case BlockType.Line:
      return [
        {
          row: 0,
          column: 0,
        },
        {
          row: 1,
          column: 0,
        },
        {
          row: 2,
          column: 0,
        },
        {
          row: -1,
          column: 0,
        },
      ];
  }
}
