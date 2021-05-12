import * as React from "react";
import "../globalStyle/globalStyle.css";
import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import Graph from "../components/Graph";
import * as styles from "./index.module.css";

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <div>
          <h1>Content</h1>
          <Searchbar />
          <div className={styles.mainGraphs}>
            <div className={styles.graphWrapper}>
              <Graph source="" />
            </div>
            <div className={styles.graphWrapper}>
              <Graph source="" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
