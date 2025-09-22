import Engineers from "./components/EngineerComponents/Engineers";

function App() {
  const engineers: string[] = []

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        TaskMaster Manager Dashboard
      </h1>
      <Engineers>{engineers}</Engineers>
    </div>
  );
}

export default App;
