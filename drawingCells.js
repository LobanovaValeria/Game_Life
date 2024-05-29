import { ctx } from "./elementsOfControls.js";
export function draw(mas, sizeWorld, rowsAndColumns) {
    ctx.clearRect(0, 0, 500, 500);
    for (let i = 0; i < sizeWorld; i++) {
      for (let j = 0; j < sizeWorld; j++) {
        if (mas[i][j] == 1) {
          ctx.fillRect(i * rowsAndColumns, j * rowsAndColumns, rowsAndColumns, rowsAndColumns);
        }
      }
    }
  }