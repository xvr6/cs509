import type { Engineer } from "./Engineer";
import type { Task } from "./Task";

export class TaskMaster {
  private _id: string;
  private _engineers: Engineer[];
  private _tasks: Task[];
  private _completedTasks: Task[];

  constructor(engineers?: Engineer[], task?: Task[], completedTasks?: Task[]) {
    this._id = crypto.randomUUID();
    this._engineers = engineers || [];
    this._tasks = task || [];
    this._completedTasks = completedTasks || [];
  }

  get id(): string {
    return this._id;
  }
  get engineers(): Engineer[] {
    return this._engineers;
  }
  get tasks(): Task[] {
    return this._tasks;
  }
  get completedTasks(): Task[] {
    return this._completedTasks;
  }

  /**
   * addEngineer
   */
  public addEngineer(eng: Engineer) {
    this._engineers.push(eng);
  }

  /**
   * removeEngineer
   */
  public removeEngineer(engId: string) {
    const engs = this._engineers;
    for (let i = 0; i < engs.length; i++) {
      const e = engs[i];
      if (e.id == engId) {
      }
    }
    this._engineers.forEach((element) => {});
  }

  /**
   * addTask
   */
  public addTask(taskId: string) {}

  /**
   * removeTask
   */
  public removeTask(taskId: string, engId: string) {}
  /**
   * completeTask
   */
  public completeTask(taskId: string, actualMin: number) {}

  /**
   * getUnassignedTasks
   */
  public getUnassignedTasks(): Task[] {
    return [];
  }

  /**
   * getTotalEstMinUnassignedgetTotalEstMinUnassigned
   */
  public getTotalEstMinUnassigned(): number {
    return 0;
  }

  /**
   * getTotalEstMinByEngineer
   */
  public getTotalEstMinByEngineer(engId: string): number {
    return 0;
  }

  /**
   * getTotalActualMinCompleted
   */
  public getTotalActualMinCompleted(): number {
    return 0;
  }
}
