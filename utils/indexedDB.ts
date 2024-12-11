import { openDB } from 'idb'

const dbName = 'TodoDB'
const storeName = 'todos'

const initDB = async () => {
  const db = await openDB(dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true })
      }
    },
  })
  return db
}

export const addTodo = async (todo: { title: string; completed: boolean }) => {
  const db = await initDB()
  return db.add(storeName, todo)
}

export const getTodos = async () => {
  const db = await initDB()
  return db.getAll(storeName)
}

export const updateTodo = async (id: number, updates: Partial<{ title: string; completed: boolean }>) => {
  const db = await initDB()
  const tx = db.transaction(storeName, 'readwrite')
  const store = tx.objectStore(storeName)
  const todo = await store.get(id)
  if (!todo) throw new Error('Todo not found')
  const updatedTodo = { ...todo, ...updates }
  await store.put(updatedTodo)
  await tx.done
  return updatedTodo
}

export const deleteTodo = async (id: number) => {
  const db = await initDB()
  return db.delete(storeName, id)
}

