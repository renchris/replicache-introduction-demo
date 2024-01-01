'use client'

import { css } from '@styled-system/css'
import type { List, Todo } from '@replicache/types'
import { useState, type Dispatch, type SetStateAction } from 'react'
import ItemInput from './ItemInput'
import TodoList from './TodoList'

const MainSection = (
  {
    todos,
    selectedList,
    itemName,
    setItemName,
    handleSubmitItem,
  }: {
    todos: Todo[],
    itemName: string,
    setItemName: Dispatch<SetStateAction<string>>,
    handleSubmitItem: (text: string) => Promise<void>,
    selectedList: List | undefined,
  },
) => {
  const todosCount = todos.length
  const completed = todos.filter((todo) => todo.complete)
  const completedCount = completed.length
  // const toggleAllValue = completedCount === todosCount

  const [filter, setFilter] = useState('All')

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') {
      return true
    }
    if (filter === 'Active') {
      return !todo.complete
    }
    if (filter === 'Completed') {
      return todo.complete
    }
    throw new Error(`Unknown filter: ${filter}`)
  })

  return (
  <div
    className={css({
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
      marginTop: '12px',
    })}
  >
    {selectedList ? (
        <ItemInput
          itemName={itemName}
          setItemName={setItemName}
          handleSubmitItem={handleSubmitItem}
        />
      ) : (
        <div className={css({
          padding: '32px',
        })}
        >
          No List Selected
      </div>
    )}
      <TodoList
        todos={filteredTodos}
      />
  </div>
)
}

export default MainSection
