import { describe, it, expect, beforeEach } from "vitest";
import { Engineer } from "../src/domain/Engineer";
import { Task } from "../src/domain/Task";

describe("Engineer", () => {
  let engineer: Engineer;
  let task: Task;

  beforeEach(() => {
    engineer = new Engineer("John Doe");
    task = new Task("Sample Task", 60);
  });

  it("should create an engineer with a name", () => {
    expect(engineer.name).toBe("John Doe");
  });

  it("should assign a task to the engineer", () => {
    engineer.assignTask(task);
    expect(engineer.assignedTasks).toContain(task);
  });

  it("should complete a task", () => {
    engineer.assignTask(task);
    engineer.completeTask(task.id, 50);
    expect(task.status).toBe("COMPLETED");
  });

  it("should throw an error when completing a non-existent task", () => {
    expect(() => engineer.completeTask("invalid-id", 50)).toThrowError();
  });

  it("should calculate total estimated minutes", () => {
    engineer.assignTask(task);
    expect(engineer.getTotalEstimatedMinutes()).toBe(60);
  });
});
