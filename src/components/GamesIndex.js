import * as React from "react";
import "../globalStyle/globalStyle.css";
import TwitchThumbnail from "./TwitchThumbnail";

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
        fetch("https://mzaghenoapi.sytes.net/queryDB/getAllEsportGames?offset=" + this.props.offset + "&limit=" + this.props.limit)
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
                <div>
                    <ul>
                        {this.state.data.map(item => (
                            <React.Fragment> 
                                <li><TwitchThumbnail game={item.GameName} /></li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}