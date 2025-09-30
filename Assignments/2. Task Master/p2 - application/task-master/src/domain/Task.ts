export type TaskStatus = "UNASSIGNED" | "ASSIGNED" | "COMPLETED";

export class Task {
  private _id: string;
  private _name: string;
  private _estMin: number;
  private _assignedEngineer?: string;
  private _actualMin?: number;
  private _status?: TaskStatus;

  constructor(
    name: string,
    estMin: number,
    assignedEngineer?: string,
    actualMin?: number,
    status?: TaskStatus
  ) {
    this._id = crypto.randomUUID();
    this._name = name;
    this._estMin = estMin;
    this._assignedEngineer = assignedEngineer;
    this._actualMin = actualMin;
    this._status = status || "UNASSIGNED";
  }

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get estMin(): number {
    return this._estMin;
  }
  get assignedEngineer(): string | undefined {
    return this._assignedEngineer;
  }
  get actualMin(): number | undefined {
    return this._actualMin;
  }
  get status(): TaskStatus | undefined {
    return this._status;
  }

  /**
   * assignTo
   */
  public assignTo(engId: string): void {
    if (this._status == "UNASSIGNED") {
      this._status = "ASSIGNED";
      this._assignedEngineer = engId;
    } else {
      throw new Error("Task has already been assigned");
    }
  }

  /**
   * complete
   */
  public complete(actualMinutes: number): void {
    if (this._status == "ASSIGNED") {
      this._status = "COMPLETED";
      this._actualMin = actualMinutes;
    } else {
      throw new Error(`Task is ${this._status}, unable to be completed.`);
    }
  }
}
