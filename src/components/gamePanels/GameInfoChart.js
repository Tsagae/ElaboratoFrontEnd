import * as React from "react";
import "../../globalStyle/globalStyle.css";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import zoomPlugin from 'chartjs-plugin-zoom';

export default class GameInfoChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //labels_twitchData_Avg_viewers: [],
            //labels_historicalEsportData: [],
            labels: [],
            twitchData_Avg_viewers: [],
            twitchData_Peak_viewers: [],
            viewersToPlayersConversionRate: [],
            //twitchData_Avg_viewers: [],
            historicalEsportData_Players: [],
            historicalEsportData_Earnings: [],
            historicalEsportData_Torunaments: [],
        };
    }


    componentDidMount() {
        this.processChartData();
        Chart.register(zoomPlugin);
    }

    processChartData() {
        const dateOptions = {
            year: "numeric",
            month: "long",
        };

        let labels = [];

        //twitchData_Avg_viewers
        let labels_twitchData = [];
        let twitchData_Avg_viewers = [];
        let twitchData_Peak_viewers = [];
        //let twitchData_Avg_viewers = [];


        this.props.twitchData.forEach((element) => {
            let date = Date.parse(element.Date);
            labels_twitchData.push(
                //Intl.DateTimeFormat("en-US", dateOptions).format(date)
                date
            );
            if (labels.indexOf(date) == -1) {
                //labels.push(Intl.DateTimeFormat("en-US", dateOptions).format(date));
                labels.push(date);
            }
            twitchData_Avg_viewers.push(element.Avg_viewers);
            twitchData_Peak_viewers.push(element.Peak_viewers);
            //twitchData_Avg_viewers.push(element.Avg_viewers)
        });

        //EsportData
        let labels_historicalEsportData = [];
        let historicalEsportData_Players = [];
        let historicalEsportData_Earnings = [];
        let historicalEsportData_Torunaments = [];

        this.props.historicalEsportData.forEach((element) => {

            let date = Date.parse(element.Date);
            labels_historicalEsportData.push(
                //Intl.DateTimeFormat("en-US", dateOptions).format(date)
                date
            );

            if (labels.indexOf(date) == -1) {
                //labels.push(Intl.DateTimeFormat("en-US", dateOptions).format(date));
                labels.push(date);
            }

            historicalEsportData_Players.push(element.Players);
            historicalEsportData_Earnings.push(element.Earnings);
            historicalEsportData_Torunaments.push(element.Tournaments);
        });

        labels.sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(a) - new Date(b);
        });


        for (let i = 0; i < labels.length; i++) {
            if (labels[i] < labels_historicalEsportData[i]) {
                labels_historicalEsportData.splice(i, 0, labels[i]);
                historicalEsportData_Players.splice(i, 0, null);
                historicalEsportData_Earnings.splice(i, 0, null);
                historicalEsportData_Torunaments.splice(i, 0, null);
            }
            if (labels[i] < labels_twitchData[i]) {
                labels_twitchData.splice(i, 0, labels[i]);
                twitchData_Avg_viewers.splice(i, 0, null);
                twitchData_Peak_viewers.splice(i, 0, null);
            }
        }

        /*
        for(let i = 0; i < labels_twitchData.length; i++){
            if(labels_historicalEsportData.indexOf(labels_twitchData[i]) == -1){
                labels_historicalEsportData.push(labels_twitchData[i]);
            } 
        }*/

        let viewersToPlayersConversionRate = [];
        for (let i = 0; i < labels.length; i++) {
            labels.splice(i, 1, Intl.DateTimeFormat("en-US", dateOptions).format(labels[i]));
            if (historicalEsportData_Players[i] != null && twitchData_Avg_viewers[i] != null) {
                viewersToPlayersConversionRate.push(historicalEsportData_Players[i] / twitchData_Avg_viewers[i]);
            } else {
                viewersToPlayersConversionRate.push(null);
            }
        }

        this.setState({
            //labels_twitchData_Avg_viewers: labels_twitchData,
            labels: labels,
            twitchData_Avg_viewers: twitchData_Avg_viewers,
            twitchData_Peak_viewers: twitchData_Peak_viewers,
            historicalEsportData_Players: historicalEsportData_Players,
            historicalEsportData_Earnings: historicalEsportData_Earnings,
            historicalEsportData_Torunaments: historicalEsportData_Torunaments,
            viewersToPlayersConversionRate: viewersToPlayersConversionRate
            //extra lables TODO remove for production
            //labels_historicalEsportData: labels_historicalEsportData,
            //labels_twitchData, labels_twitchData,
        });
    }

    render() {

        let data = {

            labels: this.state.labels,
            datasets: [
                {
                    label: "Average Viewers",
                    data: this.state.twitchData_Avg_viewers,
                    fill: false,
                    backgroundColor: "#9147ff",
                    borderColor: "#9147ff",
                    borderWidth: 0.8,
                    yAxisID: 'y-axis-1',
                    spanGaps: true,
                    tension: 0.3,
                },
                {
                    label: "Peak Viewers",
                    data: this.state.twitchData_Peak_viewers,
                    fill: false,
                    backgroundColor: "#ffffff",
                    borderColor: "#ffffff",
                    borderWidth: 0.8,
                    yAxisID: 'y-axis-2',
                    spanGaps: true,
                    tension: 0.3,
                },
                {
                    label: "Viewers to Players Conversion Rate",
                    data: this.state.viewersToPlayersConversionRate,
                    fill: false,
                    backgroundColor: "#00d0ff",
                    borderColor: "#00d0ff",
                    borderWidth: 0.8,
                    yAxisID: 'y-axis-3',
                    spanGaps: true,
                    tension: 0.3,
                },
                {
                    label: "Players",
                    data: this.state.historicalEsportData_Players,
                    fill: false,
                    backgroundColor: "#ff0000",
                    borderColor: "#ff0000",
                    borderWidth: 0.8,
                    yAxisID: 'y-axis-4',
                    spanGaps: true,
                    tension: 0.3,
                },
                {
                    label: "Earnings",
                    data: this.state.historicalEsportData_Earnings,
                    fill: false,
                    backgroundColor: "rgba(56,161,69,1)",
                    borderColor: "rgba(56,161,69,1)",
                    borderWidth: 0.8,
                    yAxisID: 'y-axis-5',
                    spanGaps: true,
                    tension: 0.3,
                },
                {
                    label: "Tournaments",
                    data: this.state.historicalEsportData_Torunaments,
                    fill: false,
                    backgroundColor: "#ffe100",
                    borderColor: "#ffe100",
                    borderWidth: 0.8,
                    yAxisID: 'y-axis-6',
                    spanGaps: true,
                    tension: 0.3,
                },
            ],
        };

        let options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        ticks: { display: false },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    },
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
                     {
                         type: 'linear',
                         display: false,
                         position: 'right',
                         id: 'y-axis-5',
                         gridLines: {
                             drawOnArea: false,
                         },
                     },
                     {
                         type: 'linear',
                         display: false,
                         position: 'right',
                         id: 'y-axis-5',
                         gridLines: {
                             drawOnArea: false,
                         },
                     },
                ],
                xAxes: [{
                    display: false,
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 100,
                },
            },
            plugins: {
                zoom: {
                    pan: {
                        enabled: true,
                        mode: 'x',
                        speed: 1, //most likely doesen't work
                        threshold: 10 //most likely doesen't work
                        
                    },
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        pinch: {
                            enabled: true
                        },
                        /*drag: {
                            enabled: true
                        },*/
                        mode: 'x'
                    },
                    limits: {
                        x: {
                            minDelay: 0,
                            maxDelay: 4000,
                            minDuration: 1000,
                            maxDuration: 20000
                        }
                    }
                },

                labels: {
                    fontColor: "#a83232", //not working
                },
                legend: {
                    display: true, //working
                    position: 'top',
                    align: 'end'
                },
                title: {
                    display: false, //working
                    text: "Data Over Time",
                },

            }

        };

        return (
            <div className={this.props.innertChartWrapper}>
                <Line
                    data={data}
                    options={options}
                    plugins={[zoomPlugin]}
                    className={this.props.className}
                />
            </div>
        );
    }
}
