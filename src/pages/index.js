import * as React from "react";
import "../globalStyle/globalStyle.css";
import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import Graph from "../components/Graph";
const IndexPage = () => {
  return (
    <div>
      <Layout>
        <div>
          <h1>Content</h1>
          <Searchbar />
          <Graph source="blabla">OOOOO</Graph>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
