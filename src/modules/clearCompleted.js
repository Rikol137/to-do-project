import { createTodo, todo } from './displayTask';

const clearCompleted = () => {
  todo.clearCompleted();
  createTodo();
};

export default clearCompleted;