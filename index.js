import { startLife, generated, exterminated, changeSizeWorld, manualInput, stopLife } from './main.js';
import { start, generateBtn, exterminateBtn, sizeInput, stop, canvas } from './elementsOfControls.js';

start.addEventListener('click', () => startLife());
generateBtn.addEventListener('click', () => generated());
exterminateBtn.addEventListener('click', () => exterminated());
sizeInput.addEventListener('change', (event) => changeSizeWorld(event.target.value));
stop.addEventListener('click', () => stopLife(false));
canvas.addEventListener('click', (event) => manualInput(event));

