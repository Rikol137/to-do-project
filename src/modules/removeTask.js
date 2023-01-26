import { createTodo, todo } from './displayTask';

const deleteTask = (index) => {
  todo.deleteTodo(index);
  todo.saveTodo();
  createTodo();
};

export default deleteTask;