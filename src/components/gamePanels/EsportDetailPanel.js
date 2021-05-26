import * as React from "react";
import * as styles from "./EsportDetailPanel.module.css";

export default function EsportDetailPanel(props) {
    
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
                <p>{rounded(props.EsportGames_Data.TotalEarnings)}</p>
                <hr />
                <h5>Total Earnings</h5>
            </div>
            <div >
                <p>{rounded(props.EsportGames_Data.OfflineEarnings)}</p>
                <hr />
                <h5>Offline Earnings</h5>
            </div>
            <div >
                <p>{rounded(props.EsportGames_Data.TotalPlayers)}</p>
                <hr />
                <h5>Total Players</h5>
            </div>
            <div >
                <p>{props.EsportGames_Data.TotalTournaments}</p>
                <hr />
                <h5>Total Tournaments</h5>
            </div>
        </div>
    );

}