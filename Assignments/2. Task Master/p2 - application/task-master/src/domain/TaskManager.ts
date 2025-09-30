import { Engineer } from "./Engineer";
import { Task } from "./Task";

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
    let pos = -1;
    //find what position in the eng array the engineer is.
    for (let i = 0; i < engs.length; i++) {
      const e = engs[i];
      if (e.id == engId) {
        pos = i;
        break;
      }
    }

    if (pos !== -1) {
      // Remove the engineer from the array
      this._engineers.splice(pos, 1);

      // Flag tasks as unassigned
      this._tasks.forEach((task) => {
        if (task.assignedEngineer == engId) {
          task.unassign();
        }
      });
    }
  }

  /**
   * addTask
   */
  public addTask(task: Task) {
    this._tasks = [...this._tasks, task];
  }

  /**
   * deleteTask
   */
  public deleteTask(taskId: string) {
    const taskIndex = this._tasks.findIndex(
      (t) => t.id === taskId && t.status === "UNASSIGNED"
    );

    if (taskIndex !== -1) {
      this._tasks.splice(taskIndex, 1);
    }
  }
  /**
   * completeTask
   */
  public completeTask(taskId: string, actualMin: number) {
    this._tasks.forEach((t) => {
      if (t.id == taskId) {
        t.complete(actualMin);
      }
    });
  }

  /**
   * getUnassignedTasks
   */
  public getUnassignedTasks(): Task[] {
    const uTasks: Task[] = [];
    this._tasks.forEach((t) => {
      if (t.status == "UNASSIGNED") {
        uTasks.push(t);
      }
    });
    return uTasks;
  }

  /**
   * getTotalEstMinUnassignedgetTotalEstMinUnassigned
   */
  public getTotalEstMinUnassigned(): number {
    let tot = 0;
    this._tasks.forEach((t) => {
      if (t.status == "UNASSIGNED") {
        tot += t.estMin;
      }
    });
    return tot;
  }

  /**
   * getTotalEstMinByEngineer
   */
  public getTotalEstMinByEngineer(engId: string): number {
    return this._tasks
      .filter(
        (task) => task.assignedEngineer === engId && task.status === "ASSIGNED"
      )
      .reduce((total, task) => total + task.estMin, 0);
  }

  /**
   * getTotalActualMinCompleted
   */
  public getTotalActualMinCompleted(): number {
    return this._completedTasks.reduce(
      (total, task) => total + (task.actualMin || 0),
      0
    );
  }

  /**
   * addEngineerByName
   */
  public addEngineerByName(name: string) {
    const newEngineer = new Engineer(name);
    this.addEngineer(newEngineer);
  }

  /**
   * addTaskByNameAndEstMin
   */
  public addTaskByNameAndEstMin(name: string, estMin: number) {
    const newTask = new Task(name, estMin);
    this.addTask(newTask);
  }

  /**
   * assignTaskToEngineer
   */
  public assignTaskToEngineer(taskId: string, engineerId: string) {
    const task = this._tasks.find((t) => t.id === taskId);
    if (task) {
      task.assignTo(engineerId);
    }
  }
}
