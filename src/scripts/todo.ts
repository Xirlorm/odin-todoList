'use strict'

class todo {
  title
  dueDate
  priority
  note
  isComplete
  id: number
  project = 'default'

  constructor (
    title: string,
    dueDate: string,
    priority = 0,
    isComplete = false,
    note = '',
    id: number
  ) {
    this.title = title
    this.dueDate = dueDate
    this.priority = priority
    this.isComplete = isComplete
    this.note = note
    this.id = id
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

export default todo
