import Engineer from "./Engineer";
import EngineerCreate from "./EngineerCreate";

interface EngineersProps {
  children: string[];
}

function Engineers({ children }: EngineersProps) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
        Engineers
      </h2>
      <div className="flex flex-wrap gap-6">
        <Engineer></Engineer>
        <Engineer></Engineer>
        <EngineerCreate></EngineerCreate>
      </div>
      {/* each individual engineer goes here */ children}
    </div>
    // <div>{children}</div>
  );
}

export default Engineers;
