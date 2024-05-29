import { newGeneration } from './createNewGeneration.js';
import { updateCount, updateGenTime } from './updateCountAndTime.js';
import { createRandomArr, createArr } from './createArray.js';
import { draw } from './drawingCells.js';
import { sizeInput} from './elementsOfControls.js';
import { ctx } from './elementsOfControls.js';




let sizeWorld = sizeInput.value;
let rowsAndColumns = 500 / sizeWorld;
let mas = [];
let count = 0;
let setIntervalLife;
let notIsPlaying=true;
mas = createArr(mas, sizeWorld);


export function startLife() {
    if(notIsPlaying){
        setIntervalLife = setInterval(update, 400);
    }
}

export function generated() {
  count = 0;
  mas = createRandomArr(mas, sizeWorld);
  draw(mas, sizeWorld, rowsAndColumns);
}

export function exterminated() {
  ctx.clearRect(0, 0, 500, 500);
  mas = createArr(mas, sizeWorld);
}

export function manualInput(event) {
    if(notIsPlaying){
      
        count = 0;
        let x = event.offsetX;
        let y = event.offsetY;
        x = Math.floor(x / rowsAndColumns);
        y = Math.floor(y / rowsAndColumns);
        mas[x][y] = 1;
        draw(mas, sizeWorld, rowsAndColumns);
    
    }
}

export function stopLife(isPlay) {
  if (isPlay === false) {
    clearInterval(setIntervalLife);
    notIsPlaying=true;
  }else{
    notIsPlaying=false;
  }
}

export function changeSizeWorld(value) {
    
        if (value <= 10) {
            sizeInput.value = 10;
          } else if (value > 1000) {
            sizeInput.value = 1000;
          }
          sizeWorld = value;
          rowsAndColumns = 500 / value;
          mas=createArr(mas, sizeWorld);
          draw(mas, sizeWorld, rowsAndColumns);
    
}



function update() {
  const startGo = performance.now();
  mas=newGeneration(sizeWorld, mas, rowsAndColumns);
  const endGo = performance.now();
  let generationTime = `${Math.round(endGo - startGo)} мс`;
  updateGenTime(generationTime);
  updateCount(count);
  count++;
}
