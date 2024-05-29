let sam=0;
let coincidences=0
export function sumOfElementsInArr(sam2) {
    if (sam == sam2) {
      coincidences += 1;
    } else {
      coincidences = 0;
    }
    sam = sam2;
    if (coincidences === 3 || sam2 === 0) {
     
      return false
    }else{
        return true
    }
  }