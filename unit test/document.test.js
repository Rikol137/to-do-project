/**
 * @jest-environment jsdom
 */

// eslint-disable-next-line import/no-unresolved, import/extensions
import createMockDocument from './mocks/documentMock.js';

describe('createMockDocument', () => {
  it('create a ul in the document', () => {
    createMockDocument();
    const list = document.querySelectorAll('.task-list');
    expect(list).toHaveLength(1);
  });
});