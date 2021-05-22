import React, { memo } from "react";
import ReactDOM from "react-dom";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";

class HighestEarningPlayersMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            players: null,
            geoUrl: null,
            colorScale: null,
        };
    }

    componentDidMount() {
        const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

        fetch("https://mzaghenoapi.sytes.net/queryDB/getHighestEarningPlayersOffset?offset=0&limit=2000")
            .then((res) => res.text())
            .then((data) => JSON.parse(data)[0]).then(players => {
                console.log(players)
                this.setState({
                    loaded: true,
                    players: players,
                    geoUrl: geoUrl,
                    colorScale: null,
                });
            });

        /*
        const colorScale = scaleQuantile()
            .domain(this.state.players.map(d => d.TotalUSDPrize))
            .range([
                "#ffedea",
                "#ffcec5",
                "#ffad9f",
                "#ff8a75",
                "#ff5533",
                "#e2492d",
                "#be3d26",
                "#9a311f",
                "#782618"
            ]).then(this.setState({
                loaded: true,
                players: this.state.players,
                geoUrl: this.state.geoUrl,
                colorScale: colorScale,
            }));
        //console.log(data);
        //console.log(colorScale);*/


    }
    processChartData(data) {

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

        if (!this.state.loaded) {
            return (
                <div>
                    <h4>Loading...</h4>
                </div>
            );
        } else {
            const colorScale = scaleQuantile()
                .domain(this.state.players.map(d => d.TotalUSDPrize))
                .range([
                    "#ffedea",
                    "#ffcec5",
                    "#ffad9f",
                    "#ff8a75",
                    "#ff5533",
                    "#e2492d",
                    "#be3d26",
                    "#9a311f",
                    "#782618"
                ]);
            return (
                <div>
                    <ComposableMap>
                        <Geographies geography={this.state.geoUrl}>
                            {({ geographies }) =>
                                geographies.map(geo => {
                                    //console.log(geo);  
                                    const cur = this.state.players.find(s => s.CountryCode === geo.properties.ISO_A2.toLowerCase());
                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill={cur ? colorScale(cur.TotalUSDPrize) : "#EEE"}
                                            onMouseEnter={() => {
                                                const { NAME, POP_EST } = geo.properties;
                                                let outString = `${NAME} — ${this.rounded(POP_EST)}`;
                                                this.props.setTooltipContent(outString);
                                            }}
                                            onMouseLeave={() => {
                                                this.props.setTooltipContent("");
                                            }}
                                        />
                                    );
                                })
                            }
                        </Geographies>
                    </ComposableMap>
                </div>
            );
        }
    }
}

export default memo(HighestEarningPlayersMap);