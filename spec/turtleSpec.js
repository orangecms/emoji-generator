import assert from 'assert';
import { turtleEmoji } from '../';

describe('I like turtles', () => {
  it('should give me a turtle emoji', function(done) {
    assert.equal(turtleEmoji.next().value, '🐢');
    done();
  });
});
