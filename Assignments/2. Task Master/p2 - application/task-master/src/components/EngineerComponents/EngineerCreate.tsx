function EngineerCreate() {
  return (
    <div className="bg-gray-50 rounded-md shadow p-4 flex-1 min-w-[220px] mb-4 flex flex-col gap-2 justify-between">
      <input
        type="text"
        placeholder="New Engineer Name"
        className="border rounded px-3 py-2 mb-2"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full">
        Add Engineer
      </button>
    </div>
  );
}

export default EngineerCreate;
