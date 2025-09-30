import { describe, it, expect, beforeEach } from "vitest";
import { Task } from "../src/domain/Task";

describe("Task", () => {
  let task: Task;

  beforeEach(() => {
    task = new Task("Sample Task", 60);
  });

  it("should create a task with a name and estimated minutes", () => {
    expect(task.name).toBe("Sample Task");
    expect(task.estMin).toBe(60);
  });

  it("should assign the task to an engineer", () => {
    task.assignTo("engineer-id");
    expect(task.assignedEngineer).toBe("engineer-id");
    expect(task.status).toBe("ASSIGNED");
  });

  it("should throw an error when assigning an already assigned task", () => {
    task.assignTo("engineer-id");
    expect(() => task.assignTo("another-id")).toThrowError();
  });

  it("should complete the task", () => {
    task.assignTo("engineer-id");
    task.complete(50);
    expect(task.status).toBe("COMPLETED");
    expect(task.actualMin).toBe(50);
  });

  it("should throw an error when completing an unassigned task", () => {
    expect(() => task.complete(50)).toThrowError();
  });

  it("should unassign the task", () => {
    task.assignTo("engineer-id");
    task.unassign();
    expect(task.status).toBe("UNASSIGNED");
    expect(task.assignedEngineer).toBe("");
  });
});
