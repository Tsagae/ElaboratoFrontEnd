import * as React from "react";
import "../globalStyle/globalStyle.css";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

export default function Chart(props) {

  const dateOptions = {
    year: "numeric",
    month: "long",
  };
  
  //TwitchGlobal_HoursWatched Data
  const TwitchGlobal_HoursWatched = [
    { Date: "2016-01-31T23:00:00.000Z", Hours_watched: 441859897 },
    { Date: "2016-02-29T23:00:00.000Z", Hours_watched: 490669308 },
    { Date: "2016-03-31T22:00:00.000Z", Hours_watched: 377975447 },
    { Date: "2016-04-30T22:00:00.000Z", Hours_watched: 449836631 },
    { Date: "2016-05-31T22:00:00.000Z", Hours_watched: 446429345 },
    { Date: "2016-06-30T22:00:00.000Z", Hours_watched: 446331825 },
    { Date: "2016-07-31T22:00:00.000Z", Hours_watched: 382117373 },
    { Date: "2016-08-31T22:00:00.000Z", Hours_watched: 362833210 },
    { Date: "2016-09-30T22:00:00.000Z", Hours_watched: 453035001 },
    { Date: "2016-10-31T23:00:00.000Z", Hours_watched: 449688428 },
    { Date: "2016-11-30T23:00:00.000Z", Hours_watched: 490484523 },
    { Date: "2016-12-31T23:00:00.000Z", Hours_watched: 601251200 },
    { Date: "2017-01-31T23:00:00.000Z", Hours_watched: 500932308 },
    { Date: "2017-02-28T23:00:00.000Z", Hours_watched: 516399977 },
    { Date: "2017-03-31T22:00:00.000Z", Hours_watched: 535431301 },
    { Date: "2017-04-30T22:00:00.000Z", Hours_watched: 506927522 },
    { Date: "2017-05-31T22:00:00.000Z", Hours_watched: 510832330 },
    { Date: "2017-06-30T22:00:00.000Z", Hours_watched: 566899230 },
    { Date: "2017-07-31T22:00:00.000Z", Hours_watched: 533450366 },
    { Date: "2017-08-31T22:00:00.000Z", Hours_watched: 527591318 },
    { Date: "2017-09-30T22:00:00.000Z", Hours_watched: 585177534 },
    { Date: "2017-10-31T23:00:00.000Z", Hours_watched: 575551503 },
    { Date: "2017-11-30T23:00:00.000Z", Hours_watched: 573137507 },
    { Date: "2017-12-31T23:00:00.000Z", Hours_watched: 720220030 },
    { Date: "2018-01-31T23:00:00.000Z", Hours_watched: 615710441 },
    { Date: "2018-02-28T23:00:00.000Z", Hours_watched: 721341613 },
    { Date: "2018-03-31T22:00:00.000Z", Hours_watched: 729326135 },
    { Date: "2018-04-30T22:00:00.000Z", Hours_watched: 762177378 },
    { Date: "2018-05-31T22:00:00.000Z", Hours_watched: 789065029 },
    { Date: "2018-06-30T22:00:00.000Z", Hours_watched: 796242999 },
    { Date: "2018-07-31T22:00:00.000Z", Hours_watched: 855860641 },
    { Date: "2018-08-31T22:00:00.000Z", Hours_watched: 815061013 },
    { Date: "2018-09-30T22:00:00.000Z", Hours_watched: 852724761 },
    { Date: "2018-10-31T23:00:00.000Z", Hours_watched: 865630693 },
    { Date: "2018-11-30T23:00:00.000Z", Hours_watched: 845969862 },
    { Date: "2018-12-31T23:00:00.000Z", Hours_watched: 949050474 },
    { Date: "2019-01-31T23:00:00.000Z", Hours_watched: 881506851 },
    { Date: "2019-02-28T23:00:00.000Z", Hours_watched: 947733580 },
    { Date: "2019-03-31T22:00:00.000Z", Hours_watched: 888326199 },
    { Date: "2019-04-30T22:00:00.000Z", Hours_watched: 939520272 },
    { Date: "2019-05-31T22:00:00.000Z", Hours_watched: 939126720 },
    { Date: "2019-06-30T22:00:00.000Z", Hours_watched: 916692478 },
    { Date: "2019-07-31T22:00:00.000Z", Hours_watched: 999177398 },
    { Date: "2019-08-31T22:00:00.000Z", Hours_watched: 878083331 },
    { Date: "2019-09-30T22:00:00.000Z", Hours_watched: 900334210 },
    { Date: "2019-10-31T23:00:00.000Z", Hours_watched: 879157590 },
    { Date: "2019-11-30T23:00:00.000Z", Hours_watched: 881497670 },
    { Date: "2019-12-31T23:00:00.000Z", Hours_watched: 1010010231 },
    { Date: "2020-01-31T23:00:00.000Z", Hours_watched: 981752149 },
    { Date: "2020-02-29T23:00:00.000Z", Hours_watched: 1218370086 },
    { Date: "2020-03-31T22:00:00.000Z", Hours_watched: 1792309113 },
    { Date: "2020-04-30T22:00:00.000Z", Hours_watched: 1755760388 },
    { Date: "2020-05-31T22:00:00.000Z", Hours_watched: 1629282927 },
    { Date: "2020-06-30T22:00:00.000Z", Hours_watched: 1572595815 },
    { Date: "2020-07-31T22:00:00.000Z", Hours_watched: 1620682345 },
    { Date: "2020-08-31T22:00:00.000Z", Hours_watched: 1585511181 },
    { Date: "2020-09-30T22:00:00.000Z", Hours_watched: 1774145250 },
    { Date: "2020-10-31T23:00:00.000Z", Hours_watched: 1789235196 },
    { Date: "2020-11-30T23:00:00.000Z", Hours_watched: 1877319317 },
    { Date: "2020-12-31T23:00:00.000Z", Hours_watched: 2173794168 },
    { Date: "2021-01-31T23:00:00.000Z", Hours_watched: 1979581961 },
  ];
  var labels_TwitchGlobal_HoursWatched = [];
  var data_TwitchGlobal_HoursWatched = [];

  TwitchGlobal_HoursWatched.forEach((element) => {
    let date = new Date(element.Date);
    labels_TwitchGlobal_HoursWatched.push(
      Intl.DateTimeFormat("en-US", dateOptions).format(date)
    );
    data_TwitchGlobal_HoursWatched.push(element.Hours_watched);
  });


  return (
    <div>
      <p>{props.source}</p>
      <Line
        data={{
          labels: labels_TwitchGlobal_HoursWatched,
          datasets: [
            {
              label: "Hours Watched",
              data: data_TwitchGlobal_HoursWatched,
              backgroundColor: "rgba(56,161,69,1)",
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
