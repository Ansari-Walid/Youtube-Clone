import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment().startOf("day").seconds(time).format();
  return <div>VideoLength</div>;
};

export default VideoLength;
