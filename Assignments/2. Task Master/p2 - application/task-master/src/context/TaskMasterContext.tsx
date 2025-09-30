import React, { createContext, useState } from "react";
import { TaskMaster } from "../domain/TaskManager";
import { Task } from "../domain/Task";

interface TaskMasterContextType {
  taskManager: TaskMaster;
  updateTaskManager: (updateFn: (tm: TaskMaster) => void) => void;
  getTaskById: (taskId: string) => Task | undefined;
  completeTask: (taskId: string, actualMin: number) => void;
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

  const getTaskById = (taskId: string) => taskManager.getTaskById(taskId);
  const completeTask = (taskId: string, actualMin: number) =>
    updateTaskManager((tm) => tm.completeTask(taskId, actualMin));

  return (
    <TaskMasterContext.Provider
      value={{ taskManager, updateTaskManager, getTaskById, completeTask }}
    >
      {children}
    </TaskMasterContext.Provider>
  );
};

export { TaskMasterContext };
export type { TaskMasterContextType };
