import * as React from "react";
import "../globalStyle/globalStyle.css";
import TwitchThumbnail from "./TwitchThumbnail";
import * as styles from "./GamesIndex.module.css";

export default class GamesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            data: [],
        };
    }

    componentDidMount() {
        console.log("offset: " + this.props.offset);
        console.log("limit: " + this.props.limit);
        fetch("https://mzaghenoapi.sytes.net/queryDB/getMostPlayedEsportGamesOffset?offset=" + this.props.offset + "&limit=" + this.props.limit)
            .then((res) => res.text())
            .then((data) => {
                this.setState({ loaded: true, data: JSON.parse(data)[0] });
                console.log(JSON.parse(data)[0]);
            });
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
                                    <div className={styles.thumbNailTitleContainer}>
                                        <TwitchThumbnail game={item.GameName} width={198} height={264} />
                                        <h5 className={styles.gameName}>{item.GameName}</h5>
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