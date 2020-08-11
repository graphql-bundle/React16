import React from "react";
import dayjs from "dayjs";

interface Props {
  launch: any;
}

const LaunchItem = (props: Props) => {
  const {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
  } = props.launch;

  return (
    <div className="card card-body mb-3">
      <div className="col-md-9 card-title">
        <h4>Mission: {mission_name}</h4>
        <p>Date: {dayjs(launch_date_local).format("YYYY-MM-DD HH:mm:ss")}</p>
      </div>
      <div className="col-md-3">
        <button className="btn btn-secondary">Launch Details</button>
      </div>
    </div>
  );
};

export default LaunchItem;

//  function LaunchItem({
//     launch: { flight_number, mission_name, launch_date_local, launch_success }
// }) {
//     return (

//     );
// }
