function getColorRaiting(raiting: number): string {
  if (raiting >= 8) {
    return "rgba(165, 148, 0, 1)";
  } else if (raiting < 8 && raiting >= 7) {
    return "rgba(48, 142, 33, 1)";
  } else if (raiting < 7 && raiting >= 4) {
    return "rgba(119, 119, 119, 1)";
  } else {
    return "rgba(200, 32, 32, 1)";
  }
}

export default getColorRaiting;
