import Engineer from "./EngineerDisplay";
import EngineerCreate from "./EngineerCreate";
import { useTaskMaster } from "../../context/useTaskMaster";

function Engineers() {
  const { taskManager, updateTaskManager } = useTaskMaster();

  const handleAddEngineer = (name: string) => {
    updateTaskManager((tm) => tm.addEngineerByName(name));
  };

  const handleRemoveEngineer = (id: string) => {
    updateTaskManager((tm) => tm.removeEngineer(id));
  };

  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
        Engineers
      </h2>
      <div className="flex flex-wrap gap-6">
        {taskManager.engineers.map((engineer) => (
          <Engineer
            // key={engineer.id}
            name={engineer.name}
            assignedTaskCount={engineer.assignedTasks.length}
            onRemove={() => handleRemoveEngineer(engineer.id)}
          />
        ))}
        <EngineerCreate onAddEngineer={handleAddEngineer} />
      </div>
    </div>
  );
}

export default Engineers;
