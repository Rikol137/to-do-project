import './style.css';
import populate from './modules/populatetask';
import { getAddedTodos, form } from './modules/newTask';
import deleteTask from './modules/removeTask';
import clearCompleted from './modules/clearCompleted';

const clearCompletedButton = document.getElementById('clearCompleted');

populate();
form.addEventListener('submit', getAddedTodos);

document.addEventListener('click', (e) => {
  if (e.target.className === 'fa fa-trash') {
    deleteTask(e.target.id);
  }
});

clearCompletedButton.addEventListener('click', clearCompleted);