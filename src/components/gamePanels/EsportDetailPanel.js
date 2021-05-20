import * as React from "react";
import * as styles from "./EsportDetailPanel.module.css";

export default function EsportDetailPanel(props) {
    return (
        <div className={styles.container}>
            <div>
                <p>{props.EsportGames_Data.TotalEarnings}</p>
                <hr />
                <h5>Total Earnings</h5>
            </div>
            <div >
                <p>{props.EsportGames_Data.OfflineEarnings}</p>
                <hr />
                <h5>Offline Earnings</h5>
            </div>
            <div >
                <p>{props.EsportGames_Data.TotalPlayers}</p>
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