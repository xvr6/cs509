function TaskCreate() {
  return (
    <div className="bg-gray-50 rounded-md shadow p-4 flex-1 min-w-[220px] mb-4 flex flex-col gap-2 justify-between">
      TaskCreate
      <input
        type="text"
        placeholder="New Task Title"
        className="border rounded px-3 py-2 mb-2"
      />
      <input
        type="number"
        placeholder="Est. Minutes"
        className="border rounded px-3 py-2 mb-2"
      />
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full">
        Add Task
      </button>
    </div>
  );
}

export default TaskCreate;
