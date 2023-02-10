'use strict'

import UI from './ui'
import Project from './projects'
import todo from './todo'

const todoForm: HTMLElement = document.querySelector('#todo-form')
const title: HTMLInputElement = todoForm.querySelector('#title')
const dueDate: HTMLInputElement = todoForm.querySelector('#due-date')
const priority: HTMLInputElement = todoForm.querySelector('#priority')
const note: HTMLInputElement = todoForm.querySelector('#note')

export default {
  // Holder for tasks to edit
  taskToEdit: todo,


  // Add todo actions to it's UI
  addTaskEvents(task: HTMLElement, taskData: todo) {
    const taskId = parseInt(task.getAttribute('data-todo-id'))

    // Show details of the task when title is clicked
    task.querySelector('.task-title').addEventListener('click', () => {
      const taskDetails: HTMLElement = task.querySelector('.task-details')
      UI.setDisplay(taskDetails, 'block')
    })
    // Toggle status and show changes when status is clicked
    task.querySelector('.task-status').addEventListener('change', () => {
      task.querySelector('.task-title')
        .classList.toggle('finished-task')
      Project.toggleTodoStatus(Project.currentProject, taskId)
    })
    // Delete task
    task.querySelector('.remove-todo').addEventListener('click', () => {
      Project.deleteTodo(Project.currentProject, taskId)
      UI.taskList.removeChild(task)
    })
    // Edit task
    task.querySelector('.edit-task').addEventListener('click', () => {
      this.taskToEdit = taskData
      const changeTodoBtn = document.getElementById('save-changes')
      todoForm.style.display = 'block'
      UI.setDisplay(changeTodoBtn, 'inline')
      UI.setDisplay(document.getElementById('create-todo'), 'none')

      title.value = taskData.title
      dueDate.value = taskData.dueDate
      title.value = taskData.title
      note.value = taskData.note
      priority.value = `${taskData.priority}`

    })

    return task
  },


  // Edit a task
  editTask() {
    todoForm.style.display = 'none'
    UI.setDisplay(document.getElementById('create-todo'), 'inline')
    UI.setDisplay(document.getElementById('save-changes'), 'none')
    Project.updateTodo(
      todo.new(
        title.value,
        dueDate.value,
        parseInt(priority.value),
        this.taskToEdit.isComplete,
        note.value,
        this.taskToEdit.id,
      )
    )
    this.clearFormInput()
    this.showTasks(Project.get(Project.currentProject))
  },

  // Display a collection of todo to user
  showTasks(tasks: todo[]) {
    UI.taskList.textContent = ''
    tasks.forEach( task => {
      UI.taskList.appendChild(
        this.addTaskEvents(UI.newTask(task), task)
      )
    })
  },


  // Using user defined values, add new todo to projects
  createTodo() {
    if (title.value.length < 1) return false

    Project.addTodo( Project.currentProject,
      todo.new(
        title.value,
        dueDate.value,
        Number.parseInt(priority.value),
        false,
        note.value,
        Project.nextTaskId++,
      ) 
    )

    return true
  },


  // Erase values entered into form by user
  clearFormInput() {
    const today = new Date().toISOString()
    title.value = ''
    dueDate.value = today.slice(0,10)
    priority.value = 'Priority'
    note.value = ''
  },


  // Create new project
  newProject() {
    const projectTitleElement: HTMLInputElement =
      document.querySelector('#project-form #title')
    const projectTitle = projectTitleElement.value
    const projectExists = projectTitle in Project.data

    if (projectTitle.length > 0 && !projectExists) {
      const projectUI = UI.createProject(projectTitle)
      Project.add(projectTitle)

      projectUI.addEventListener('click', (event) => {
        event.stopPropagation()
        this.showTasks(Project.get(projectTitle))
        UI.hideMenu()

        if (Project.currentProject !== projectTitle)
          Project.currentProject = projectTitle
      })
 
      projectUI.querySelector('.delete-project')
        .addEventListener('click', (event) => {
      alert('$')
          event.stopPropagation()
          Project.del(projectTitle)
          UI.removeProject(projectUI)
          Project.currentProject = 'default'
          this.showTasks(Project.get())
        })

      UI.addProject(projectUI)
      this.showTasks(Project.get(projectTitle))
      projectTitleElement.value = ''
    } else if (projectExists) {
      alert('Caution: Project already exists!!')
      this.showTasks(Project.get(projectTitle))
    }
  },


  // Delete the current project
  deleteCurrentProject() {
    const project = UI.projectList.getElementsByTagName('li')
    for (let i = 0; i < project.length; ++i) {
      const projectName = project[i].getAttribute('data-project-name')
      if (projectName === Project.currentProject)
        UI.removeProject(project[i])
    }
    Project.del(Project.currentProject)
    Project.currentProject = 'default'
    this.showTasks(Project.get())
  },

}
