import * as React from "react";
import "../globalStyle/globalStyle.css";
import { Bar } from "react-chartjs-2";
//import DownsamplePlugin from 'chartjs-plugin-downsample';

export default class getHighestEarningPlayersOffset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: [],
            earnings: [],
        };
    }

    componentDidMount() {
        fetch("https://mzaghenoapi.sytes.net/queryDB/getHighestEarningPlayersOffset?offset=0&limit=15")
            .then((res) => res.text())
            .then((data) => this.processChartData(JSON.parse(data)));
    }

    processChartData(data) {
        console.log(data);

        let labels = [];
        let earnings = [];

        data[0].forEach((element) => {
            labels.push(element.CurrentHandle);
            earnings.push(element.TotalUSDPrize);
        });

        this.setState({
            labels: labels,
            earnings: earnings,
        });
    }

    render() {
        let data = {
            labels: this.state.labels,
            datasets: [
                {
                    label: "Earnings",
                    data: this.state.earnings,
                    fill: false,
                    backgroundColor: "#39a145",
                    borderColor: "#39a145",
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
                    text: "Highest Earning Players",
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
