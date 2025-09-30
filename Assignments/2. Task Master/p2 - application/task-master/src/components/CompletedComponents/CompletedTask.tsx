import type { Task } from "../../domain/Task";

function CompletedTask({ taskToUse }: { taskToUse: Task }) {
  return (
    <div className="bg-gray-200 rounded-md shadow p-4 flex-2 min-w-[220px] mb-4 border border-green-400">
      <div className="font-bold text-green-700 text-lg mb-1">
        {taskToUse.name}
      </div>
      <div className="mb-1">Actual Minutes: {taskToUse.actualMin}</div>
    </div>
  );
}

export default CompletedTask;
