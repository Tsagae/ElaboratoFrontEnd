import * as React from "react";
import "../globalStyle/globalStyle.css";
import TwitchThumbnail from "./TwitchThumbnail";
import * as styles from "./GamesIndex.module.css";
import { Link } from "gatsby";

export default class GameInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            data: [],
        };
    }

    componentDidMount() {
        
    }


    render() {
        if (!this.state.loaded) {
            return (
                <div>
                    <h4>Loading...</h4>
                </div>
            );
        } else {
            //ricordati on React.Fragmet key={item.GameID}
            return (
                <div className={styles.mainContent}>
                    <ul>
                        {this.state.data.map(item => (
                            <React.Fragment>
                                <li>
                                    <Link to={`/game?gameID=${item.GameID}`}>
                                        <div className={styles.thumbNailTitleContainer}>
                                            <TwitchThumbnail game={item.GameName} width={198} height={264} />
                                            <h5 className={styles.gameName}>{item.GameName}</h5>
                                        </div>
                                    </Link>
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}