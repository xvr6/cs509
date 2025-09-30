import { useContext } from "react";
import { TaskMasterContext } from "./TaskMasterContext";
import type { TaskMasterContextType } from "./TaskMasterContext";

export const useTaskMaster = (): TaskMasterContextType => {
  const context = useContext(TaskMasterContext);
  if (!context) {
    throw new Error("useTaskMaster must be used within a TaskMasterProvider");
  }
  return context;
};
