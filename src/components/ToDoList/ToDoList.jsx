import ToDoListItem from "../ToDoListItems/ToDoListItem"

export default function ToDoList({todos}) {
    const toDoListItems = todos.map(t => <ToDoListItem todo={t}/>)
    return (
        <ul>
            {toDoListItems}
        </ul>
    )
}
