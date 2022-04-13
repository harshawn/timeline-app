import { FC } from "react";
import "./TimelineEvent.scss";

export interface ITimelineEvent {
  time: string;
  title: string;
  description: string;
  classes?: string;
}

export const TimelineEvent: FC<ITimelineEvent> = ({
  time,
  title,
  description,
  classes,
}) => {
  const formatTime = (time: string) => {
    return time.split(":").slice(0, -1).join(":");
  };

  return (
    <li className={classes}>
      <div className="timeline__event__content">
        <div className="timeline__event__content__time">
          <div className="timeline__event__content__time__text">
            {formatTime(time)}
          </div>
        </div>
        <div className="timeline__event__content__header">
          <h3>{title}</h3>
        </div>
        <div className="timeline__event__content__description">
          <p>{description}</p>
        </div>
      </div>
      <div className="timeline__event__point">
        <span className="timeline__event__point__icon"></span>
      </div>
    </li>
  );
};
