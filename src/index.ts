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
    Ui.toggleDisplay(document.querySelector('#todo-form'), 'block');
  });

  // Show project input form when 'new project' button is clicked 
  document.querySelector('#new-project')
  .addEventListener('click', () => {
    Ui.toggleDisplay(document.querySelector('#project-form'), 'block');
    Ui.hideMenu();
  })

  // Create a new todo task from information given by user
  document.querySelector('#create-todo')
  .addEventListener('click', (event) => {
    if (Lib.createTodo()) {
      Lib.clearFormInput();
      Lib.showTasks(Project.get(Project.currentProject));
    } 
    event.preventDefault();
  });

  // Show form input to create new project
  document.querySelector('#create-project')
  .addEventListener('click', (event) => {
    Ui.toggleDisplay(
      document.querySelector('#project-form'), 'none'
    );
    Ui.showMenu();
    Lib.createProject();
    event.preventDefault();
  })

  // Whow confirmation menu when project deletion is triggered
  document.querySelector('#delete-project')
  .addEventListener('click', () => {
      const confirmation: HTMLElement = 
        document.querySelector('.confirmation');
      confirmation.style.display = 'block';
  })

  // Close popup if user selects 'no' to deletion of current project
  document.querySelector('.confirmation #no')
  .addEventListener('click', () => {
    Ui.toggleDisplay(document.querySelector('.confirmation'))
  })

  // Delete project if user selects 'yes' to deletion of current projectdeleteProjec
  document.querySelector('.confirmation #yes')
  .addEventListener('click', () => {
    Lib.deleteCurrentProject();
    const confirmation: HTMLElement = 
      document.querySelector('.confirmation');
    confirmation.style.display = 'none';
  })

  // Show default projects when default project is clicked
  document.querySelector('#projects #default')
  .addEventListener('click', () => {
    const defaultProjects = Project.get();
    Lib.showTasks(defaultProjects);
    Project.currentProject = 'default';
    Ui.hideMenu();
  });

  // Set form date input value to current date 
  const dateInput: HTMLInputElement = 
    document.querySelector('#todo-form #due-date');
  dateInput.value = new Date().toISOString().slice(0,10);

  // Display all tasks in the default project 
  Lib.showTasks(Project.get());

})();
