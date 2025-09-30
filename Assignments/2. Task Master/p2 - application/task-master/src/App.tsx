import Assigned from "./components/AssignedComponents/AssignedDisplay";
import Completed from "./components/CompletedComponents/CompletedDisplay";
import Engineers from "./components/EngineerComponents/Engineers";
import Overview from "./components/OverviewComponents/Overview";
import Tasks from "./components/TaskComponents/Tasks";

function App() {
  return (
    <main>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-10">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          TaskMaster Manager Dashboard
        </h1>
        {/* Overview Section */}
        <Overview></Overview>
        {/* Engineers Section */}
        <div className="mb-10">
          <Engineers>{engineers}</Engineers>
        </div>
        {/* Unassigned Tasks Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
            Unassigned Tasks
          </h2>
          <Tasks></Tasks>
        </div>
        {/* Assigned Tasks */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
            Assigned Tasks
          </h2>
          <Assigned></Assigned>
        </div>
        {/* Completed Tasks */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
            Completed Tasks
          </h2>
          <Completed></Completed>
        </div>
      </div>
    </main>
  );
}

export default App;
