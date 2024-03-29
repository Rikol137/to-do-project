/**
 * @jest-environment jsdom
 */

import createMockDocument from './mocks/documentMock';
import { getAddedTodos } from '../src/modules/newTask';
import { todo } from '../src/modules/displayTask';

function addInputDescription(value, input) {
  input.value = value;
}

describe('edit task', () => {
  it("edits the first task's description", () => {
    todo.allTodos = [];
    createMockDocument('description-1');
    localStorage.clear();
    const taskSection = document.querySelector('.task-list');
    const newTodo = document.getElementById('newToDo');
    getAddedTodos();
    addInputDescription('description-2', newTodo);
    getAddedTodos();
    addInputDescription('description-3', newTodo);
    getAddedTodos();
    const index = 1;
    const newDescription = 'edited-1';
    const paragraph = taskSection.children[0].children[index].querySelector(
      '#task-description',
    );
    paragraph.textContent = newDescription;

    todo.editTodo(paragraph, index);

    expect(todo.allTodos[index - 1].description).toEqual(newDescription);
  });
});