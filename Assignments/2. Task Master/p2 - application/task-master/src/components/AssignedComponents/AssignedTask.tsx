import { useTaskMaster } from "../../context/useTaskMaster";

function AssignedTask({ id }: { id: string }) {
  const { taskManager, getTaskById, updateTaskManager } = useTaskMaster();
  const task = getTaskById(id);

  if (!task) return null;

  const handleComplete = () => {
    const actualMin = parseInt(
      (document.getElementById(`actual-minutes-${id}`) as HTMLInputElement)
        .value,
      10
    );
    if (!isNaN(actualMin)) {
      updateTaskManager((tm) => tm.completeTask(task.id, actualMin));
    }
  };

  return (
    <div className="bg-purple-50 rounded-md shadow p-4 flex flex-1 flex-col min-w-[220px] mb-4 ">
      <div>
        <div className="font-bold text-purple-700 text-lg mb-1">
          {task.name}
        </div>
        <div className="mb-1">Est. Minutes: {task.estMin}</div>
        <div className="mb-2">
          Assigned to:{" "}
          {taskManager.engineers.find((e) => e.id === task.assignedEngineer)
            ?.name || ""}
        </div>
      </div>
      <div className="flex gap-2">
        <input
          id={`actual-minutes-${id}`}
          type="number"
          placeholder="Actual Minutes"
          className="border rounded px-3 py-2 w-[160px]"
        />
        <button
          onClick={handleComplete}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Complete
        </button>
      </div>
    </div>
  );
}

export default AssignedTask;
