interface AssignedTaskProps {
  id: string;
  name: string;
  estMin: number;
  assignedEngineer: string;
  onComplete: (taskId: string, actualMin: number) => void;
}

function AssignedTask({
  id,
  name,
  estMin,
  assignedEngineer,
  onComplete,
}: AssignedTaskProps) {
  const handleComplete = () => {
    const actualMin = parseInt(
      (document.getElementById(`actual-minutes-${id}`) as HTMLInputElement)
        .value,
      10
    );
    if (!isNaN(actualMin)) {
      onComplete(id, actualMin);
    }
  };

  return (
    <div className="bg-purple-50 rounded-md shadow p-4 flex flex-1 flex-col min-w-[220px] mb-4 ">
      <div>
        <div className="font-bold text-purple-700 text-lg mb-1">{name}</div>
        <div className="mb-1">Est. Minutes: {estMin}</div>
        <div className="mb-2">Assigned to: {assignedEngineer}</div>
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
