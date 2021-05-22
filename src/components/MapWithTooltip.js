import * as React from "react";
import "../globalStyle/globalStyle.css";
import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import Chart from "../components/Chart";
import HistoricalChart from "../components/HistoricalChart";
import MostViewed12Months from "../components/MostViewed12MonthsGraph";
import MostPlayed12Months from "../components/MostPlayed12MonthsGraph";
import HighestEarningPlayers from "../components/HighestEarningPlayersChart";
import * as styles from "./globalData.module.css";
import HighestEarningPlayersMap from "../components/HighestEarningPlayersMap";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";


//could be remade by movinig the api request here by making GlobalData a class and then passing data as props to the charts
export default class MapWithTooltip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltipContent: "",
        };
    }


    setTooltipContent(tooltipContentParam) {
        this.setState(({ tooltipContent }) => ({ tooltipContent: tooltipContentParam }));
        console.log(this.state.tooltipContent);
    }

    render() {
        return (
            <div>
                <HighestEarningPlayersMap setTooltipContent={this.setTooltipContent.bind(this)} />
                <ReactTooltip>{this.state.tooltipContent}</ReactTooltip>
            </div>
        );
    }
}