import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  return (
    <>
      <h1 className="row-title">Launches</h1>
      <div className="row">
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }: any) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);
            return (
              <>
                {data.launches.map((launch: any) => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </>
            );
          }}
        </Query>
      </div>
    </>
  );
};
export default Launches;
