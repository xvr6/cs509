import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TaskCreate from "../src/components/TaskComponents/TaskCreate";

describe("Task Components", () => {


  it("renders TaskCreate component", () => {
    render(<TaskCreate onAddTask={() => {}} />);
    expect(screen.getByText("Create Task"));
  });

});
