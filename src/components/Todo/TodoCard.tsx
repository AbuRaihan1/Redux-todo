const TodoCard = () => {
  return (
    <div className="bg-white flex justify-between items-center p-3 rounded-md">
      <input type="checkbox" name="" id="" />
      <p>Todo Title</p>
      <p> Time </p>
      <p>Description</p>
      <div className="space-x-3">
        <button>Del</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
