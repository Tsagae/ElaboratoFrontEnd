import * as React from "react";
import "../globalStyle/globalStyle.css";
import { Bar } from "react-chartjs-2";
import Loader from "./Loader";
//import DownsamplePlugin from 'chartjs-plugin-downsample';

export default class HighestEarningTeamsChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            labels: [],
            earnings: [],
        };
    }

    componentDidMount() {
        fetch("https://mzaghenoapi.sytes.net/queryDB/getHighestEarningTeams")
            .then((res) => res.text())
            .then((data) => this.processChartData(JSON.parse(data)));
    }

    processChartData(data) {
        //console.log(data);

        let labels = [];
        let earnings = [];

        data[0].forEach((element) => {
            labels.push(element.TeamName);
            earnings.push(element.TotalUSDPrize);
        });

        setTimeout(function () {
            this.setState({
                loaded: true,
                labels: labels,
                earnings: earnings,
            });
        }.bind(this), 300);
    }

    render() {
        if (!this.state.loaded) {
            return (<Loader />);
        } else {
            let data = {
                labels: this.state.labels,
                datasets: [
                    {
                        label: "Earnings",
                        data: this.state.earnings,
                        fill: false,
                        backgroundColor: "#0700ff",
                        borderColor: "#0700ff",
                        borderWidth: 1,
                    },
                ],
            }

            let options = {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                    },
                },
                plugins: {
                    labels: {
                        fontColor: "#a83232", //not working
                    },
                    legend: {
                        display: false, //working
                        position: 'top',
                    },
                    title: {
                        display: true, //working
                        text: "Highest Earning Teams",
                    },

                }

            };

            return (
                <div>
                    <Bar data={data} options={options} className={this.props.className} />
                </div>
            );
        }
    }
}
