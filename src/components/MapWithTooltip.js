import * as React from "react";
import "../globalStyle/globalStyle.css";
import HighestEarningPlayersMap from "../components/HighestEarningPlayersMap";
import ReactTooltip from "react-tooltip";
import WsdmHighestEarningPlayersMap from "../components/WsdmHighestEarningPlayersMap";

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
            <React.Fragment>
                <ReactTooltip>"Ciao"</ReactTooltip>
                <WsdmHighestEarningPlayersMap setTooltipContent={this.setTooltipContent.bind(this)} />
            </React.Fragment>
        );
    }
}