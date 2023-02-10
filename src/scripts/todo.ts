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
    id: number
  ) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = isComplete;
    this.note = note;
    this.id = id;
  }

  toggleCompletion() {
    this.isComplete = !this.isComplete;
  }

  static new( title: string,
             dueDate: string,
             priority = 0,
             isComplete = false,
             note = '',
             id: number
            ): todo {
    return new todo( title,
                    dueDate,
                    priority,
                    isComplete,
                    note,
                    id
                   )
  }
}

export default todo;
