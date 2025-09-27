import AssignedTask from "./AssignedTask";

function Assigned() {
  return (
    <div className="flex flex-wrap gap-6">
      <AssignedTask></AssignedTask>
      <AssignedTask></AssignedTask>
    </div>
  );
}

export default Assigned;
