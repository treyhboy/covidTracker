import React from "react";
import Table from "react-bootstrap/Table";
import { stateKeys, stateKeyVsName } from "../constants";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

const StateRowRenderer = (props) =>
  stateKeys.map((stateKey) => {
    const confirmed = props.detailsData[stateKey].total?.confirmed | 0;
    const deceased = props.detailsData[stateKey].total?.deceased | 0;
    const recovered = props.detailsData[stateKey].total?.recovered | 0;
    const active = confirmed - deceased - recovered;

    return (
      <tr onClick={() => props.history.push(`/state/${stateKey}`)}>
        <td>{stateKeyVsName[stateKey]}</td>
        <td>{confirmed}</td>
        <td>{active}</td>
        <td>{recovered}</td>
        <td>{deceased}</td>
      </tr>
    );
  });
const DistrictRowRenderer = (props) => {
  const districtkeys = Object.keys(props.detailsData);
  return districtkeys.map((districtkey) => {
    const confirmed = props.detailsData[districtkey].total?.confirmed | 0;
    const deceased = props.detailsData[districtkey].total?.deceased | 0;
    const recovered = props.detailsData[districtkey].total?.recovered | 0;
    const active = confirmed - deceased - recovered;

    return (
      <tr>
        <td>{districtkey}</td>
        <td>{confirmed}</td>
        <td>{active}</td>
        <td>{recovered}</td>
        <td>{deceased}</td>
      </tr>
    );
  });
};
const DetailTable = (props) => {
  const history = useHistory();
  return (
    <div className="table-container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>{props.mode}</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deceased</th>
          </tr>
        </thead>
        <tbody>
          {props.mode === "State" ? (
            <StateRowRenderer
              detailsData={props.detailsData}
              history={history}
            />
          ) : (
            <DistrictRowRenderer detailsData={props.detailsData} />
          )}
        </tbody>
      </Table>
    </div>
  );
};
export default DetailTable;
