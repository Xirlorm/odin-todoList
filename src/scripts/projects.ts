'use strict'

import todo from './todo'

export default class Project {
  static currentProject = 'default'
  static nextTaskId = 1202301

  static data: {[key: string]: todo[]} = {
    'default': [
      todo.new('Click/Tap todo title to see more...',
               '2023-04-19',
               1,
               true,
               '-_- Ha! You\'re now in my b·_·by trap! :)',
               this.nextTaskId++),
      todo.new('Take a stroll',
               '2020-11-15',
               2,
               false,
               'Testing your limits doesn\'t break you. Does it?',
               this.nextTaskId++),
      todo.new('Buy Rick a new Quantum physics textbook from the mall',
               '2023-07-28',
               2,
               true,
               'Oh heavens! My UI sucks! -_- Don\'t even talk about the logic',
               this.nextTaskId++),
    ],
  }

  // Get project 
  static get(projectName = 'default'): todo[] {
    if (projectName in this.data)
      return this.data[projectName]
    return []
  }


  // Add project
  static add(projectName: string) {
    if (!(projectName in this.data))
      this.data[projectName] = []
  }


  // Delete project
  static del(projectName: string) {
    if (projectName !== 'default')
      delete this.data[projectName]
  }

  
  // Add todo item to a project
  static addTodo(projectName = 'default', value: todo) {
    if (projectName in this.data)
      this.add(projectName)

    this.data[projectName].push(value)
  }


  // (Un)check todo task 
  static toggleTodoStatus(projectName: string, taskId: number) {
    this.data[projectName].forEach((task) => {
      if (task.id == taskId) task.toggleCompletion
    })
  }

  // Change todo task information
  static updateTodo(newTask: todo) {
    this.data[this.currentProject] = 
      this.data[this.currentProject].map((task) => {
        if (task.id === newTask.id)
          return newTask
        return task
      })
  }
  
  // Delete todo item 
  static deleteTodo(projectName: string, taskId: number) {
    this.data[projectName] = 
      this.data[projectName].map((task) => {
        if (taskId != task.id) return task
      })
  }


  // Check existence of a project
  static hasProject(projectName: string) {
    return projectName in this.data
  }

  // Get tasks with today's date
  static getTodayTasks() {
    const todayTasks: todo[] = []
    const today = new Date().toISOString().slice(0, 10)

    Object.keys(this.data).forEach( project => {
      this.data[project].forEach( (task) => {
        if (task.dueDate == today)
          todayTasks.push(task)
      })
    })

    return todayTasks
  }

  // Get a checklist of all todo tasks
  static getChecklist() {
    const checklist: todo[] = []

    Object.keys(this.data).forEach( project => {
      this.data[project].forEach( (task) => {
        if (task.isComplete === false) checklist.push(task)
      })
    })

    Object.keys(this.data).forEach( project => {
      this.data[project].forEach( (task) => {
        if (task.isComplete === true) checklist.push(task)
      })
    })

    return checklist
  }

}
