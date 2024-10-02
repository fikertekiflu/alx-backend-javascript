import taskBlock from './1-block-scoped.js';

describe('taskBlock tests', () => {
  it('returns [false, true] when passed false', () => {
    expect.assertions(1);
    expect(taskBlock(false)).toStrictEqual([false, true]);
  });

  it('returns [false, true] when passed true', () => {
    expect.assertions(1);
    expect(taskBlock(true)).toStrictEqual([false, true]);
  });
});
