import * as React from "react";
import "../../globalStyle/globalStyle.css";
import * as styles from "./TournamentsList.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactTooltip from "react-tooltip";
import Loader from "../Loader";

export default class TournamentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            data: [],
            /*TournamentId: [],
            TournamentName: [],
            StartDate: [],
            EndDate: [],
            Location: [],
            Teamplay: [],
            TotalUSDPrize: []*/
        };
    }

    //{"TournamentId":46858,"GameId":245,"TournamentName":"ESEA Cash Cup: North America - Spring 2021 #5","StartDate":"2021-05-14T22:00:00.000Z","EndDate":"2021-05-15T22:00:00.000Z","Location":"Online","Teamplay":1,"TotalUSDPrize":15000,"AllTournamentsPureID":32}
    componentDidMount() {
        fetch("https://mzaghenoapi.sytes.net/queryDB/getTournamentByGameOffset?gameID=" + this.props.gameID + "&offset=" + this.props.offset + "&limit=" + this.props.limit)
            .then((res) => res.text())
            .then((data) => {
                this.setState({
                    loaded: true,
                    data: JSON.parse(data)[0],
                    /*TournamentId: JSON.parse(data)[0].TournamentId,
                    TournamentName: JSON.parse(data)[0].TournamentName,
                    StartDate: JSON.parse(data)[0].StartDate,
                    EndDate: JSON.parse(data)[0].EndDate,
                    Location: JSON.parse(data)[0].Location,
                    Teamplay: JSON.parse(data)[0].Teamplay,
                    TotalUSDPrize: JSON.parse(data)[0].TotalUSDPrize*/
                });
                console.log(this.state);
            });
    }

    componentDidUpdate() {

    }

    rounded(num) {
        if (num > 1000000000) {
            return Math.round(num / 100000000) / 10 + "Bn";
        } else if (num > 1000000) {
            return Math.round(num / 100000) / 10 + "M";
        } else {
            return Math.round(num / 100) / 10 + "K";
        }
    };
    // globe flag https://upload.wikimedia.org/wikipedia/commons/1/11/Globe_Flag.svg
    render() {
        const dateOptions = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        if (!this.state.loaded) {
            return (
                <div>
                    <Loader />
                </div>
            );
        } else {
            return (
                <div className={styles.mainContent}>
                    <h4>Recent Tournaments</h4>
                    <ul className={styles.torunamentsList}>
                        {this.state.data.map(item => (
                            <React.Fragment key={item.TournamentId}>
                                <li>
                                    <div className={styles.tournamentItem}>
                                        <div className={styles.flagWrapper}>
                                            <LazyLoadImage
                                                src={"https://upload.wikimedia.org/wikipedia/commons/1/11/Globe_Flag.svg"}
                                                alt={"placeholder"}
                                                width={24}
                                                height={14}
                                            />
                                        </div>
                                        <h5 data-tip={(item.Location + " " + Intl.DateTimeFormat("en-US", dateOptions).format(Date.parse(item.StartDate)) + " - " + Intl.DateTimeFormat("en-US", dateOptions).format(Date.parse(item.EndDate)))} onClick={() => window.open("https://www.esportsearnings.com/tournaments/" + item.TournamentId, '_blank')}>{item.TournamentName + " $" + this.rounded(item.TotalUSDPrize)}</h5>
                                        <ReactTooltip />
                                    </div>
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            );
        }

    }
}