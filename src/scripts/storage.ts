'use strict'

import todo from './todo'

export default {
  storeTodoData(key: string, data: todo[]) {
    localStorage.removeItem(key)
    localStorage.setItem(key, JSON.stringify(data))
  },


  getTodoData(key: string) {
    return JSON.parse(localStorage.getItem(key))
  },


  getKeys(): string[] {
    const keys: string[] = []
    for (let i = 0; i < localStorage.length; ++i)
      keys.push(localStorage.key(i))
    return keys
  },

  
  getSize() { return localStorage.length },


  remove(key: string) { localStorage.removeItem(key) },


  checkStorage(key: string) {
    let storage
    try {
      storage = window[key as keyof typeof window]
      const x = '__storage_test__'
      storage.setItem(x, x)
      storage.removeItem(x)
      return true
    } catch (e) {
      e instanceof DOMException &&
        (
          e.code === 22 ||
          e.code === 1014 ||
          e.name === 'QuotaExceededError' ||
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED'
        ) && (storage && storage.length !== 0)
    }
  },
}
