'use strict';

import todo from './todo';

export default class Project {
  static currentProject = 'default';
  static nextTaskId = 1202301;

  static data: {[key: string]: todo[]} = {
    'default': [
      todo.new('Make breakfast', '09/19/2023', 1, true, '$'),
      todo.new('Take a stroll', '05/21/2023', 2, false, 'Brief'),
      todo.new('Buy Rick a new Quantum physics textbook from the mall', '10/11/23', 2, false, 'Brief'),
    ],
  };

  // Get project 
  static get(projectName = 'default'): todo[] {
    return this.data[projectName];
  }


  // Add project
  static add(projectName: string) {
    if (!(projectName in this.data))
      this.data[projectName] = [];
  }


  // Delete project
  static del(projectName: string) {
    if (projectName == 'default') return;
    delete this.data[projectName];
  }

  
  // Add todo item to a project
  static addTodo(projectName = 'default', value: todo) {
    if (projectName in this.data) {
      this.data[projectName].push(value);
      return;
    }
    this.add(projectName);
    this.data[projectName].push(value);
  }


  // (Un)check todo task 
  static toggleTodoStatus(projectName: string, taskId: number) {
    this.data[projectName].forEach(task => {
      if (task.id == taskId)
        task.toggleCompletion;
    })
  }

  
  // Delete todo item 
  static deleteTodo(projectName: string, taskId: number) {
    this.data[projectName] = this.data[projectName].map(task => {
      if (taskId != task.id) return task;
    })
  }
}
