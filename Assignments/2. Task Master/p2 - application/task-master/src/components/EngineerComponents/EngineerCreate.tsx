interface EngineerCreateProps {
  onAddEngineer: (name: string) => void;
}

function EngineerCreate({ onAddEngineer }: EngineerCreateProps) {
  const handleAdd = () => {
    const nameInput = document.getElementById(
      "engineer-name"
    ) as HTMLInputElement;
    const name = nameInput.value.trim();
    if (name) {
      onAddEngineer(name);
      nameInput.value = "";
    }
  };

  return (
    <div className="bg-gray-50 rounded-md shadow p-4 flex-1 min-w-[220px] mb-4 flex flex-col gap-2 justify-between">
      <input
        id="engineer-name"
        type="text"
        placeholder="New Engineer Name"
        className="border rounded px-3 py-2 mb-2"
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
        onClick={handleAdd}
      >
        Add Engineer
      </button>
    </div>
  );
}

export default EngineerCreate;
