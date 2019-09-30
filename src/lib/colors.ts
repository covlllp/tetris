import { Color } from 'data/types';

export function colorToFillColor(color: Color): string {
  switch (color) {
    case Color.Black:
      return 'black';
    case Color.Green:
      return 'green';
    case Color.Red:
      return 'red';
    case Color.Blue:
      return 'blue';
    case Color.Orange:
      return 'orange';
    case Color.Purple:
      return 'purple';
    case Color.Cyan:
      return 'cyan';
    case Color.Yellow:
      return 'yellow';
    default:
      return 'black';
  }
}
