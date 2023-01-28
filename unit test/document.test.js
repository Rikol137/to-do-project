/**
 * @jest-environment jsdom
 */

import createMockDocument from './mocks/documentMock';

describe('createMockDocument', () => {
  it('create a ul in the document', () => {
    createMockDocument();
    const list = document.querySelectorAll('.task-list');
    expect(list).toHaveLength(1);
  });
});