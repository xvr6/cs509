import { useState } from "react";

interface TaskCreateProps {
  onAddTask: (name: string, estMin: number) => void;
}

function TaskCreate({ onAddTask }: TaskCreateProps) {
  const [taskName, setTaskName] = useState("");
  const [estMin, setEstMin] = useState(0);

  const handleAddTask = () => {
    if (taskName && estMin > 0) {
      onAddTask(taskName, estMin);
      setTaskName("");
      setEstMin(0);
    }
  };

  return (
    <div className="bg-gray-50 rounded-md shadow p-4 flex-1 min-w-[220px] mb-4 flex flex-col gap-2 justify-between">
      Create New Task
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New Task Title"
        className="border rounded px-3 py-2 mb-2"
      />
      Est. Min:
      <input
        type="number"
        value={estMin}
        onChange={(e) => setEstMin(Number(e.target.value))}
        placeholder="Est. Minutes"
        className="border rounded px-3 py-2 mb-2"
      />
      <button
        onClick={handleAddTask}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        Create Task
      </button>
    </div>
  );
}

export default TaskCreate;
