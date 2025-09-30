interface CompletedTaskProps {
  name: string;
  actualMin: number;
}

function CompletedTask({ name, actualMin }: CompletedTaskProps) {
  return (
    <div className="bg-gray-200 rounded-md shadow p-4 flex-2 min-w-[220px] mb-4 border border-green-400">
      <div className="font-bold text-green-700 text-lg mb-1">{name}</div>
      <div className="mb-1">Actual Minutes: {actualMin}</div>
    </div>
  );
}

export default CompletedTask;
