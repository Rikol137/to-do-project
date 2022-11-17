// eslint-disable-next-line import/extensions
import { createTodo, todo } from './displayTask.js';

const deleteTask = (index) => {
  todo.deleteTodo(index);
  todo.saveTodo();
  createTodo();
};

export default deleteTask;