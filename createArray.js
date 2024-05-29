export function createRandomArr(mas, sizeWorld) {
    for (let i = 0; i < sizeWorld; i++) {
      mas[i] = [];
      for (let k = 0; k < sizeWorld; k++) {
        let random = Math.random();
        if (random > 0.1) {
          mas[i][k] = 0;
        } else {
          mas[i][k] = 1;
        }
      }
    }
    return mas;
  }

export function createArr(mas, sizeWorld) {
    for (let i = 0; i < sizeWorld; i++) {
      mas[i] = [];
      for (let j = 0; j < sizeWorld; j++) {
        mas[i][j] = 0;
      }
    }
    return mas
  }