import * as React from "react";
import * as styles from "./TwitchDetailPanel.module.css";

export default function TwitchDetailPanel(props) {
    return (
        <div className={styles.container}>
            <div>
                <p>{props.TwitchDataSummary.Peak_Viewers}</p>
                <hr />
                <h5>Peak Viewers</h5>
            </div>
            <div >
                <p>{props.TwitchDataSummary.Avg_Viewers}</p>
                <hr />
                <h5>Average Viewers</h5>
            </div>
            <div >
                <p>{props.TwitchDataSummary.Peak_Channels}</p>
                <hr />
                <h5>Peak Channels</h5>
            </div>
            <div >
                <p>{props.TwitchDataSummary.Avg_Rank}</p>
                <hr />
                <h5>Average Rank</h5>
            </div>
        </div>
    );

}