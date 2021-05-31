import * as React from "react";
import "../globalStyle/globalStyle.css";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
//import DownsamplePlugin from 'chartjs-plugin-downsample';

export default class AnnualEsportGrowthChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      //data_NofTournaments: [],
      data_Earnings: [],
      //data_NofPlayers: [],
    };
  }

  componentDidMount() {
    fetch("https://mzaghenoapi.sytes.net/queryDB/getAnnualEsportGrowth")
      .then((res) => res.text())
      .then((data) => this.processChartData(JSON.parse(data)[0]));
  }

  processChartData(data) {
    const dateOptions = {
      year: "numeric",
    };

    let labels_HistoricalEsportData = [];
    //let data_NofTournaments = [];
    let data_Earnings = [];
    //let data_NofPlayers = [];

    data.forEach((element) => {
      let date = new Date(element.Date);
      labels_HistoricalEsportData.push(
        Intl.DateTimeFormat("en-US", dateOptions).format(date)
      );
      //data_NofTournaments.push(element.NofTournaments);
      data_Earnings.push(element.Earnings);
      //data_NofPlayers.push(element.NofPlayers);
    });

    this.setState({
      labels: labels_HistoricalEsportData,
      //data_NofTournaments: data_NofTournaments,
      data_Earnings: data_Earnings,
      //data_NofPlayers: data_NofPlayers,
    });
  }

  render() {
    let data = {
      labels: this.state.labels,
      datasets: [
        {
          label: "Earnings By Year",
          data: this.state.data_Earnings,
          fill: false,
          backgroundColor: "#fc3636",
          borderColor: "#fc3636",
          borderWidth: 1,
        },
      ],
    }

    let options = {
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
          text: "Total prizepool growth by year",
        },

      }

    };

    return (
      <div>
        <Bar data={data} height={this.props.height} options={options} className={this.props.className} />
      </div>
    );
  }
}
