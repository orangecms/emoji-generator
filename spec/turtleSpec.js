import assert from 'assert';
import { turtleEmoji } from '../src/index';

describe('I like turtles', () => {
  it('should give me a turtle emoji', function(done) {
    assert.equal(turtleEmoji.next().value, '🐢');
    done();
  });
});
