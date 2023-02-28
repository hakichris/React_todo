import TodoItem from '@/components/TodoItem';
const TodoList = (props) => {
    const {todosProps} = props;

  return (
    <ul>
    {todosProps.map((todo) => (
        <li>{todo.title}</li>
    ))}
     </ul>
  );
}
export default TodoList;
      