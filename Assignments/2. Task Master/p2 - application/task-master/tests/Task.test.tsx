import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach, afterEach } from "vitest";
import Task from "../src/components/TaskComponents/Task";
import {
  TaskMasterContext,
  TaskMasterContextType,
} from "../src/context/TaskMasterContext";
import { TaskMaster } from "../src/domain/TaskManager";
import "@testing-library/jest-dom";

class MockTaskMaster extends TaskMaster {
  constructor() {
    super();
  }

  addEngineer = vi.fn();
  removeEngineer = vi.fn();
  assignTaskToEngineer = vi.fn();
  deleteTask = vi.fn();
  getTaskById = vi.fn();
  completeTask = vi.fn();
  addTask = vi.fn();
  getUnassignedTasks = vi.fn(() => []);
  getTotalEstMinUnassigned = vi.fn(() => 0);
  getTotalEstMinByEngineer = vi.fn(() => 0);
  getTotalActualMinCompleted = vi.fn(() => 0);
  addEngineerByName = vi.fn();
  addTaskByNameAndEstMin = vi.fn();
}

describe("Task", () => {
  const mockUpdateTaskManager = vi.fn();
  const mockTaskManager = new MockTaskMaster();
  mockTaskManager.addEngineer({ id: "1", name: "Engineer 1" });
  mockTaskManager.addEngineer({ id: "2", name: "Engineer 2" });

  const mockContext: TaskMasterContextType = {
    taskManager: mockTaskManager,
    updateTaskManager: mockUpdateTaskManager,
    getTaskById: vi.fn(),
    completeTask: vi.fn(),
  };

  const renderTask = () => {
    render(
      <TaskMasterContext.Provider value={mockContext}>
        <Task id="1" name="Test Task" estMin={30} />
      </TaskMasterContext.Provider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders task details", () => {
    renderTask();
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("Est. Minutes: 30")).toBeInTheDocument();
  });



  it("calls updateTaskManager on delete", () => {
    renderTask();
    fireEvent.click(screen.getByText("Delete Task"));
    expect(mockUpdateTaskManager).toHaveBeenCalledWith(expect.any(Function));
  });

  it("does not call updateTaskManager if no engineer is selected on assign", async () => {
    renderTask();
    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toHaveValue(""); // Verify initial dropdown value
    fireEvent.click(screen.getByText("Assign"));
    expect(mockUpdateTaskManager).not.toHaveBeenCalled();
  });
});
