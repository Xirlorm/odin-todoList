'use strict';

// Scripts 
import Project from './scripts/projects';
import Ui from './scripts/ui';
import Lib from './scripts/lib';
// Stylesheet
import './styles/style.css';


(function() {
  // Toggle side menu display when menu button clicked 
  document.querySelector('.menu')
  .addEventListener('click', Ui.showMenu);

  // Hide Side menu when exit button is clicked 
  document.querySelector('.exit-nav')
  .addEventListener('click', Ui.hideMenu);

  // Change visibility of todo input form
  document.querySelector('.add-btn')
  .addEventListener('click', () => {
    Ui.toggleDisplay(
      document.querySelector('#todo-form'), 'block'
    );
  });

  // Show project input form when 'new project' button is clicked 
  document.querySelector('#new-project')
  .addEventListener('click', () => {
    Ui.toggleDisplay(
      document.querySelector('#project-form'), 'block'
    );
    Ui.hideMenu();
  })

  // Create a new todo task from information given by user
  document.querySelector('#create-todo')
  .addEventListener('click', (event) => {
    if (Lib.createTodo()) {
      Lib.clearFormInput();
      Lib.showTasks(Project.get());
    } 
    event.preventDefault();
  });

  // Create new project 
  document.querySelector('#create-project')
  .addEventListener('click', (event) => {
    Lib.createProject();
    Ui.toggleDisplay(
      document.querySelector('#project-form'), 'none'
    );
    Ui.showMenu();
    event.preventDefault();
  })

  // Set form date input value to current date 
  const dateInput: HTMLInputElement = document.querySelector('#todo-form #due-date');
  dateInput.value = new Date().toISOString().slice(0,10);

  // Display all tasks in the default project 
  Lib.showTasks(Project.get());

})();
