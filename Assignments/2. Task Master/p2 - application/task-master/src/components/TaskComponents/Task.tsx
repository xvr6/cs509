import { useTaskMaster } from "../../context/useTaskMaster";

interface TaskProps {
  id: string;
  name: string;
  estMin: number;
}

function Task({ id, name, estMin }: TaskProps) {
  const { taskManager, updateTaskManager } = useTaskMaster();

  const handleAssign = () => {
    console.log("called assign");
    const engineerId = (
      document.getElementById(`assign-engineer-${id}`) as HTMLSelectElement
    ).value;
    if (engineerId) {
      updateTaskManager((tm) => tm.assignTaskToEngineer(id, engineerId));
    }
  };

  const handleDelete = () => {
    updateTaskManager((tm) => tm.deleteTask(id));
  };

  return (
    <div className="bg-green-50 rounded-md shadow p-4 flex-1 min-w-[220px] mb-4 flex flex-col justify-between">
      <div className="font-bold text-green-700 text-3xl">{name}</div>
      <div className="mt-[-40px]">Est. Minutes: {estMin}</div>
      <div className="mb-2">
        <select
          id={`assign-engineer-${id}`}
          className="border rounded px-2 py-1"
        >
          <option value="">Select Engineer</option>
          {taskManager.engineers.map((engineer) => (
            <option key={engineer.id} value={engineer.id}>
              {engineer.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleAssign}
          className="ml-[17.5px] bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Assign
        </button>
      </div>
      <div className="flex gap-2 mb-2">
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete Task
        </button>
      </div>
    </div>
  );
}

export default Task;
