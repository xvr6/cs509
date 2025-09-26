function AssignedTask() {
  return (
    <div className="bg-purple-50 rounded-md shadow p-4 flex-1 min-w-[220px] mb-4 ">
      <div>
        <div className="font-bold text-purple-700 text-lg mb-1">
          [PH]Task Name
        </div>
        <div className="mb-1">[ph]Est. Minutes: #</div>
        <div className="mb-2">[ph]Assigned to: NAME</div>
      </div>
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Actual Minutes"
          className="border rounded px-3 py-2 w-[160px]"
        />
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Complete
        </button>
      </div>
    </div>
  );
}

export default AssignedTask;
