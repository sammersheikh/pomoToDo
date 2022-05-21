import { useState } from 'react'

export default function NewToDoForm({addTodo}) {
    const [newTodo, setNewTodo] = useState('')

  function handleAddTodo(evt) {
    evt.preventDefault();
    addTodo(newTodo)
    setNewTodo('')
  }

    return (
        <>
        <h2>New To-Do</h2>
        <form onSubmit={handleAddTodo}>
        <input
          value={newTodo}
          onChange={(evt) => setNewTodo(evt.target.value)}
          placeholder="To-Do"
          required
          pattern=".{4,}"
        />
        <button type="submit">ADD TO-DO</button>
      </form>

      </>
    )
}