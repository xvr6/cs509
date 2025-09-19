# Task 1 Individual Project: TaskMaster

You are the manager of a team of engineers. You have a collection of Tasks that need to be completed, and you want to come up with a plan for assigning tasks to engineers.
You envision an application that will allow the manager to create a list of engineers, adding and removing from the engineer list as necessary. There is a separate list of tasks, and the manager can add and remove tasks from the task list as necessary. Each task that is created has an estimated time to complete in minutes.
There needs to be a visualization of the engineers and the tasks that they have been assigned. When tasks are completed, they are moved into a completed task list.

## Overview

You are the manager of a team of engineers. You have a collection of tasks that need to be completed, and you want to come up with a plan for assigning tasks to engineers.

You envision an application that will allow the manager to:

- Create a list of engineers (add/remove engineers as necessary)
- Maintain a separate list of tasks (add/remove tasks as necessary)
- Each task has an estimated time to complete (in minutes)
- Visualize engineers and their assigned tasks
- Move completed tasks into a completed task list

## Assigning Tasks

- Visual representation of existing (unassigned) tasks
- Manager can assign a task to an engineer
- Once a task is assigned, it cannot be unassigned or removed

## Completing Tasks

- Engineer completes a task and informs the manager of the actual minutes worked (via email, text, or paper)
- Manager enters the actual completion time
- Task is removed from the engineer's list and placed into the completed task list

## Use Cases

1. Add Engineer
2. Remove Engineer
3. Add Task
4. Remove Task
5. Assign Task
6. Complete Task

## Entity Classes

For the HW1.Analysis task (due **September 20th**), each student will complete the class diagram for entity classes.

## Storyboards

- Mock up sample GUI images to visualize the manager's experience
- Show all required visual elements
- Must be constructed in **HTML** (with CSS as needed)
- The storyboard and application are only to be used by the **Manager** (the only actor)

## Code

- For the final deliverable, submit the project with test cases ensuring **80% code coverage**

## End Notes

1. No need for persistent information! Start from an empty state and allow adding engineers, tasks, and completing tasks
2. Two deliverables: Analysis document (**September 20th**) and Final Code (**September 30th**)
3. Once a task is assigned to an engineer, it cannot be removed
4. Must be possible to see:
   - Estimated time for all tasks
   - Actual time to complete for a task (once completed)
5. Application should show:
   - (a) Total estimated minutes for all unassigned tasks
   - (b) Total estimated minutes by engineer for all assigned (but not completed) tasks
   - (c) Total actual minutes for all completed tasks
6. There is only **ONE ACTOR** – the Manager. The manager declares a task complete (with actual minutes) and moves the task into the completed list.
