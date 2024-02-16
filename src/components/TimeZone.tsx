import { getCurrentTime, formatTime } from "../lib/helpers";

import React from "react";

const TimeZone = () => {
  const [time, setTime] = React.useState<string>();
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime(getCurrentTime()));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <time
      id="timeDisplay"
      className="text-2xl xl:text-3xl xl:whitespace-nowrap w-50 xl:w-100 h-[calc(100%-28px)]  flex justify-center items-center font-bold"
    >
      {time}
    </time>
  );
};

export default TimeZone;
