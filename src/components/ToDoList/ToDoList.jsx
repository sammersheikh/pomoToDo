import ToDoListItem from "../ToDoListItems/ToDoListItem"

export default function ToDoList({todos}) {
    const toDoListItems = todos.map((t, idx) => <ToDoListItem todo={t} key={idx} idx={idx + 1}/>)
    return (
        <ul>
            {toDoListItems}
        </ul>
    )
}
