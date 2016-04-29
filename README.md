## About
This is an ES2015 Generator to provide you with the power of emoji.
It accepts two parameters which they will be created from using the `String.fromCodePoint()` function.
Two sets are provided by default: `kittyEmoji` and `turtleEmoji`.

## Installation
```bash
npm i -S emoji-generator
```

## Quick example
To get started, you can install babel-cli with the ES2015 preset, i.e.
```bash
npm i babel-cli babel-preset-es2015
```

and then simply create `emoji.js` containing
```javascript
const kitty = require('emoji-generator').kittyEmoji;
console.log(kitty.next().value);
```

and run it:
```bash
./node_modules/.bin/babel-node --presets es2015 < emoji.js
```

Note that you cannot use `import` in a REPL. In your code, you would otherwise `import { kittyEmoji as kitty } from 'emoji-generator';`.

To create your own set of emoji, just define one:
```javascript
import 'emoji-generator' as emoji;
let myEmoji = emoji(128030, 128034);
for (let i=0; i<10; i++) {
  console.log(myEmoji.next().value);
}
```

In a REPL, you cannot use let in a for loop, so instead:
```javascript
const emoji = require('emoji-generator').default;
let myEmoji = emoji(128030, 128034);
for (var i=0; i<10; i++) { console.log(myEmoji.next().value); }
```

## Resources
You will probably need a list of [emoji codes](http://unicode.org/emoji/charts/full-emoji-list.html). 🐞
