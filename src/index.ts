'use strict'

// Scripts 
import Project from './scripts/projects'
import UI from './scripts/ui'
import Lib from './scripts/lib'
// Stylesheet
import './styles/style.css'


(function() {
  // Toggle side menu display when menu button clicked 
  document.querySelector('.menu')
  .addEventListener('click', () => UI.showMenu())

  // Hide Side menu when exit button is clicked 
  document.querySelector('.exit-nav')
  .addEventListener('click', () => UI.hideMenu())

  // Change visibility of todo input form
  document.querySelector('.add-btn').addEventListener('click', () => {
      UI.setDisplay(document.querySelector('#todo-form'), 'block')
    })

  // Show project input form when 'new project' button is clicked 
  document.getElementById('new-project').addEventListener('click', () => {
      UI.setDisplay(document.querySelector('#project-form'), 'block')
      UI.hideMenu()
    })

  // Create a new todo task from information given by user
  document.getElementById('create-todo').addEventListener('click', (event) => {
      event.preventDefault()
      if (Lib.createTodo()) {
        Lib.clearFormInput()
        Lib.showTasks(Project.get(Project.currentProject))
      } 
    })

  // Show form input to create new project
  document.getElementById('create-project').addEventListener('click', (event) => {
      event.preventDefault()
      UI.setDisplay(document.querySelector('#project-form'), 'none')
      UI.showMenu()
      Lib.newProject()
    })

  // Whow confirmation menu when project deletion is triggered
  document.getElementById('delete-project').addEventListener('click', () => {
      const confirmation: HTMLElement =
        document.querySelector('.confirmation')
      UI.setDisplay(confirmation, 'block')
    })

  // Close popup if user selects 'no' to deletion of current project
  document.querySelector('.confirmation #no').addEventListener('click', () => {
      UI.setDisplay(document.querySelector('.confirmation'), 'none')
    })

  // Delete project if user selects 'yes' to deletion of current projectdeleteProjec
  document.querySelector('.confirmation #yes').addEventListener('click', () => {
      Lib.deleteCurrentProject()
      UI.setDisplay(document.querySelector('.confirmation'), 'none')
    })

  // Show default projects when default project is clicked
  document.querySelector('#projects #default').addEventListener('click', () => {
      const defaultProjects = Project.get()
      Lib.showTasks(defaultProjects)
      Project.currentProject = 'default'
      UI.hideMenu()
    })
  
  // Show tasks for today
  document.getElementById('today-tasks').addEventListener('click', () => {
      UI.taskList.textContent = ''
      Project.getTodayTasks().forEach(task => {
        UI.taskList.appendChild(Lib.addTaskEvents(UI.newTask(task), task))
        alert()
        UI.hideMenu()
      })
    })

  // Show user a checklist
  document.getElementById('checklist').addEventListener('click', () => {
      UI.taskList.textContent = ''
      Project.getChecklist().forEach(task => {
        UI.taskList.appendChild(Lib.addTaskEvents(UI.newTask(task), task))
        UI.hideMenu()
      })
    })

  // Save changes to task
  document.getElementById('save-changes').addEventListener('click', (e) => {
      Lib.editTask()
      e.preventDefault()
    })

  // Set form date input value to current date 
  const dateInput: HTMLInputElement = 
    document.querySelector('#todo-form #due-date')
  dateInput.value = new Date().toISOString().slice(0,10)

  // Display all tasks in the default project 
  Lib.showTasks(Project.get())
})()
