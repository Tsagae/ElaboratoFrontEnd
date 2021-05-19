import * as React from "react";
import "../globalStyle/globalStyle.css";
import { Line } from "react-chartjs-2";

export default class GameInfoChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels_twitchData_Avg_viewers: [],
            //labels_historicalEsportData_Players: [],
            twitchData_Avg_viewers: [],
            //twitchData_Avg_viewers: [],
            historicalEsportData_Players: [],
            historicalEsportData_Earnings: [],
            historicalEsportData_Torunaments: [],
        };
    }

    componentDidMount() {
        this.processChartData();
    }

    processChartData() {
        const dateOptions = {
            year: "numeric",
            month: "long",
        };

        //twitchData_Avg_viewers
        let lables_twitchData_Avg_viewers = [];
        let twitchData_Avg_viewers = [];
        //let twitchData_Avg_viewers = [];


        this.props.twitchData.forEach((element) => {
            let date = new Date(element.Date);
            lables_twitchData_Avg_viewers.push(
                Intl.DateTimeFormat("en-US", dateOptions).format(date)
            );
            twitchData_Avg_viewers.push(element.Avg_viewers);
            //twitchData_Avg_viewers.push(element.Avg_viewers)
        });

        //EsportData
        //let labels_historicalEsportData_Players = [];
        let historicalEsportData_Players = [];
        let historicalEsportData_Earnings = [];
        let historicalEsportData_Torunaments = [];

        this.props.historicalEsportData.forEach((element) => {
            //let date = new Date(element.Date);
            //labels_historicalEsportData_Players.push(
            //    Intl.DateTimeFormat("en-US", dateOptions).format(date)
            //);
            historicalEsportData_Players.push(element.Players);
            historicalEsportData_Earnings.push(element.Earnings)
            historicalEsportData_Torunaments.push(element.Tournaments);
        });


        this.setState({
            labels_twitchData_Avg_viewers: lables_twitchData_Avg_viewers,

            twitchData_Avg_viewers: twitchData_Avg_viewers,
            //twitchData_Avg_viewers: twitchData_Avg_viewers,
            historicalEsportData_Players: historicalEsportData_Players,
            historicalEsportData_Earnings: historicalEsportData_Earnings,
            historicalEsportData_Torunaments: historicalEsportData_Torunaments,
        });
    }

    render() {

        let data = {

            labels: this.state.labels_twitchData_Avg_viewers,
            datasets: [
                {
                    label: "Average Viewers",
                    data: this.state.twitchData_Avg_viewers,
                    backgroundColor: "#9147ff",
                    borderColor: "#9147ff",
                    borderWidth: 0.8,
                    yAxisID: 'y-axis-1',
                },
                {
                    label: "Players",
                    data: this.state.historicalEsportData_Players,
                    backgroundColor: "#ff0000",
                    borderColor: "#ff0000",
                    borderWidth: 0.8,
                    yAxisID: 'y-axis-2',
                },
                {
                    label: "Earnings",
                    data: this.state.historicalEsportData_Earnings,
                    backgroundColor: "rgba(56,161,69,1)",
                    borderColor: "rgba(56,161,69,1)",
                    borderWidth: 0.8,
                    yAxisID: 'y-axis-3',
                },
                {
                    label: "Tournaments",
                    data: this.state.historicalEsportData_Torunaments,
                    backgroundColor: "#ffe100",
                    borderColor: "#ffe100",
                    borderWidth: 0.8,
                    yAxisID: 'y-axis-4',
                },
            ],
        };

        let options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        type: 'linear',
                        display: false,
                        position: 'right',
                        id: 'y-axis-1',
                        gridLines: {
                            drawOnArea: false,
                        },
                    },
                    {
                        type: 'linear',
                        display: false,
                        position: 'right',
                        id: 'y-axis-2',
                        gridLines: {
                            drawOnArea: false,
                        },
                    },
                    {
                        type: 'linear',
                        display: false,
                        position: 'right',
                        id: 'y-axis-3',
                        gridLines: {
                            drawOnArea: false,
                        },
                    },
                    {
                        type: 'linear',
                        display: false,
                        position: 'right',
                        id: 'y-axis-4',
                        gridLines: {
                            drawOnArea: false,
                        },
                    },
                ],
            },
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
                    display: true, //working
                    position: 'top',
                },
                title: {
                    display: true, //working
                    text: "Data Over Time",
                },

            }

        };

        return (
            <div>
                <Line
                    data={data}
                    options={options}
                    className={this.props.className}
                />
            </div>
        );
    }
}
