function *emoji (min, max) {
  let current = min;
  while (true) {
    yield String.fromCodePoint(current);
    current++;
    if (current > max) current = min;
  }
}

module.exports = {
  default: emoji,
  kittyEmoji: emoji(0x1F638, 0x1F640),
  turtleEmoji: emoji(128034, 128034)
};
