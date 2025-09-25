import Engineers from "./components/EngineerComponents/Engineers";
import Tasks from "./components/TaskComponents/tasks";

function App() {
  const engineers: string[] = [];

  return (
    <main>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-10">
        {/* Engineers Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
            TaskMaster Manager Dashboard
          </h1>
          <Engineers>{engineers}</Engineers>
        </div>
        {/* Unassigned Tasks Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 flex flex-col justify-between">
            Unassigned Tasks
          </h2>
            <Tasks></Tasks>
        </div>
      </div>
    </main>
  );
}

export default App;
