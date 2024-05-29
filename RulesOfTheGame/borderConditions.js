export function borderOne(i, size) {
    if (i == size - 1) {
      return -1;
    } else {
      return i;
    }
  }

export function borderTwo(i, size) {
  if (i == 0) {
    return size - 1;
  } else {
    return i;
  }
}