import * as React from "react";
import "../globalStyle/globalStyle.css";
import TwitchThumbnail from "./TwitchThumbnail";
import * as styles from "./GamesIndex.module.css";
import { Link } from "gatsby";

export default class GamesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            data: [],
            searchStr: this.props.searchStr,
        };
    }

    componentDidMount() {
        //console.log("offset: " + this.props.offset);
        //console.log("limit: " + this.props.limit);
        fetch("https://mzaghenoapi.sytes.net/queryDB/getMostViewedEsportGamesOffset?offset=" + this.props.offset + "&limit=" + this.props.limit)
            .then((res) => res.text())
            .then((data) => {
                this.setState({ loaded: true, data: JSON.parse(data)[0], searchStr: this.state.searchStr, });
                //console.log(JSON.parse(data)[0]);
            });
    }

    componentDidUpdate() {
        if (this.state.searchStr != this.props.searchStr) {
            this.setState({
                loaded: this.state.loaded,
                data: this.state.data,
                searchStr: this.props.searchStr,
            });
        }
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
            let filteredData = [];
            this.state.data.forEach(element => {
                if (!this.state.searchStr) {
                    filteredData.push(element);
                } else if (element.GameName.toLowerCase().includes(this.state.searchStr.toLowerCase())) {
                    filteredData.push(element);
                }
            });
            return (
                <div className={styles.mainContent}>
                    <ul className={styles.gameList}>
                        {filteredData.map(item => (
                            <React.Fragment key={item.GameID}>
                                <li>
                                    <Link to={`/game?gameID=${encodeURIComponent(item.GameID)}`}>
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