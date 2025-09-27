import EngineerOverview from "./EngineerOverview";

function Overview() {
  return (
    <div className=" bg-yellow-100 rounded-md p-4 mb-8 text-yellow-900 text-lg flex flex-col gap-2">
      <div>
        <span className="font-semibold">Unassigned Tasks (Est. Minutes): </span>
        <span id="unassignedMinutes">[ph]#</span>
      </div>
      <div>
        <span className="font-semibold">
          Assigned Tasks (Est. Minutes by Engineer):
        </span>
        <EngineerOverview></EngineerOverview>,
        <EngineerOverview></EngineerOverview>
      </div>
    </div>
  );
}

export default Overview;
