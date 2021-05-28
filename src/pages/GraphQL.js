import React from "react";
//Bootstrap and graphql libraries
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery, gql } from "@apollo/client";
//set data query
const STATIONS_QUERY = gql`
  {
    stations {
      name
      station_id
      availability {
        num_bikes_available
        num_docks_available
      }
    }
  }
`;
export default function GraphQL() {
  const { data, loading, error } = useQuery(STATIONS_QUERY); //create query
  if (loading) return "Loading..."; //query processing
  if (error) return <pre>{error.message}</pre>; //if query has issue
  return (
    <div className="container p-5">
      <h1 className="mb-3">Therichpost.com</h1>
      <table class="table table-striped table-hover table-bordered table-lg">
        <thead>
          <tr>
            <th scope="col">Station ID</th>
            <th scope="col">Station Name</th>
            <th>num bikes available</th>
          </tr>
        </thead>
        <tbody>
          {data.stations.map((station) => (
            <tr>
              <td>{station.station_id}</td>
              <td>{station.name}</td>
              <td>{station.availability.num_bikes_available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
