import CompletedTask from "./CompletedTask";
import { useTaskMaster } from "../../context/useTaskMaster";

function Completed() {
  const { taskManager } = useTaskMaster();

  return (
    <div className="flex flex-wrap gap-6">
      {taskManager.completedTasks.map((task) => (
        <CompletedTask taskToUse={task} />
      ))}
    </div>
  );
}

export default Completed;
