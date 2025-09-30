import { describe, it, expect, beforeEach } from "vitest";
import { TaskMaster } from "../src/domain/TaskManager";
import { Engineer } from "../src/domain/Engineer";
import { Task } from "../src/domain/Task";

describe("TaskMaster", () => {
  let taskMaster: TaskMaster;
  let engineer: Engineer;
  let task: Task;

  beforeEach(() => {
    engineer = new Engineer("John Doe");
    task = new Task("Sample Task", 60);
    taskMaster = new TaskMaster([engineer], [task]);
  });

  it("should add an engineer", () => {
    const newEngineer = new Engineer("Jane Doe");
    taskMaster.addEngineer(newEngineer);
    expect(taskMaster.engineers).toContain(newEngineer);
  });

  it("should remove an engineer", () => {
    taskMaster.removeEngineer(engineer.id);
    expect(taskMaster.engineers).not.toContain(engineer);
  });

  it("should add a task", () => {
    const newTask = new Task("New Task", 30);
    taskMaster.addTask(newTask);
    expect(taskMaster.tasks).toContain(newTask);
  });

  it("should delete an unassigned task", () => {
    taskMaster.deleteTask(task.id);
    expect(taskMaster.tasks).not.toContain(task);
  });

  it("should assign a task to an engineer", () => {
    taskMaster.assignTaskToEngineer(task.id, engineer.id);
    expect(engineer.assignedTasks).toContain(task);
  });

  it("should complete a task", () => {
    taskMaster.assignTaskToEngineer(task.id, engineer.id);
    taskMaster.completeTask(task.id, 50);
    expect(taskMaster.completedTasks).toContain(task);
  });

  it("should calculate total estimated minutes for unassigned tasks", () => {
    expect(taskMaster.getTotalEstMinUnassigned()).toBe(60);
  });

  it("should calculate total actual minutes for completed tasks", () => {
    taskMaster.assignTaskToEngineer(task.id, engineer.id);
    taskMaster.completeTask(task.id, 50);
    expect(taskMaster.getTotalActualMinCompleted()).toBe(50);
  });
});
