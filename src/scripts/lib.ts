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
    Project.add(title.value);
    Ui.projectList.appendChild(Ui.createProject(title.value));
    title.value = '';
  }
}
