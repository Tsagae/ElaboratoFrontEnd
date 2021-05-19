import * as React from "react";
import * as styles from "./game.module.css";
import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import TwitchThumbnail from "../components/TwitchThumbnail";
import GamesIndex from "../components/GamesIndex";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            EsportGames_Data: [],
            HistoricalEsportData_Data: [],
            TwitchEsportGames_Data: [],
        };
    }

    componentDidMount() {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let gameID = params.get('gameID');
        //console.log(gameID);
        fetch("https://mzaghenoapi.sytes.net/queryDB/getGameInfo?GameID=" + gameID)
            .then((res) => res.text())
            .then((data) => {
                this.setState({
                    loaded: true,
                    EsportGames_Data: JSON.parse(data)[0][0],
                    HistoricalEsportData_Data: JSON.parse(data)[0][1],
                    TwitchEsportGames_Data: JSON.parse(data)[0][2],
                });
                //console.log(JSON.parse(data));
            });
    }

    render() {
        if (!this.state.loaded) {
            return (
                <div>
                    <Layout>
                        <div className={styles.mainContent}>
                            <h4>Loading...</h4>
                        </div>
                    </Layout>
                </div>
            );
        } else {
            return (
                <div>
                    <Layout>
                        <div className={styles.mainContent}>
                            <div className={styles.generalGameInfo}>
                                <TwitchThumbnail game={this.state.EsportGames_Data.GameName} width={198} height={264} />
                            </div>
                            <div>

                            </div>
                        </div>
                    </Layout>
                </div>
            );
        }
    }
}