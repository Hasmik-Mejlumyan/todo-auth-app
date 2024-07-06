import TodoForm from "../../../components/pages/Todos/TodoForm";

const Todos = () => {

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-start">
          <h1 className="text-blue-400 text-3xl font-bold mb-3">Todos</h1>
          <TodoForm />
        </div>
      </div>
    </div>
  );
};

export default Todos;
