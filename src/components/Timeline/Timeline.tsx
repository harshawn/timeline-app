import { FC, useEffect, useState } from "react";
import { FIVE_SECONDS, MAX_TIMELINE } from "../../constants/Config";
import { timeLineEventsData } from "../../assets/data/timelineEvents";
import { ITimelineEvent, TimelineEvent } from "../TimelineEvent/TimelineEvent";
import "./Timeline.scss";

export const Timeline: FC = () => {
  const [increment, setIncrement] = useState<number>(0);
  const [stopInterval, setStopInterval] = useState<boolean>(false);
  const [timelineEvents, setTimelineEvents] = useState<ITimelineEvent[]>([]);

  useEffect(() => {
    // stop fetching when reached the limit
    if (!stopInterval) {
      const incrementInterval = setInterval(
        () => setIncrement((prevIncrement) => prevIncrement + 1),
        FIVE_SECONDS
      );

      return () => {
        clearInterval(incrementInterval);
      };
    }
  }, [stopInterval]);

  useEffect(() => {
    if (increment > MAX_TIMELINE - 1) {
      setStopInterval(true);
    } else {
      setTimelineEvents((prevEvents) => [
        timeLineEventsData[increment],
        ...prevEvents,
      ]);
    }
  }, [increment]);

  return (
    <div className="timeline">
      <h1>Timeline</h1>
      <ul>
        {timelineEvents.map((timelineEvent, index) => (
          <TimelineEvent
            {...timelineEvent}
            key={`${timelineEvent.time}-${index}`}
            classes={
              index === 0
                ? "timeline__event timeline__event--active"
                : "timeline__event"
            }
          />
        ))}
      </ul>
    </div>
  );
};
