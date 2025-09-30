import AssignedTask from "./AssignedTask";
import { useTaskMaster } from "../../context/useTaskMaster";

function Assigned() {
  const { taskManager, updateTaskManager } = useTaskMaster();

  const handleCompleteTask = (taskId: string, actualMin: number) => {
    updateTaskManager((tm) => tm.completeTask(taskId, actualMin));
  };

  return (
    <div className="flex flex-wrap gap-6">
      {taskManager.tasks
        .filter((task) => task.status === "ASSIGNED")
        .map((task) => (
          <AssignedTask
            key={task.id}
            id={task.id}
            name={task.name}
            estMin={task.estMin}
            assignedEngineer={task.assignedEngineer || "Unknown"}
            onComplete={handleCompleteTask}
          />
        ))}
    </div>
  );
}

export default Assigned;
