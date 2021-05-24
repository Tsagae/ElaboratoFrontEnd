import * as React from "react";
import { Suspense } from "react";
import "../globalStyle/globalStyle.css";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import Searchbar from "../components/Searchbar";
import Chart from "../components/Chart";
import HistoricalChart from "../components/HistoricalChart";
import MostViewed12Months from "../components/MostViewed12MonthsGraph";
import MostPlayed12Months from "../components/MostPlayed12MonthsGraph";
import HighestEarningPlayers from "../components/HighestEarningPlayersChart";
import WsdmHighestEarningCountriesMap from "../components/WsdmHighestEarningCountriesMap";
import * as styles from "./globalData.module.css";

//could be remade by movinig the api request here by making GlobalData a class and then passing data as props to the charts
export default class GlobalData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {

   // const WsdmHighestEarningCountriesMap = React.lazy(() => import("../components/WsdmHighestEarningCountriesMap"));

    return (
      <div>
        <Layout>
          <div>
            <h1>Global Data about Twitch and Esport Games</h1>
            <div className={styles.indexLayout}>
              <div className={styles.mainCharts} >
                <div className={styles.chartWrapper}>
                  <Chart className={styles.chart1} />
                </div>
                <div className={styles.chartWrapper}>
                  <HistoricalChart className={styles.chart1} />
                </div>
              </div>
              <div className={styles.mainCharts}>
                <div className={styles.chartWrapper}>
                  <MostViewed12Months className={styles.chart2} />
                </div>
                <div className={styles.chartWrapper}>
                  <MostPlayed12Months className={styles.chart2} />
                </div>
              </div>
              <div className={styles.mainCharts} >
                <div className={styles.chartWrapper}>
                  <HighestEarningPlayers className={styles.chart2} />
                </div>
                <div className={styles.chartWrapper}>
                  <HighestEarningPlayers className={styles.chart2} />
                </div>
              </div>
              <Suspense fallback={<Loader/>}>
                <div className={styles.mapContainer}>
                  <h4>Highest Earning Countries</h4>
                  <div className={styles.mapWrapper}>
                    <WsdmHighestEarningCountriesMap width={"100%"} heigth={"auto"} />
                  </div>
                </div>
              </Suspense>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}
