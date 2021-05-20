import * as React from "react";
import "../globalStyle/globalStyle.css";
import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import Chart from "../components/Chart";
import HistoricalChart from "../components/HistoricalChart";
import MostViewed12Months from "../components/MostViewed12MonthsGraph";
import MostPlayed12Months from "../components/MostPlayed12MonthsGraph";
import * as styles from "./index.module.css";

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <div>
          <h1>Index</h1>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
