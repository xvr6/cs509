import { TaskMasterProvider } from "./context/TaskMasterContext";
import Overview from "./components/OverviewComponents/Overview";
import Engineers from "./components/EngineerComponents/Engineers";
import TaskDisplay from "./components/TaskComponents/TaskDisplay";
import Assigned from "./components/AssignedComponents/AssignedDisplay";
import Completed from "./components/CompletedComponents/CompletedDisplay";

function App() {
  return (
    <TaskMasterProvider>
      <main>
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-10">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
            TaskMaster Manager Dashboard
          </h1>
          <Overview />
          <div className="mb-10">
            <Engineers />
          </div>
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
              Unassigned Tasks
            </h2>
            <TaskDisplay />
          </div>
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
              Assigned Tasks
            </h2>
            <Assigned />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
              Completed Tasks
            </h2>
            <Completed />
          </div>
        </div>
      </main>
    </TaskMasterProvider>
  );
}

export default App;
