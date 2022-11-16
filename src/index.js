import './style.css';
// eslint-disable-next-line import/no-unresolved, import/extensions
import populate from './module/populatetask.js';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getAddedTodos, form } from './module/newTask.js';
// eslint-disable-next-line import/no-unresolved, import/extensions
import deleteTask from './module/removeTask.js';

populate();
form.addEventListener('submit', getAddedTodos);

document.addEventListener('click', (e) => {
  if (e.target.className === 'fa fa-trash') {
    deleteTask(e.target.id);
  }
});