'use strict'

import todo from './todo'
import '../styles/style2.css'

export default {
  taskList: document.querySelector('main'),
  projectList: document.querySelector('.projects-list'),


  newTask(todo: todo) {
    // Todo Element
    const task = document.createElement('section')
    task.classList.add('task')
    task.setAttribute('data-todo-id', `${todo.id}`)
    // Container for task information shown by default
    const section = document.createElement('section')
    // Container for todo details not shown by default
    const details = document.createElement('section')
    details.style.display = 'none'
    details.classList.add('task-details')

    // Task status checkbox
    const taskStatus = document.createElement('input')
    taskStatus.type = 'checkbox'
    taskStatus.checked = todo.isComplete
    taskStatus.classList.add('task-status')
    // Task title
    const taskTitle = document.createElement('div')
    taskTitle.classList.add('task-title')
    taskTitle.innerText = todo.title
    taskTitle.title = todo.title
    if (todo.isComplete) taskTitle.classList.toggle('finished-task')
    // Task due date
    const taskDue = document.createElement('p')
    taskDue.innerText = todo.dueDate.replace('-', ' · ').replace('-', ' · ')
    taskDue.classList.add('task-due-date')
    // Task deletion button
    const deleteTask = document.createElement('div')
    deleteTask.innerText = '×'
    deleteTask.classList.add('remove-todo')
    // Task Edit button
    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    editBtn.classList.add('edit-task')
    editBtn.setAttribute('href', 'todo-form')
    // Task note
    const taskNote = document.createElement('section')
    taskNote.classList.add('task-note')
    const noteLabel = document.createElement('h3')
    noteLabel.innerText = 'Note'
    const note = document.createElement('p')
    note.textContent = todo.note
    taskNote.appendChild(noteLabel)
    taskNote.appendChild(note)

    const div1 = document.createElement('div')
    div1.appendChild(taskStatus)
    div1.appendChild(taskTitle)
    section.appendChild(div1)
    section.appendChild(deleteTask)
    task.appendChild(section)
    const container = document.createElement('section')
    container.appendChild(taskDue)
    container.appendChild(editBtn)
    details.appendChild(container)
    details.appendChild(taskNote)
    task.appendChild(details)

    return task
  },


  removeTask(task: HTMLElement) {
      this.taskList.removeChild(task)
  },


  addTask(task: HTMLElement) {
    this.taskList.appendChild(this.newTaskUI(task))
  },


  createProject(title: string) {
    const projectTitle = document.createElement('div')
    projectTitle.textContent = ' ' + title
    const deleteProject = document.createElement('button')
    deleteProject.textContent = '×'
    deleteProject.classList.add('delete-project')
    const project = document.createElement('li')
    project.setAttribute('data-project', title)
    project.appendChild(deleteProject)
    project.appendChild(projectTitle)

    return project
  },


  addProject(project: HTMLElement) {
    this.projectList.appendChild(project)
  },


  removeProject(project: HTMLElement) {
    this.projectList.removeChild(project)
  },


  setDisplay(element: HTMLElement, display = '') {
    if (element.style.display === '' || element.style.display === 'none')
      element.style.display = display
    else element.style.display = 'none'
  },
    

  showMenu() {
    const aside = document.querySelector('aside')
    // this.setDisplay(aside, 'block')
    document.querySelector('main').style.opacity = '0.2'
    document.querySelector('main').setAttribute('readonly', 'true')
    document.querySelector('header').style.opacity = '0.2'
    document.querySelector('header').setAttribute('readonly', 'true')
    aside.classList.toggle('show-menu')
  },


  hideMenu() {
    const aside = document.querySelector('aside')
    // this.setDisplay(aside, 'none')
    document.querySelector('main').style.opacity = '1'
    document.querySelector('main').setAttribute('readonly', 'false')
    document.querySelector('header').style.opacity = '1'
    document.querySelector('header').setAttribute('readonly', 'false')
    aside.classList.toggle('show-menu')
  },
}
