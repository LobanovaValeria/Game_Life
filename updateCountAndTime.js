const genTime = document.querySelector('.time');
const step = document.querySelector('.step');
export function updateCount(count) {
    step.innerHTML = count;
    
  }
export function updateGenTime(time) {
    genTime.innerHTML = time;
  }