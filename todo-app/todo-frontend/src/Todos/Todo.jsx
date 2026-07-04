const Todo = ({ todo, onClickDelete, onClickComplete }) => {
  const deleteButton = <button onClick={onClickDelete(todo)}> Delete </button>

  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>{deleteButton}</span>
    </>
  )

  const notDoneInfo = (
    <>
      <span>This todo is not done</span>
      <span>
        {deleteButton}
        <button style={{ marginLeft: '5px' }} onClick={onClickComplete(todo)}>
          {' '}
          Set as done{' '}
        </button>
      </span>
    </>
  )

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '70%',
        margin: 'auto',
        marginTop: '10px',
      }}
    >
      <span>{todo.text}</span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  )
}

export default Todo
