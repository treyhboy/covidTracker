import React, { useEffect, useState } from "react";
import "../App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Highlights from "../components/Highlights";
import DetailTable from "../components/DetailTable";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { getStateHighlightsData, getResponse } from "../helpers";
import { stateKeyVsName } from "../constants";

const State = () => {
  const [response, setResponse] = useState(null);
  const { stateCode } = useParams();
  useEffect(() => {
    (async () => setResponse(await getResponse()))();
  }, []);
  if (response) {
    const highlightsData = getStateHighlightsData(response[stateCode].total);
    return (
      <div className="app-container">
        <Header />
        <Highlights
          highlightsData={highlightsData}
          header={stateKeyVsName[stateCode]}
        />
        <DetailTable
          detailsData={response[stateCode].districts}
          mode={"district"}
        />
      </div>
    );
  }
  return (
    <div className="loader-container">
      <Spinner animation="border" role="status" variant="success" size="xl" />
    </div>
  );
};
export default State;
