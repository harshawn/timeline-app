import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("should render the timeline without crashing", () => {
    render(<App />);
    const timelineText = screen.getByText(/Timeline/i);
    expect(timelineText).toBeInTheDocument();
  });
});
