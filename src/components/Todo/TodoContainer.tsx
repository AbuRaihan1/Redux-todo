import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <AddTodoModal />
        <TodoFilter />
      </div>

      <div className="bg-slate-50 border-2 h-auto rounded-xl w-full p-5 space-y-3">
        <TodoCard />
        {/* <p className="text-center text-3xl font-bold text-red-600 ">
          There is no task available
        </p> */}
      </div>
    </div>
  );
};

export default TodoContainer;
