'use strict'

import Ui from './ui';
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
    task.querySelector('.task-title').addEventListener('click', () => {
      const taskDetails: HTMLElement = task.querySelector('.task-details');
      Ui.toggleDisplay(taskDetails, 'block');
    });

    task.querySelector('.task-status').addEventListener('change', () => {
      // const id = task.getAttribute('data-todo-id');
      // Project.toggleTodoStatus(Project.currentProject, Number.parseInt(id));
      task.querySelector('.task-title').classList.toggle('finished-task');
    });

    task.querySelector('.delete').addEventListener('click', () => {
      const id = task.getAttribute('data-todo-id');
      Project.deleteTodo(
        Project.currentProject, Number.parseInt(id)
      );
      Ui.taskList.removeChild(task);
    });

    return task;
  },


  // Display a collection of todo to user
  showTasks(tasks: todo[]) {
    Ui.taskList.textContent = '';

    tasks.forEach((task) => {
      Ui.taskList.appendChild(
        this.addTaskEvents(Ui.newTaskUI(task))
      );
    });
  },


  // Using user defined values, add new todo to projects
  createTodo() {
    if (title.value.length > 1) {
      Project.addTodo(
        Project.currentProject,
        todo.new(
          title.value,
          dueDate.value,
          Number.parseInt(priority.value),
          false,
          note.value,
       ) 
      );
      return true;
    }

    alert("Error: Task title cannot be empty!")
    return false;
  },


  // Erase values entered into form by user
  clearFormInput() {
    const today = new Date().toISOString();

    title.value = '';
    dueDate.value = today.slice(0,10);
    priority.value = 'Priority';
    note.value = '';
  },

  createProject() {
    const title:HTMLInputElement = document.querySelector('#project-form #title');
    const projectTitle = title.value
    const projectExists = projectTitle in Project.data;

    if (projectTitle.length > 0 && !projectExists) {
      const project = Ui.createProject(projectTitle);
      Project.add(projectTitle);

      project.addEventListener('click', (event) => {
        event.stopPropagation();
        if (Project.currentProject !== projectTitle) {
          this.showTasks(Project.get(projectTitle));
          Project.currentProject = projectTitle;
        }
        Ui.hideMenu();
      });

      project.querySelector('.delete-project')
      .addEventListener('click', (event) => {
        event.stopPropagation();
        Project.del(projectTitle);
        this.showTasks(Project.get('default'));
        Project.currentProject = 'default';
        Ui.projectList.removeChild(project);
      })

      Ui.projectList.appendChild(project);
      this.showTasks(Project.get(projectTitle));
      title.value = '';
      return;
    }
    if (projectExists) {
      alert('Caution: Project already exists!!');
      this.showTasks(Project.get(projectTitle));
      return;
    }
    alert('Error: Project title cannot be empty');
  },

  // Delete the current project
  deleteCurrentProject() {
    Project.del(Project.currentProject);
    Project.currentProject = 'default';
    this.showTasks(Project.get(Project.currentProject));
    this.removeProjectFromList(Project.currentProject);
  },

  removeProjectFromList(projectName: string) {
    const menuProjectUi = document.querySelectorAll('#projects > li');
    menuProjectUi.forEach((project) => {
      alert(projectName)
      alert(project)
      if (!(projectName in Project.data))
        Ui.taskList.removeChild(project);
    })
  },
}
