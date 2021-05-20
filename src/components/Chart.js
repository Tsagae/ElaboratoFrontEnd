import * as React from "react";
import "../globalStyle/globalStyle.css";
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
    fetch("https://mzaghenoapi.sytes.net/queryDB/getHoursWatched")
      .then((res) => res.text())
      .then((data) => this.processChartData(JSON.parse(data)));
  }

  processChartData(data) {
    const dateOptions = {
      year: "numeric",
      month: "long",
    };

    //TwitchGlobal_HoursWatched Data
    let labels_TwitchGlobal_HoursWatched = [];
    let data_TwitchGlobal_HoursWatched = [];

    data.forEach((element) => {
      let date = new Date(element.Date);
      labels_TwitchGlobal_HoursWatched.push(
        Intl.DateTimeFormat("en-US", dateOptions).format(date)
      );
      data_TwitchGlobal_HoursWatched.push(element.Hours_watched);
    });

    this.setState({
      labels: labels_TwitchGlobal_HoursWatched,
      data: data_TwitchGlobal_HoursWatched,
    });
  }

  render() {

    let data = {

      labels: this.state.labels,
      datasets: [
        {
          label: "Hours Watched",
          data: this.state.data,
          fill: false,
          backgroundColor: "#9147ff",
          borderColor: "#9147ff",
          borderWidth: 1,
        },
      ],
    };

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
          text: "Hours Watched on Esport Games",
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
