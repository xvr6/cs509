export interface iTaskManager {
  engineers?: Array<iEngineer>;
  tasks?: Array<iTask>;
  completedTasks?: Array<iTask>;
}

export interface iEngineer {
  id: string;
  name: string;
  assignedTasks?: Array<iTask>
}

export interface iTask {
  id: string;
  name: string;
  estMin: number;

  assignedEngineer?: iEngineer["id"]; //present when assigned
  actualMin?: number; //present when complete
}

// Domain model and state management for TaskMaster

// export type TaskStatus = 'UNASSIGNED' | 'ASSIGNED' | 'COMPLETED';

// export interface Engineer {
//   id: string;
//   name: string;
// }

// export interface Task {
//   id: string;
//   title: string;
//   estimatedMinutes: number;
//   actualMinutes?: number;
//   assignedEngineerId?: string; // present when ASSIGNED or COMPLETED
//   status: TaskStatus;
// }

// // App state
// export interface AppState {
//   engineers: Engineer[];
//   tasks: Task[];
// }

// export const initialState: AppState = {
//   engineers: [],
//   tasks: []
// };

// // Actions
// export type Action =
//   | { type: 'ADD_ENGINEER'; name: string }
//   | { type: 'REMOVE_ENGINEER'; id: string }
//   | { type: 'ADD_TASK'; title: string; estimatedMinutes: number }
//   | { type: 'REMOVE_TASK'; id: string }
//   | { type: 'ASSIGN_TASK'; taskId: string; engineerId: string }
//   | { type: 'COMPLETE_TASK'; taskId: string; actualMinutes: number };

// export function reducer(state: AppState, action: Action): AppState {
//   switch (action.type) {
//     case 'ADD_ENGINEER': {
//       if (!action.name.trim()) return state;
//       const engineer: Engineer = { id: crypto.randomUUID(), name: action.name.trim() };
//       return { ...state, engineers: [...state.engineers, engineer] };
//     }
//     case 'REMOVE_ENGINEER': {
//       // Only allow removal if engineer has no assigned tasks
//       const hasAssigned = state.tasks.some(
//         (t) => t.assignedEngineerId === action.id && t.status !== 'COMPLETED'
//       );
//       if (hasAssigned) return state;
//       return { ...state, engineers: state.engineers.filter((e) => e.id !== action.id) };
//     }
//     case 'ADD_TASK': {
//       if (!action.title.trim() || action.estimatedMinutes <= 0) return state;
//       const task: Task = {
//         id: crypto.randomUUID(),
//         title: action.title.trim(),
//         estimatedMinutes: action.estimatedMinutes,
//         status: 'UNASSIGNED'
//       };
//       return { ...state, tasks: [...state.tasks, task] };
//     }
//     case 'REMOVE_TASK': {
//       // Only allow removal if unassigned
//       return {
//         ...state,
//         tasks: state.tasks.filter((t) => !(t.id === action.id && t.status === 'UNASSIGNED'))
//       };
//     }
//     case 'ASSIGN_TASK': {
//       return {
//         ...state,
//         tasks: state.tasks.map((t) =>
//           t.id === action.taskId && t.status === 'UNASSIGNED'
//             ? { ...t, status: 'ASSIGNED', assignedEngineerId: action.engineerId }
//             : t
//         )
//       };
//     }
//     case 'COMPLETE_TASK': {
//       return {
//         ...state,
//         tasks: state.tasks.map((t) =>
//           t.id === action.taskId && t.status === 'ASSIGNED'
//             ? { ...t, status: 'COMPLETED', actualMinutes: action.actualMinutes }
//             : t
//         )
//       };
//     }
//     default:
//       return state;
//   }
// }

// // Selectors / helpers
// export const selectUnassignedTasks = (s: AppState) => s.tasks.filter((t) => t.status === 'UNASSIGNED');
// export const selectAssignedTasks = (s: AppState) => s.tasks.filter((t) => t.status === 'ASSIGNED');
// export const selectCompletedTasks = (s: AppState) => s.tasks.filter((t) => t.status === 'COMPLETED');

// export const totalEstimatedUnassigned = (s: AppState) =>
//   selectUnassignedTasks(s).reduce((sum, t) => sum + t.estimatedMinutes, 0);

// export const totalEstimatedByEngineer = (s: AppState, engineerId: string) =>
//   selectAssignedTasks(s)
//     .filter((t) => t.assignedEngineerId === engineerId)
//     .reduce((sum, t) => sum + t.estimatedMinutes, 0);

// export const totalActualCompleted = (s: AppState) =>
//   selectCompletedTasks(s).reduce((sum, t) => sum + (t.actualMinutes ?? 0), 0);
