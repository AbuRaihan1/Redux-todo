const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>

      <div className="bg-red-50 h-auto rounded-xl w-full p-5 space-y-3">
        <p className="text-center text-3xl font-bold text-red-600 ">
          There is no task available
        </p>
      </div>
    </div>
  );
};

export default TodoContainer;
