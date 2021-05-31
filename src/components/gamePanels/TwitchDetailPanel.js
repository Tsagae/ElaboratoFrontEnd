import * as React from "react";
import * as styles from "./TwitchDetailPanel.module.css";

export default function TwitchDetailPanel(props) {
    
    function rounded(num) {
        if (typeof num == 'undefined') {
            return 0;
        } else if (num > 1000000000) {
            return Math.round(num / 100000000) / 10 + "Bn";
        } else if (num > 1000000) {
            return Math.round(num / 100000) / 10 + "M";
        } else if (num > 1000) {
            return Math.round(num / 100) / 10 + "K";
        } else {
            return num;
        }
    };
    
    return (
        <div className={styles.container}>
            <div>
                <p>{rounded(props.TwitchDataSummary.Peak_Viewers)}</p>
                <hr />
                <h5>Peak Viewers</h5>
            </div>
            <div >
                <p>{rounded(props.TwitchDataSummary.Avg_Viewers)}</p>
                <hr />
                <h5>Average Viewers</h5>
            </div>
            <div >
                <p>{rounded(props.TwitchDataSummary.Peak_Channels)}</p>
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