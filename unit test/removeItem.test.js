/**
 * @jest-environment jsdom
 */

import createMockDocument from './mocks/documentMock';
import { getAddedTodos } from '../src/modules/newTask';
import { todo } from '../src/modules/displayTask';
import deleteTask from '../src/modules/removeTask';

function addInputDescription(value, input) {
  input.value = value;
}

describe('add item', () => {
  it('remove the exact number of task elements to the list container ', () => {
    todo.allTodos = [];
    createMockDocument('description-1');
    localStorage.clear();

    const taskSection = document.querySelector('.task-list');
    getAddedTodos();
    deleteTask(1);
    expect(taskSection.children.length).toEqual(
      0,
    );
  });

  it('remove the exact number of task elements to the list container ', () => {
    todo.allTodos = [];
    createMockDocument('description-1');
    localStorage.clear();

    const taskSection = document.querySelector('.task-list');
    const newTodo = document.getElementById('newToDo');

    getAddedTodos();
    addInputDescription('description-2', newTodo);
    getAddedTodos();

    deleteTask(2);

    expect(taskSection.children[0].children.length).toEqual(
      1,
    );
  });

  it('remove the exact number of task elements to the list container ', () => {
    todo.allTodos = [];
    createMockDocument('description-1');
    localStorage.clear();

    const taskSection = document.querySelector('.task-list');
    const newTodo = document.getElementById('newToDo');

    getAddedTodos();
    addInputDescription('description-2', newTodo);
    getAddedTodos();

    deleteTask(1);

    addInputDescription('description-3', newTodo);
    getAddedTodos();

    expect(taskSection.children[0].children.length).toEqual(
      2,
    );
  });
});