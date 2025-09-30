import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import Overview from "../src/components/OverviewComponents/Overview";
import {
  TaskMasterContext,
  TaskMasterContextType,
} from "../src/context/TaskMasterContext";
import { TaskMaster } from "../src/domain/TaskManager";
import { Engineer } from "../src/domain/Engineer";
import "@testing-library/jest-dom";

class MockTaskMaster extends TaskMaster {
  constructor() {
    super();
  }

  getTotalEstMinUnassigned = vi.fn(() => 120);
  getTotalEstMinByEngineer = vi.fn((id) => (id === "1" ? 60 : 30));
  getTotalActualMinCompleted = vi.fn(() => 200);
}

describe("Overview", () => {
  const mockTaskManager = new MockTaskMaster();
  const engineer1 = new Engineer("Engineer 1");
  const engineer2 = new Engineer("Engineer 2");
  mockTaskManager.addEngineer(engineer1);
  mockTaskManager.addEngineer(engineer2);

  const mockContext: TaskMasterContextType = {
    taskManager: mockTaskManager,
    updateTaskManager: vi.fn(),
    getTaskById: vi.fn(),
    completeTask: vi.fn(),
  };

  const renderOverview = () => {
    render(
      <TaskMasterContext.Provider value={mockContext}>
        <Overview />
      </TaskMasterContext.Provider>
    );
  };

  it("renders overview sections", () => {
    renderOverview();
    expect(
      screen.getByText("Unassigned Tasks (Est. Minutes):")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Assigned Tasks (Est. Minutes by Engineer):")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Completed Tasks (Actual Minutes):")
    ).toBeInTheDocument();
  });


});
