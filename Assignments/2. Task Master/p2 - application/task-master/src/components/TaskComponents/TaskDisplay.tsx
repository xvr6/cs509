import Task from "./Task";
import TaskCreate from "./TaskCreate";
import { useTaskMaster } from "../../context/useTaskMaster";

function Tasks() {
  const { taskManager, updateTaskManager } = useTaskMaster();

  const handleAddTask = (name: string, estMin: number) => {
    updateTaskManager((tm) => tm.addTaskByNameAndEstMin(name, estMin));
  };

  const handleDeleteTask = (id: string) => {
    updateTaskManager((tm) => tm.deleteTask(id));
  };

  const handleAssignTask = (id: string, engineerName: string) => {
    updateTaskManager((tm) => tm.assignTaskToEngineer(id, engineerName));
  };

  return (
    <div className="flex flex-wrap gap-6">
      {taskManager.getUnassignedTasks().map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          estMin={task.estMin}
          engineers={taskManager.engineers}
          onDelete={handleDeleteTask}
          onAssign={handleAssignTask}
        />
      ))}
      <TaskCreate onAddTask={handleAddTask} />
    </div>
  );
}

export default Tasks;
