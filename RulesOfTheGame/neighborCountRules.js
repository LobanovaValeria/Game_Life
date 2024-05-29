import { borderOne, borderTwo } from './borderConditions.js';
export function neighboursCounting(x, y, sizeWorld, mas) {
  let neighbours = 0;
  if (mas[borderOne(x, sizeWorld) + 1][y] == 1) neighbours++; 
  if (mas[borderTwo(x, sizeWorld) - 1][y] == 1) neighbours++; 
  if (mas[x][borderOne(y, sizeWorld) + 1] == 1) neighbours++; 
  if (mas[x][borderTwo(y, sizeWorld) - 1] == 1) neighbours++; 
  if (mas[borderOne(x, sizeWorld) + 1][borderOne(y, sizeWorld) + 1] == 1) neighbours++;
  if (mas[borderOne(x, sizeWorld) + 1][borderTwo(y, sizeWorld) - 1] == 1) neighbours++; 
  if (mas[borderTwo(x, sizeWorld) - 1][borderOne(y, sizeWorld) + 1] == 1) neighbours++; 
  if (mas[borderTwo(x, sizeWorld) - 1][borderTwo(y, sizeWorld) - 1] == 1) neighbours++; 
  return neighbours;
}
