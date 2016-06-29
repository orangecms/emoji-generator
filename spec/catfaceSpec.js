import assert from 'assert';
import { catfaceEmoji, kittyEmoji } from '../src/index';

const catfaces = [ '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀' ];

describe('I like cats', () => {
  it('should give me a cat face emoji', function(done) {
    let emoji = catfaceEmoji.next().value;
    expect(catfaces.indexOf(emoji)).toBeGreaterThan(-1);
    done();
  });

  it('should give me another cat face emoji', function(done) {
    let emoji = catfaceEmoji.next().value;
    expect(catfaces.indexOf(emoji)).toBeGreaterThan(-1);
    done();
  });

  it('should always give me a cat face emoji', function(done) {
    let emoji;
    for (let i=0; i<100; i++) {
      emoji = catfaceEmoji.next().value;
      expect(catfaces.indexOf(emoji)).toBeGreaterThan(-1);
    };
    done();
  });
});
