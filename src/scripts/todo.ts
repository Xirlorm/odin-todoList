'use strict';

class todo {
  title;
  dueDate;
  priority;
  note;
  isComplete;
  id: number;

  constructor (
    title: string,
    dueDate: string,
    priority = 0,
    isComplete = false,
    note = '',
  ) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = isComplete;
    this.note = note;
  }

  toggleCompletion() {
    this.isComplete = !this.isComplete;
  }

  static new(
    title: string,
    dueDate: string,
    priority = 0,
    isComplete = false,
    note = ''
  ): todo {
    return new todo(
      title, dueDate, priority, isComplete, note
    );
  }
}

export default todo;
