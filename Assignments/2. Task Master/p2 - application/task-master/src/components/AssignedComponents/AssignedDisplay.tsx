import AssignedTask from "./AssignedTask";
import { useTaskMaster } from "../../context/useTaskMaster";

function Assigned() {
  const { taskManager } = useTaskMaster();

  return (
    <div className="flex flex-wrap gap-6">
      {taskManager.tasks
        .filter((task) => task.status === "ASSIGNED")
        .map((task) => (
          <AssignedTask key={task.id} id={task.id} />
        ))}
    </div>
  );
}

export default Assigned;
