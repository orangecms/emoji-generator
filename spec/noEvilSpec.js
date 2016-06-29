import { noEvilEmoji } from '../src/index';

const noEvil = [ '🙊', '🙋', '🙌' ];

describe('Three wise monkeys', () => {
  it('should give me a see no evil emoji', function(done) {
    let emoji = noEvilEmoji.next().value;
    expect(emoji).toEqual(noEvil[0]);
    done();
  });

  it('should give me a hear no evil emoji', function(done) {
    let emoji = noEvilEmoji.next().value;
    expect(emoji).toEqual(noEvil[1]);
    done();
  });

  it('should give a speak no evil emoji', function(done) {
    let emoji = noEvilEmoji.next().value;
    expect(emoji).toEqual(noEvil[2]);
    done();
  });

  it('should always give a no evil emoji', function(done) {
    let emoji;
    for (let i=0; i<10; i++) {
      emoji = noEvilEmoji.next().value;
      expect(noEvil.indexOf(emoji)).toBeGreaterThan(-1);
    };
    done();
  });
});
