import React, { createContext, useContext, useState } from "react";
import { TaskMaster } from "../domain/TaskManager";

interface TaskMasterContextType {
  taskManager: TaskMaster;
  updateTaskManager: (updateFn: (tm: TaskMaster) => void) => void;
}

const TaskMasterContext = createContext<TaskMasterContextType | undefined>(
  undefined
);

export const TaskMasterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [taskManager, setTaskManager] = useState(new TaskMaster());

  const updateTaskManager = (updateFn: (tm: TaskMaster) => void) => {
    const updatedTaskManager = new TaskMaster(
      [...taskManager.engineers],
      [...taskManager.tasks],
      [...taskManager.completedTasks]
    );
    updateFn(updatedTaskManager);
    setTaskManager(updatedTaskManager);
  };

  return (
    <TaskMasterContext.Provider value={{ taskManager, updateTaskManager }}>
      {children}
    </TaskMasterContext.Provider>
  );
};

export const useTaskMaster = (): TaskMasterContextType => {
  const context = useContext(TaskMasterContext);
  if (!context) {
    throw new Error("useTaskMaster must be used within a TaskMasterProvider");
  }
  return context;
};

export { TaskMasterContext };
export type { TaskMasterContextType };
