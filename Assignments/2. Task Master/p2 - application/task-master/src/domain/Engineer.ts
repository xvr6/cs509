import type { Task } from "./Task";

export class Engineer {
  private _id: string;
  private _name: string;
  private _assignedTasks: Task[];

  constructor(name: string, tasks?: Task[]) {
    this._id = crypto.randomUUID();
    this._name = name;
    this._assignedTasks = tasks || [];
  }

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get assignedTasks(): Task[] | undefined {
    return this._assignedTasks;
  }

  /**
   * assignTask
   */
  public assignTask(task: Task) {
    this._assignedTasks.push(task);
    task.assignTo(this._id);
  }

  /**
   * completeTask
   */
  public completeTask(taskId: string, actualMin: number) {
    let complete = false;
    this._assignedTasks.forEach((t) => {
      if (t.id != taskId) return;
      if (t.status != "ASSIGNED") return;
      complete = true;
      t.complete(actualMin);
      //TODO remove from arr
    });

    if (!complete) throw new Error(`No valid task found with uuid: ${taskId}`);
  }

  /**
   * getTotalEstimatedMinutes
   */
  public getTotalEstimatedMinutes(): number {
    let total = 0;
    this._assignedTasks.forEach((t) => {
      total += t.estMin;
    });
    return total;
  }
}
