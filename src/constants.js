function rgbToFillStyle(r, g, b, a) {
  if (a === undefined) {
    return ["rgb(", r, ",", g, ",", b, ")"].join('');
  } else {
    return ["rgba(", r, ",", g, ",", b, ",", a, ")"].join('');
  }
}