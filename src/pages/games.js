import * as React from "react";
import * as styles from "./games.module.css";
import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import TwitchThumbnail from "../components/TwitchThumbnail";
import GamesIndex from "../components/GamesIndex";

const Games = () => {
    return (
        <div>
            <Layout>
                <div>
                    <h1>Content</h1>
                    <Searchbar />
                    <div>
                        <TwitchThumbnail game="Command & Conquer 3" />
                    </div>
                    <div>
                        <GamesIndex offset={0} limit={100} />
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Games;