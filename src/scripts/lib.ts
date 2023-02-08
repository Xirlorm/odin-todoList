'use strict'

import UI from './ui';
import Project from './projects';
import todo from './todo';

const todoForm: HTMLElement = document.querySelector('#todo-form');
const title: HTMLInputElement = todoForm.querySelector('#title');
const dueDate: HTMLInputElement = todoForm.querySelector('#due-date');
const priority: HTMLInputElement = todoForm.querySelector('#priority');
const note: HTMLInputElement = todoForm.querySelector('#note');

export default {
  // Add events to todo elements
  addTaskEvents(task: HTMLElement) {
    const taskId = parseInt(task.getAttribute('data-todo-id'))
    // Show details when title is clicked
    task.querySelector('.task-title').addEventListener('click', () => {
      const taskDetails: HTMLElement = task.querySelector('.task-details');
      UI.toggleDisplay(taskDetails, 'block');
    });
    // Toggle status and show changes when status is clicked
    task.querySelector('.task-status').addEventListener('change', () => {
      task.querySelector('.task-title')
        .classList.toggle('finished-task');
      Project.toggleTodoStatus(Project.currentProject, taskId)
    });
    // Delete a task
    task.querySelector('.delete').addEventListener('click', () => {
      Project.deleteTodo(Project.currentProject, taskId);
      UI.taskList.removeChild(task);
    });

    return task;
  },


  // Display a collection of todo to user
  showTasks(tasks: todo[]) {
    UI.taskList.textContent = '';

    tasks.forEach((task) => {
      UI.taskList.appendChild(
        this.addTaskEvents(UI.newTaskUI(task))
      );
    });
  },


  // Using user defined values, add new todo to projects
  createTodo() {
    if (title.value.length < 1) return false

    Project.addTodo(
      Project.currentProject,
      todo.new(
        title.value,
        dueDate.value,
        Number.parseInt(priority.value),
        false,
        note.value
      ) 
    );

    return true;
  },


  // Erase values entered into form by user
  clearFormInput() {
    const today = new Date().toISOString();
    title.value = '';
    dueDate.value = today.slice(0,10);
    priority.value = 'Priority';
    note.value = '';
  },

  newProject() {
    const projectTitleElement: HTMLInputElement =
      document.querySelector('#project-form #title');
    const projectTitle = projectTitleElement.value
    const projectExists = projectTitle in Project.data;

    if (projectTitle.length > 0 && !projectExists) {
      const projectUI = UI.createProject(projectTitle);
      Project.add(projectTitle);

      projectUI.addEventListener('click', (event) => {
        event.stopPropagation();

        this.showTasks(Project.get(projectTitle));
        UI.hideMenu();
        if (Project.currentProject !== projectTitle)
          Project.currentProject = projectTitle;
      });
 
      projectUI.querySelector('.delete-project')
        .addEventListener('click', (event) => {
          event.stopPropagation();
          Project.del(projectTitle);
          this.showTasks(Project.get('default'));
          Project.currentProject = 'default';
          UI.projectList.removeChild(projectUI);
        })

      UI.projectList.appendChild(projectUI);
      this.showTasks(Project.get(projectTitle));
      projectTitleElement.value = '';
    } else if (projectExists) {
      alert('Caution: Project already exists!!');
      this.showTasks(Project.get(projectTitle));
    }
  },

  // Delete the current project
  deleteCurrentProject() {
    const project = UI.projectList.getElementsByTagName('li');
    alert(project.length)

    for (let i = 0; i < project.length; ++i) {
      const projectName = project[i].getAttribute('data-project-name')
      if (projectName === Project.currentProject)
        UI.projectList.removeChild(project[i]);
    }

    Project.del(Project.currentProject);
    Project.currentProject = 'default';
    this.showTasks(Project.get('default'));
  },
}
