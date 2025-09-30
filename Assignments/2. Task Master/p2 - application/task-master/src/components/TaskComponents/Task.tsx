interface TaskProps {
  id: string;
  name: string;
  estMin: number;
  engineers: { id: string; name: string }[]; // Updated to accept objects
  onDelete: (id: string) => void;
  onAssign: (id: string, engineerName: string) => void;
}

function Task({ id, name, estMin, engineers, onDelete, onAssign }: TaskProps) {
  const handleAssign = () => {
    const engineerName = (
      document.getElementById(`assign-engineer-${id}`) as HTMLSelectElement
    ).value;
    if (engineerName) {
      onAssign(id, engineerName);
    }
  };

  return (
    <div className="bg-green-50 rounded-md shadow p-4 flex-1 min-w-[220px] mb-4 flex flex-col justify-between">
      <div>
        <div className="font-bold text-green-700 text-lg mb-1">{name}</div>
        <div className="mb-2">Est. Minutes: {estMin}</div>
      </div>
      <div className="mb-2">
        <select
          id={`assign-engineer-${id}`}
          className="border rounded px-2 py-1 min-w-[175px]"
        >
          <option value="">Select Engineer</option>
          {engineers.map((engineer) => (
            <option key={engineer.id} value={engineer.name}>
              {" "}
              {engineer.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleAssign}
          className="ml-[17.5px] bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Assign
        </button>
      </div>
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete Task
        </button>
      </div>
    </div>
  );
}

export default Task;
