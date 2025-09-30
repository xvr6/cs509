interface EngineerProps {
  name: string;
  assignedTaskCount: number;
  onRemove: () => void;
}

function Engineer({ name, assignedTaskCount, onRemove }: EngineerProps) {
  return (
    <div className="bg-blue-50 rounded-md shadow p-4 min-w-[220px] flex flex-1 mb-4 flex-col justify-between">
      <div>
        <div className="font-bold text-blue-700 text-lg mb-1">{name}</div>
        <div className="mb-2">Assigned Tasks: {assignedTaskCount}</div>
      </div>
      <button
        className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 w-full"
        onClick={onRemove}
      >
        Remove Engineer
      </button>
    </div>
  );
}

export default Engineer;
