import CompletedTask from "./CompletedTask";
import { useTaskMaster } from "../../context/useTaskMaster";

function Completed() {
  const { taskManager } = useTaskMaster();

  return (
    <div className="flex flex-wrap gap-6">
      {taskManager.completedTasks.map((task, index) => (
        <CompletedTask
          key={index}
          name={task.name}
          actualMin={task.actualMin || 0}
        />
      ))}
    </div>
  );
}

export default Completed;
