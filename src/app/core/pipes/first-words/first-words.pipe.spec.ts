import { FirstWordsPipe } from './first-words.pipe';

describe('FirstWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstWordsPipe();
    expect(pipe).toBeTruthy();
  });
});
