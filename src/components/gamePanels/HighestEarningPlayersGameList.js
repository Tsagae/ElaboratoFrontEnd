import * as React from "react";
import "../../globalStyle/globalStyle.css";
import * as styles from "./HighestEarningPlayersGameList.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactTooltip from "react-tooltip";

export default class HighestEarningPlayersGameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            data: this.props.playersData,
        };
    }

    //{"PlayerID":3679,"GameID":245,"NameFirst":"Andreas","NameLast":"Højsleth","CurrentHandle":"Xyp9x","CountryCode":"dk","TotalUSDPrize":1885080.23}
    componentDidMount() {

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

    render() {
        console.log(this.props.playersData);
        return (
            <div className={styles.mainContent}>
                <h4>Most Paid Players</h4>
                <ul className={styles.playersList}>
                    {this.props.playersData.map(item => (
                        <React.Fragment key={item.PlayerID}>
                            <li>
                                <div className={styles.playerItem}>
                                    <div className={styles.flagWrapper}>
                                        <LazyLoadImage
                                            src={"https://www.countryflags.io/" + item.CountryCode + "/shiny/24.png"}
                                            alt={item.CountryCode}
                                            width={24}
                                            height={24}
                                        //height={this.props.height}
                                        />
                                    </div>
                                    <h5 data-tip={(item.NameFirst + " " + item.NameLast)} onClick={() => window.open("https://www.esportsearnings.com/players/" + item.PlayerID, '_blank')}>{item.CurrentHandle + " $" + this.rounded(item.TotalUSDPrize)}</h5>
                                    <ReactTooltip/>
                                </div>
                            </li>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        );

    }
}