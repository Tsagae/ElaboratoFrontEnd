import * as React from "react";
import "../globalStyle/globalStyle.css";
import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import Chart from "../components/Chart";
import HistoricalChart from "../components/HistoricalChart";
import MostViewed12Months from "../components/MostViewed12MonthsGraph";
import * as styles from "./index.module.css";

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <div>
          <h1>Content</h1>
          <Searchbar />
          <div className={styles.indexLayout}>
            <div className={styles.mainCharts}>
              <div className={styles.chartWrapper}>
                <Chart source="" />
              </div>
              <div className={styles.chartWrapper}>
                <HistoricalChart source="" />
              </div>
            </div>
            <div className={styles.mainCharts}>
                <div className={styles.chartWrapper}>
                  <MostViewed12Months />
                </div>
                <div className={styles.chartWrapper}>
                  <MostViewed12Months />
                </div>
              </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
