import { taskFirst, taskNext } from './0-constants.js';

describe('testing constants', () => {
  it('taskFirst returns the correct string', () => {
    expect.assertions(1);
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  it('taskNext returns the correct string', () => {
    expect.assertions(1);
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
