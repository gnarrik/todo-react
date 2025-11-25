import TodoItem from './TodoItem.jsx';

const TodoList = (props) => {

  const {
    tasks = [],
    hasTasks = true
  } = props;

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  } else {
    return (
      <ul className="todo__list">
        {tasks.map((task) => (
          <TodoItem
            className="todo__item"
            key={task.id}
            {...task}
          />
        ))}
      </ul>
    );
  }
};

export default TodoList;