import { Block, Color } from 'data/types';
import { colorToFillColor } from 'lib/colors';

interface PaintOptions {
  board: (Block | null)[][];
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

interface Dimensions {
  width: number;
  height: number;
}

interface PainterOptions {
  columns: number;
  rows: number;
}

export class Painter {
  width: number;
  height: number;
  numRows: number;
  numColumns: number;

  board: (Block | null)[][];
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor(options: PainterOptions) {
    // this.setDimensions({ width: options.width, height: options.height });
    this.numRows = options.rows;
    this.numColumns = options.columns;
  }

  get blockWidth(): number {
    return Math.floor(this.width / this.numColumns);
  }

  get blockHeight(): number {
    return Math.floor(this.height / this.numRows);
  }

  setDimensions({ width, height }: Dimensions) {
    this.width = width;
    this.height = height;
  }

  paintBoard({ board, canvas, context }: PaintOptions): void {
    this.canvas = canvas;
    this.context = context;

    for (let row = 0; row < board.length; row++) {
      const boardRow = board[row];
      for (let col = 0; col < boardRow.length; col++) {
        const block = boardRow[col];
        if (!block) continue;

        if (!this.board || this.board[row][col].color !== block.color) {
          this.paintBlock(row, col, block.color);
        }
      }
    }
  }

  private paintBlock(row: number, col: number, color: Color): void {
    const { blockWidth, blockHeight } = this;
    this.context.fillStyle = colorToFillColor(color);
    this.context.fillRect(
      row * blockWidth,
      col * blockHeight,
      blockWidth,
      blockHeight,
    );
  }
}
