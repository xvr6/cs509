import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CompletedTask from "../src/components/CompletedComponents/CompletedTask";
import { Task } from "../src/domain/Task";

describe("Completed Components", () => {
  it("renders CompletedTask component", () => {
    const task = new Task("Completed Task", 30); // Remove id argument
    render(<CompletedTask taskToUse={task} />);
    expect(screen.getByText("Completed Task"));
  });

});
