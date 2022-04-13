import { render, screen } from "@testing-library/react";
import { ITimelineEvent, TimelineEvent } from "./TimelineEvent";

describe("TimelineEvent", () => {
  const baseProps: ITimelineEvent = {
    time: "12:30:01",
    title: "Test Event",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
  };

  const renderInContext = (props: ITimelineEvent = baseProps) =>
    render(<TimelineEvent {...baseProps} />);

  it("should render the timeline events", () => {
    renderInContext();

    const eventTime = screen.getByText(/12:30/i);
    expect(eventTime).toBeInTheDocument();

    const eventTitle = screen.getByText(/Test Event/i);
    expect(eventTitle).toBeInTheDocument();

    const eventDescription = screen.getByText(/Lorem ipsum/i);
    expect(eventDescription).toBeInTheDocument();
  });
});
