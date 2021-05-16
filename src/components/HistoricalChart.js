import * as React from "react";
import "../globalStyle/globalStyle.css";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

export default class HistoricalChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      data_NofTournaments: [],
      data_Earnings: [],
      data_NofPlayers: [],
    };
  }

  componentDidMount() {
    fetch("https://mzagheno.sytes.net/queryDB/getHistoricalEsportData_Post2016")
      .then((res) => res.text())
      .then((data) => this.processChartData(JSON.parse(data)));
  }

  processChartData(data) {
    const dateOptions = {
      year: "numeric",
      month: "long",
    };

    let labels_HistoricalEsportData = [];
    let data_NofTournaments = [];
    let data_Earnings = [];
    let data_NofPlayers = [];

    data.forEach((element) => {
      let date = new Date(element.Date);
      labels_HistoricalEsportData.push(
        Intl.DateTimeFormat("en-US", dateOptions).format(date)
      );
      data_NofTournaments.push(element.NofTournaments);
      data_Earnings.push(element.Earnings);
      data_NofPlayers.push(element.NofPlayers);
    });

    this.setState({
      labels: labels_HistoricalEsportData,
      data_NofTournaments: data_NofTournaments,
      data_Earnings: data_Earnings,
      data_NofPlayers: data_NofPlayers,
    });
  }

  render() {
    return (
      <div>
        <Line
          data={{
            labels: this.state.labels,
            datasets: [
              {
                label: "Number of Tournaments",
                data: this.state.data_NofTournaments,
                backgroundColor: "rgba(168,50,50,1)",
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 1,
              },
              {
                label: "Earnings",
                data: this.state.data_Earnings,
                backgroundColor: "rgba(168,50,50,1)",
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 1,
              },
              {
                label: "Number of Players",
                data: this.state.data_NofPlayers,
                backgroundColor: "rgba(168,50,50,1)",
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            layout: {
              padding: {
                left: 0,
                right: 0,
              },
            },
            plugins: {
              /*decimation: {
              enable: true,
              algorithm: 'min-max'
            },*/
            },
            legend: {
              display: true,
              position: "top",
              lables: {
                font: {
                  style: "italic",
                  size: 24,
                },
              },
            },
          }}
        />
      </div>
    );
  }
}
