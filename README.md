## About
This is an ES2015 Generator to provide you with the power of emoji.
It accepts two parameters which they will be created from using the
`String.fromCodePoint()` function.

Three sets are provided by default:
- `catfaceEmoji` alias `kittyEmoji`
- `turtleEmoji`
- `noEvilEmoji` (like [emojiterator](https://github.com/rgbkrk/emojiterator))

## Installation
```bash
npm i -S emoji-generator
```

## Quick example
```javascript
const kitty = require('emoji-generator').kittyEmoji;
console.log(kitty.next().value);
```

## Resources
You will probably need a list of
[emoji codes](http://unicode.org/emoji/charts/full-emoji-list.html). 🐞
