function clothesWear(temp) {
  if (temp >= 30) {
    return "It's hot outside, wear light clothes.";
  } else if (temp >= 20) {
    return "The weather is warm, a t-shirt would be fine.";
  } else if (temp >= 10) {
    return "It's a bit chilly, consider wearing a sweater.";
  } else {
    return "It's cold outside, wear a coat and warm clothes.";
  }
}

console.log(clothesWear(32));
