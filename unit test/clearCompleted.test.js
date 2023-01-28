/**
 * @jest-environment jsdom
 */

import createMockDocument from './mocks/documentMock';
import { getAddedTodos } from '../src/modules/newTask';
import { todo } from '../src/modules/displayTask';
import clearCompleted from '../src/modules/clearCompleted';

function addInputDescription(value, input) {
  input.value = value;
}

describe('clear completed task', () => {
  it(' delete one element using clear completed', () => {
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
    const checkbox = taskSection.children[0].children[index].querySelector('#checkbox');
    checkbox.checked = true;

    todo.completedTodo(checkbox.checked, index);
    clearCompleted();

    expect(todo.allTodos.length).toEqual(
      2,
    );
  });
});