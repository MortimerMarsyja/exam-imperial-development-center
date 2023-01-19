import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ComposedTitle from "./ComposedTitle";

describe("<ComposedTitle />", () => {
  test("Composed title mounts properly", () => {
    const wrapper = render(
      <ComposedTitle title={"test title"} subtitle={"test subtitle"} />
    );
    expect(wrapper).toBeTruthy();
  });
  test("Composed title renders title properly", () => {
    render(<ComposedTitle title={"test title"} subtitle={"test subtitle"} />);
    const title = screen.getByText("test title");
    expect(title).toBeInTheDocument();
  });
  test("Composed title renders subtitle properly", () => {
    render(<ComposedTitle title={"test title"} subtitle={"test subtitle"} />);
    const subtitle = screen.getByText("test subtitle");
    expect(subtitle).toBeInTheDocument();
  });
  expect;
});
