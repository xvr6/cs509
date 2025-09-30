import { useTaskMaster } from "../../context/useTaskMaster";

function Overview() {
  const { taskManager } = useTaskMaster();

  const unassignedMinutes = taskManager.getTotalEstMinUnassigned();
  const assignedMinutes = taskManager.engineers.map((e) => ({
    name: e.name,
    minutes: taskManager.getTotalEstMinByEngineer(e.id),
  }));
  const completedMinutes = taskManager.getTotalActualMinCompleted();

  return (
    <div className="bg-yellow-100 rounded-md p-4 mb-8 text-yellow-900 text-lg flex flex-col gap-2">
      <div>
        <span className="font-semibold">Unassigned Tasks (Est. Minutes): </span>
        <span>{unassignedMinutes}</span>
      </div>
      <div>
        <span className="font-semibold">
          Assigned Tasks (Est. Minutes by Engineer):
        </span>
        {assignedMinutes.map((e) => (
          <div key={e.name}>
            {e.name}: {e.minutes}
          </div>
        ))}
      </div>
      <div>
        <span className="font-semibold">
          Completed Tasks (Actual Minutes):{" "}
        </span>
        <span>{completedMinutes}</span>
      </div>
    </div>
  );
}

export default Overview;
