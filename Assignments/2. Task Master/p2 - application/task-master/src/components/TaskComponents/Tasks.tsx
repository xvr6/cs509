import Task from "./Task";
import TaskCreate from "./TaskCreate";

function Tasks() {
  return (
    <div className="flex flex-wrap gap-6">
      <Task></Task>
      <Task></Task>
      <TaskCreate></TaskCreate>
    </div>
  );
}

export default Tasks;
