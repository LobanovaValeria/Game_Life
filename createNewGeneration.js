import { draw } from "./drawingCells.js";
import { stopLife } from "./main.js";
import { neighboursCounting } from "./RulesOfTheGame/neighborCountRules.js";
import { sumOfElementsInArr } from "./RulesOfTheGame/rulesOfStop.js";
export function newGeneration(sizeWorld, mas, rowsAndColumns) {
    let mas2 = [];
    let sam2 = 0;
  
    for (let i = 0; i < sizeWorld; i++) {
      mas2[i] = [];
      for (let j = 0; j < sizeWorld; j++) {
        let neighbours = neighboursCounting(i, j, sizeWorld, mas);
  
        if (mas[i][j] === 0) {
          if (neighbours == 3) {
            mas2[i][j] = 1;
          } else {
            mas2[i][j] = 0;
          }
        } else {
          if (neighbours == 2 || neighbours == 3) {
            mas2[i][j] = 1;
          } else {
            mas2[i][j] = 0;
          }
        }
  
        sam2 = sam2 + mas2[i][j];
      }
    }
  
    stopLife(sumOfElementsInArr(sam2));
    mas = mas2;
    draw(mas, sizeWorld, rowsAndColumns);
    return mas;
  }