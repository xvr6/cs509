function Task() {
  return (
    <div className="bg-green-50 rounded-md shadow p-4 flex-1 min-w-[220px] mb-4 flex flex-col justify-between">
      <div>
        <div className="font-bold text-green-700 text-lg mb-1">
          [ph]Title Of Task
          {/* <button className="justify-end ml-[10]">
            X
          </button> */}
        </div>
        <div className="mb-2">[ph]Est. Minutes: #</div>
      </div>
      <div className="mb-2">
        <select className="border rounded px-2 py-1 min-w-[175px]">
          <option>[ph].......</option>
          <option>user 1</option>
          <option>user 2</option>
        </select>
        <button className="ml-[17.5px] bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
          Assign
        </button>
      </div>
      <div className="flex gap-2 mb-2">
        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
          Remove
        </button>
      </div>
    </div>
  );
}

export default Task;
