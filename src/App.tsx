import { FC } from "react";
import { Timeline } from "./components/Timeline/Timeline";
import "./App.scss";

export const App: FC = () => {
  return (
    <div className="app">
      <Timeline />
    </div>
  );
};
