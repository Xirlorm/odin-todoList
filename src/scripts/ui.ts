'use strict'

import todo from './todo';

export default {
  // Task container
  taskList: document.querySelector('#tasks-list'),
  projectList: document.querySelector('.projects'),


  newTaskUI (todo: todo): HTMLElement {
    // Todo Element
    const task = document.createElement('section');
    task.classList.add('task');
    task.setAttribute('data-todo-id', `${todo.id}`);
    // Container for task information shown by default
    const section = document.createElement('section');
    // Container for todo details not shown by default
    const details = document.createElement('section');
    details.style.display = 'none';
    details.classList.add('task-details');

    // Task status checkbox
    const taskStatus = document.createElement('input');
    taskStatus.type = 'checkbox';
    taskStatus.checked = todo.isComplete;
    taskStatus.classList.add('task-status');
    // Task title
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.innerText = todo.title;
    taskTitle.title = todo.title;
    if (todo.isComplete) taskTitle.classList.toggle('finished-task');
    // Task due date
    const taskDue = document.createElement('p');
    taskDue.innerText = todo.dueDate.replace('/', ' · ').replace('/', ' · ');
    taskDue.classList.add('task-due-date');
    // Task deletion button
    const deleteTask = document.createElement('div');
    deleteTask.innerText = '×';
    deleteTask.classList.add('delete');
    // Task Edit button
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add('edit-task');
    // Task note
    const taskNote = document.createElement('section');
    taskNote.classList.add('task-note');
    const noteLabel = document.createElement('h3');
    noteLabel.innerText = 'Note:';
    const note = document.createElement('p');
    note.textContent = todo.note;
    taskNote.appendChild(noteLabel);
    taskNote.appendChild(note)

    const div1 = document.createElement('div');
    div1.appendChild(taskStatus);
    div1.appendChild(taskTitle);
    section.appendChild(div1);
    section.appendChild(deleteTask);
    task.appendChild(section);
    const container = document.createElement('section');
    container.appendChild(taskDue);
    container.appendChild(editBtn);
    details.appendChild(container);
    details.appendChild(taskNote);
    task.appendChild(details);

    return task;
  },


  removeTask(task: HTMLElement) {
      this.taskList.removeChild(task);
  },


  addTask(task: HTMLElement) {
    this.taskList.appendChild(this.newTaskUI(task));
  },


  createProject(title: string) {
    const project = document.createElement('li');
    const projectTitle = document.createElement('h4');
    const deleteProject = document.createElement('button');
    projectTitle.textContent = ' ' + title;
    deleteProject.textContent = '×';
    deleteProject.classList.add('delete-project');
    project.setAttribute('data-project-name', title);
    project.appendChild(deleteProject);
    project.appendChild(projectTitle);

    return project;
  },


  deleteProject(title: HTMLElement) {
    this.projectList.removeChild(title);
  },


  toggleDisplay(element: HTMLElement, display = 'initial') {
    if (!element.style.display || element.style.display == 'none')
      element.style.display = display;
    else element.style.display = 'none';
  },
  
    
  showMenu() {
    const aside = document.querySelector('aside');
    if (aside.style.display != 'initial') aside.style.display = 'initial';
    document.querySelector('main').style.opacity = '0.2';
    document.querySelector('header').style.opacity = '0.2';
  },

  hideMenu() {
      document.querySelector('aside').style.display = 'none';
      document.querySelector('main').style.opacity = '1';
      document.querySelector('header').style.opacity = '1';
  }
}
