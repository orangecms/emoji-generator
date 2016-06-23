import 'babel-regenerator-runtime';

export default function *emoji (min, max) {
  let current = min;
  while (true) {
    yield String.fromCodePoint(current);
    current++;
    if (current > max) current = min;
  }
}

export const kittyEmoji = emoji(0x1F638, 0x1F640);
export const catfaceEmoji = kittyEmoji;
export const turtleEmoji = emoji(128034, 128034);
export const noEvilEmoji = emoji(128586, 128588);
