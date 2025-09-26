function CompletedTask() {
  return (
    <div className="bg-gray-200 rounded-md shadow p-4 flex-2 min-w-[220px] mb-4 border border-green-400">
      <div className=" font-bold text-green-700 text-lg mb-1">[PH]Title</div>
      <div className="mb-1">[PH]Est. Minutes: #</div>
      <div className="mb-1">[PH]Actual. Minutes: #</div>
      <div className="mb-1">[PH]Completed by: NAME</div>
    </div>
  );
}

export default CompletedTask;
