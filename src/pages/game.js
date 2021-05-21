import * as React from "react";
import * as styles from "./game.module.css";
import Layout from "../components/Layout";
import TwitchThumbnail from "../components/TwitchThumbnail";
import GameInfoChart from "../components/gamePanels/GameInfoChart";
import EsportDetailPanel from "../components/gamePanels/EsportDetailPanel";
import TwitchDetailPanel from "../components/gamePanels/TwitchDetailPanel";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameID: 86, //CSGO as default
            loaded: false,
            EsportGames_Data: [],
            HistoricalEsportData_Data: [],
            TwitchEsportGames_Data: [],
            TwitchDataSummary: [],
        };
    }

    componentDidMount() {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let gameID = params.get('gameID');
        if (gameID == null) {
            this.setState({
                loaded: "error",
            });
            return; //prevent from asking the api a game that doesen't exist
        }
        fetch("https://mzaghenoapi.sytes.net/queryDB/getGameInfo?gameID=" + gameID)
            .then((res) => res.text())
            .then((data) => {
                this.setState({
                    gameID: gameID,
                    loaded: true,
                    EsportGames_Data: JSON.parse(data)[0][0],
                    HistoricalEsportData_Data: JSON.parse(data)[1],
                    TwitchEsportGames_Data: JSON.parse(data)[2],
                    TwitchDataSummary: JSON.parse(data)[3],
                });
                console.log(this.state);
            });
    }

    render() {
        if (!this.state.loaded) {
            return (
                <div>
                    <Layout>
                        <div className={styles.mainContent}>
                            <h5>Loading...</h5>
                        </div>
                    </Layout>
                </div>
            );
        } else if (this.state.loaded == "error") {
            return (
                <div>
                    <Layout>
                        <div className={styles.mainContent}>
                            <h2> Invalid Game :( </h2>
                        </div>
                    </Layout>
                </div>
            );
        }
        else {
            console.log(this.state.TwitchEsportGames_Data);
            return (
                <div>
                    <Layout>
                        <div className={styles.topInfoPanel}>

                            <TwitchThumbnail game={this.state.EsportGames_Data.GameName} width={285} height={380} />
                            <div className={styles.detailInfoBox}>
                                <div className={styles.generalGameInfo}>
                                    <h2>{this.state.EsportGames_Data.GameName}</h2>
                                    <p>Release date: {this.state.EsportGames_Data.ReleaseDate}</p>
                                    <p>Genre: {this.state.EsportGames_Data.Genre}</p>
                                </div>
                                <div className={styles.infoPanels}>
                                    <TwitchDetailPanel TwitchDataSummary={this.state.TwitchDataSummary[0]} />
                                    <EsportDetailPanel EsportGames_Data={this.state.EsportGames_Data} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.gameInfoChartContainer}>
                            <GameInfoChart className={styles.gameInfoChart} twitchData={this.state.TwitchEsportGames_Data} historicalEsportData={this.state.HistoricalEsportData_Data} />
                        </div>
                    </Layout>
                </div>
            );
        }
    }
}