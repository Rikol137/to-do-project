import './style.css';
import populate from './modules/populatetask';
import { getAddedTodos, form } from './modules/newTask';
import deleteTask from './modules/removeTask';

populate();
form.addEventListener('submit', getAddedTodos);

document.addEventListener('click', (e) => {
  if (e.target.className === 'fa fa-trash') {
    deleteTask(e.target.id);
  }
});