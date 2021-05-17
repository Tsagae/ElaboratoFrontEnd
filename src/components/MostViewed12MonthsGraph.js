import * as React from "react";
import "../globalStyle/globalStyle.css";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://mzaghenoapi.sytes.net/queryDB/getMostViewed12Months")
      .then((res) => res.text())
      .then((data) => this.processChartData(JSON.parse(data)));
  }

  processChartData(data) {
    const dateOptions = {
      year: "numeric",
      month: "long",
    };

    //TwitchGlobal_HoursWatched Data
    let labels_GameName = [];
    let data_HoursWatched = [];

    data.forEach((element) => {
        labels_GameName.push(element.GameName);
      data_HoursWatched.push(element.Hours_watched);
    });

    this.setState({
      labels: labels_GameName,
      data: data_HoursWatched,
    });
  }

  render() {

    let data={
      labels: this.state.labels,
      datasets: [
        {
          label: "Hours Watched",
          data: this.state.data,
          backgroundColor: "rgba(56,161,69,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 1,
        },
      ],
    }
    let options={
      maintainAspectRatio: false,
      indexAxis: 'y',
      //parsing: false, not working
      title: {
        /*
      display: true,
      text: "Average labels: this.state.labels,Rainfall per month",
      fontSize: 20,*/
        //not working
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
        },
      },
      plugins: {
        /*
      decimation: {
        enabled: false,
        algorithm: "min-max",
      },*/
        //not working
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            style: "italic",
            size: 24,
          },
        },
      },
    }

    return (
      <div>
        <Bar data={data} options={options} className={this.props.className} />
      </div>
    );
  }
}
