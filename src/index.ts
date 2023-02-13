'use strict'

// Libraries and modules 
import Project from './scripts/projects'
import UI from './scripts/ui'
import Lib from './scripts/lib'
import Storage from './scripts/storage'
// Stylesheet
import './styles/style.css'
import './styles/style2.css'


(function() {
  const todoInputForm: HTMLElement = document.getElementById('todo-form')
  const projectInputForm: HTMLElement = document.getElementById('project-form')

  // Toggle side menu display when menu button clicked 
  document.querySelector('.menu')
  .addEventListener('click', () => UI.showMenu())

  // Hide Side menu when exit button is clicked 
  document.querySelector('.exit-nav')
  .addEventListener('click', () => UI.hideMenu())

  // Change visibility of todo input form
  document.querySelector('.add-btn').addEventListener('click', () => {
      // UI.setDisplay(todoInputForm, 'block')
      // UI.setDisplay(projectInputForm, 'none')
      todoInputForm.classList.toggle('show-todo-form')
      projectInputForm.classList.remove('show-project-form')
      document.getElementById('save-changes').style.display = 'none'
      document.getElementById('create-todo').style.display = 'inline'
    })

  // Show project input form when 'new project' button is clicked 
  document.getElementById('new-project').addEventListener('click', () => {
      todoInputForm.classList.remove('show-todo-form')
      projectInputForm.classList.toggle('show-project-form')
      // UI.setDisplay(projectInputForm, 'block')
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
      todoInputForm.classList.remove('show-todo-form')
      projectInputForm.classList.toggle('show-project-form')
      event.preventDefault()
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

  // Show default tasks when default project is clicked
  document.querySelector('.projects-list #default').addEventListener('click', () => {
      Project.currentProject = 'default'
      Lib.showTasks(Project.get())
      UI.hideMenu()
    })
  
  // Show tasks for today
  document.getElementById('today-tasks').addEventListener('click', () => {
      Lib.showTasks(Project.getTodayTasks())
      UI.hideMenu()
    })

  // Show user a checklist
  document.getElementById('checklist').addEventListener('click', () => {
      Lib.showTasks(Project.getChecklist())
      UI.hideMenu()
    })

  // Save changes to task
  document.getElementById('save-changes').addEventListener('click', (e) => {
      e.preventDefault()
      Lib.editTask()
    })

  // Set form date input value to current date 
  const dateInput: HTMLInputElement = 
    document.querySelector('#todo-form #due-date')
  dateInput.value = new Date().toISOString().slice(0,10)

  // Initialize todo memory
  Project.initializeData()

  // Show all available projects
  Storage.getKeys().forEach( project => {
    Lib.showProjects(project)
  } )

  // Show the default projects
  Lib.showTasks(Project.get())
})()
