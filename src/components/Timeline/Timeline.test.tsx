import { render, screen, waitFor } from "@testing-library/react";
import { FIVE_SECONDS } from "../../constants/Config";
import { Timeline } from "./Timeline";

jest.useFakeTimers();

describe("Timeline", () => {
  const renderInContext = () => render(<Timeline />);

  it("should render the timeline events every 5 seconds", async () => {
    renderInContext();
    const timelineText = screen.getByText(/Timeline/i);
    expect(timelineText).toBeInTheDocument();

    const initalListElements = screen.getAllByRole("listitem");
    expect(initalListElements).toHaveLength(1);

    await waitFor(
      () => {
        const listElements = screen.getAllByRole("listitem");
        expect(listElements.length).toStrictEqual(2);
      },
      { timeout: FIVE_SECONDS + 1000 }
    );
  });

  it("should render a max of 5 timeline events", async () => {
    renderInContext();
    await waitFor(
      () => {
        const listElements = screen.getAllByRole("listitem");
        expect(listElements.length).toStrictEqual(5);
      },
      { timeout: FIVE_SECONDS * 5 }
    );
  });
});
