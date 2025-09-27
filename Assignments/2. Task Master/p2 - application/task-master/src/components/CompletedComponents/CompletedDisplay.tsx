import CompletedTask from "./CompletedTask";

function Completed() {
  return (
    <div className="flex flex-wrap gap-6">
      <CompletedTask></CompletedTask>
      <CompletedTask></CompletedTask>
    </div>
  );
}

export default Completed;
