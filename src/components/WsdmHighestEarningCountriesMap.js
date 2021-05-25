import React, { memo } from "react";
import ReactDOM from "react-dom";
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography
} from "react-simple-maps";

import { scaleQuantile } from "d3-scale";
import tooltip from "wsdm-tooltip"
import "../globalStyle/globalStyle.css";
import * as styles from "./WsdmHighestEarningCountriesMap.module.css";

class WsdmHighestEarningCountriesMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            players: null,
            geoUrl: null,
            colorScale: null,
            position: {
                zoom: 1.1,
                coordinates: [0, 0],
            }
        };
    }

    componentDidMount() {

        this.tip = tooltip({
            className: "wsdm-tooltip",
            styles: {
                color: "#ffffff",
                "font-size": "1rem",
                "background-color": "rgba(38, 39, 41)",
                "padding": "10px",
                "border-radius": "10px",
                "transition": "0.5s",
                "pointer-events": "none"
            },
        });
        this.tip.create();

        const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

        fetch("https://mzaghenoapi.sytes.net/queryDB/getHighestEarningCountries")
            .then((res) => res.text())
            .then((data) => JSON.parse(data)[0]).then(players => {
                setTimeout(function () {
                    this.setState({
                        loaded: true,
                        players: players,
                        geoUrl: geoUrl,
                        colorScale: null,
                        position: {
                            zoom: 1.1,
                            coordinates: [0, 0],
                        }
                    });
                }.bind(this), 1200);
            });

    }
    processChartData(data) {

    }

    rounded(num) {
        if (typeof num == 'undefined') {
            return 0;
        } else if (num > 1000000000) {
            return Math.round(num / 100000000) / 10 + "Bn";
        } else if (num > 1000000) {
            return Math.round(num / 100000) / 10 + "M";
        } else {
            return Math.round(num / 100) / 10 + "K";
        }
    };

    handleZoomIn() {
        if (this.state.position.zoom >= 4) return;
        this.setState({
            loaded: this.state.loaded,
            players: this.state.players,
            geoUrl: this.state.geoUrl,
            colorScale: this.state.colorScale,
            position: {
                zoom: this.state.position.zoom * 2,
                coordinates: this.state.position.coordinates,
            }
        });
    }

    handleZoomOut() {
        if (this.state.position.zoom <= 1.1) return;
        this.setState({
            loaded: this.state.loaded,
            players: this.state.players,
            geoUrl: this.state.geoUrl,
            colorScale: this.state.colorScale,
            position: {
                zoom: this.state.position.zoom / 2,
                coordinates: this.state.position.coordinates,
            }
        });
    }

    handleMoveEnd(position) {
        this.setState({
            loaded: this.state.loaded,
            players: this.state.players,
            geoUrl: this.state.geoUrl,
            colorScale: this.state.colorScale,
            position: position
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
            const colorScale = scaleQuantile()
                .domain(this.state.players.map(d => d.TotalUSDPrize))
                .range([
                    "#b3ffba",
                    "#9ef0a6",
                    "#89e091",
                    "#7bd483",
                    "#6fc977",
                    "#65bf6d",
                    "#5bb363",
                    "#50a657",
                    "#45964c",
                    "#3b8a42",
                    "#34823b",
                    "#2f7a35",
                    "#27702d",
                    "#216927",
                    "#1a5c1f",
                    "#15521a",
                    "#145219",
                    "#124d16",
                    "#104a13",
                    "#0d420f",
                    "#0b400d",
                    "#08360a",
                    "#062b07",
                    "#052605"
                ]);

            return (
                <div style={{ width: this.props.width, height: this.props.height, position: "relative", border: "4px solid", borderColor: "#4da246" }}>
                    <div className={styles.controls}>
                        <button className={styles.btn} onClick={this.handleZoomIn.bind(this)}>
                            <svg className={styles.imgBtn}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="3"
                            >
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </button>
                        <button className={styles.btn} onClick={this.handleZoomOut.bind(this)}>
                            <svg className={styles.imgBtn}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="3"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </button>
                    </div>

                    <ComposableMap>
                        <ZoomableGroup
                            zoom={this.state.position.zoom}
                            center={this.state.position.coordinates}
                            onMoveEnd={(position) => this.handleMoveEnd(position)}
                        >
                            <Geographies geography={this.state.geoUrl}>
                                {({ geographies }) =>
                                    geographies.map(geo => {
                                        //console.log(geo);  
                                        const cur = this.state.players.find(s => s.CountryCode === geo.properties.ISO_A2.toLowerCase());
                                        let TotUSDPrize = this.rounded(Object.assign({}, cur).TotalUSDPrize);
                                        return (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill={cur ? colorScale(cur.TotalUSDPrize) : "#656565"}
                                                onMouseEnter={(evt) => {
                                                    const { NAME, POP_EST } = geo.properties;
                                                    let outString = `${NAME} - ${(typeof TotUSDPrize == 'undefined') ? "No data" : "$" + TotUSDPrize}`;
                                                    this.tip.show("<div class=\"wsdm-tooltip\" style=\"background-color:rgb(38, 39, 41)\">" + outString + "</div>");
                                                    this.tip.position({ pageX: evt.pageX, pageY: evt.pageY });
                                                }}
                                                onMouseLeave={() => {
                                                    this.tip.hide();
                                                }}
                                                style={{
                                                    width: this.props.width,
                                                    height: this.props.height,
                                                    default: { outline: "none" },
                                                    hover: { fill: "#DDD", outline: "none" },
                                                    pressed: { outline: "none" },
                                                }}
                                            />
                                        );
                                    })
                                }
                            </Geographies>
                        </ZoomableGroup>
                    </ComposableMap>
                </div>
            );
        }
    }
}

export default memo(WsdmHighestEarningCountriesMap);