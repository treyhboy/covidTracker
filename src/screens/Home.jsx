import React, { useEffect, useState } from "react";
import "../App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Highlights from "../components/Highlights";
import DetailTable from "../components/DetailTable";
import Spinner from "react-bootstrap/Spinner";
import { getHighlightsData, getResponse } from "../helpers";

const Home = () => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    (async () => setResponse(await getResponse()))();
  }, []);
  if (response) {
    const highlightsData = getHighlightsData(response);
    return (
      <div className="app-container">
        <Header enableSearch />
        <Highlights highlightsData={highlightsData} header={"India"} />
        <DetailTable detailsData={response} mode={"State"} />
      </div>
    );
  }
  return (
    <div className="loader-container">
      <Spinner animation="border" role="status" variant="success" size="xl" />
    </div>
  );
};
export default Home;
