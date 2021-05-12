import * as React from "react";
import "../globalStyle/globalStyle.css";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

export default function Chart(props) {
  const dateOptions = {
    year: "numeric",
    month: "long",
  };

  //HistoricalEsportData Data
  const HistoricalEsportData = [
    {
      Date: "2016-01-31T23:00:00.000Z",
      NofTournaments: 386,
      Earnings: 2123373.23,
      NofPlayers: 2237,
    },
    {
      Date: "2016-02-29T23:00:00.000Z",
      NofTournaments: 408,
      Earnings: 8298499.94,
      NofPlayers: 2544,
    },
    {
      Date: "2016-03-31T22:00:00.000Z",
      NofTournaments: 401,
      Earnings: 5418505.500000001,
      NofPlayers: 2993,
    },
    {
      Date: "2016-04-30T22:00:00.000Z",
      NofTournaments: 437,
      Earnings: 5137998.88,
      NofPlayers: 2986,
    },
    {
      Date: "2016-05-31T22:00:00.000Z",
      NofTournaments: 351,
      Earnings: 7242705.130000001,
      NofPlayers: 2411,
    },
    {
      Date: "2016-06-30T22:00:00.000Z",
      NofTournaments: 380,
      Earnings: 7149656.04,
      NofPlayers: 2830,
    },
    {
      Date: "2016-07-31T22:00:00.000Z",
      NofTournaments: 379,
      Earnings: 24439080.069999997,
      NofPlayers: 3097,
    },
    {
      Date: "2016-08-31T22:00:00.000Z",
      NofTournaments: 345,
      Earnings: 4898857.41,
      NofPlayers: 2443,
    },
    {
      Date: "2016-09-30T22:00:00.000Z",
      NofTournaments: 470,
      Earnings: 10720539.889999997,
      NofPlayers: 3472,
    },
    {
      Date: "2016-10-31T23:00:00.000Z",
      NofTournaments: 460,
      Earnings: 7646338.880000001,
      NofPlayers: 3640,
    },
    {
      Date: "2016-11-30T23:00:00.000Z",
      NofTournaments: 370,
      Earnings: 11231034.06,
      NofPlayers: 3309,
    },
    {
      Date: "2016-12-31T23:00:00.000Z",
      NofTournaments: 370,
      Earnings: 8951412.519999998,
      NofPlayers: 2286,
    },
    {
      Date: "2017-01-31T23:00:00.000Z",
      NofTournaments: 371,
      Earnings: 2757998.4700000007,
      NofPlayers: 2147,
    },
    {
      Date: "2017-02-28T23:00:00.000Z",
      NofTournaments: 371,
      Earnings: 3823014.36,
      NofPlayers: 2666,
    },
    {
      Date: "2017-03-31T22:00:00.000Z",
      NofTournaments: 514,
      Earnings: 9496017.519999998,
      NofPlayers: 4369,
    },
    {
      Date: "2017-04-30T22:00:00.000Z",
      NofTournaments: 404,
      Earnings: 8769291.45,
      NofPlayers: 3401,
    },
    {
      Date: "2017-05-31T22:00:00.000Z",
      NofTournaments: 342,
      Earnings: 6623278.869999999,
      NofPlayers: 2620,
    },
    {
      Date: "2017-06-30T22:00:00.000Z",
      NofTournaments: 404,
      Earnings: 7046546.35,
      NofPlayers: 3634,
    },
    {
      Date: "2017-07-31T22:00:00.000Z",
      NofTournaments: 434,
      Earnings: 31252554.559999995,
      NofPlayers: 4005,
    },
    {
      Date: "2017-08-31T22:00:00.000Z",
      NofTournaments: 402,
      Earnings: 4757734.86,
      NofPlayers: 3112,
    },
    {
      Date: "2017-09-30T22:00:00.000Z",
      NofTournaments: 416,
      Earnings: 9191765.93,
      NofPlayers: 3268,
    },
    {
      Date: "2017-10-31T23:00:00.000Z",
      NofTournaments: 411,
      Earnings: 13596492.28,
      NofPlayers: 3605,
    },
    {
      Date: "2017-11-30T23:00:00.000Z",
      NofTournaments: 411,
      Earnings: 10235245.040000005,
      NofPlayers: 4118,
    },
    {
      Date: "2017-12-31T23:00:00.000Z",
      NofTournaments: 306,
      Earnings: 6294830.499999999,
      NofPlayers: 2118,
    },
    {
      Date: "2018-01-31T23:00:00.000Z",
      NofTournaments: 278,
      Earnings: 4820654.499999999,
      NofPlayers: 2348,
    },
    {
      Date: "2018-02-28T23:00:00.000Z",
      NofTournaments: 350,
      Earnings: 10516722.040000003,
      NofPlayers: 3220,
    },
    {
      Date: "2018-03-31T22:00:00.000Z",
      NofTournaments: 392,
      Earnings: 11608973.98,
      NofPlayers: 4937,
    },
    {
      Date: "2018-04-30T22:00:00.000Z",
      NofTournaments: 398,
      Earnings: 10774572.13,
      NofPlayers: 3862,
    },
    {
      Date: "2018-05-31T22:00:00.000Z",
      NofTournaments: 351,
      Earnings: 9850802.19,
      NofPlayers: 3765,
    },
    {
      Date: "2018-06-30T22:00:00.000Z",
      NofTournaments: 361,
      Earnings: 13473632.130000003,
      NofPlayers: 3472,
    },
    {
      Date: "2018-07-31T22:00:00.000Z",
      NofTournaments: 347,
      Earnings: 38183377.99000001,
      NofPlayers: 4377,
    },
    {
      Date: "2018-08-31T22:00:00.000Z",
      NofTournaments: 407,
      Earnings: 12287208.97,
      NofPlayers: 4329,
    },
    {
      Date: "2018-09-30T22:00:00.000Z",
      NofTournaments: 413,
      Earnings: 15573725.109999998,
      NofPlayers: 4506,
    },
    {
      Date: "2018-10-31T23:00:00.000Z",
      NofTournaments: 452,
      Earnings: 17522245.9,
      NofPlayers: 3705,
    },
    {
      Date: "2018-11-30T23:00:00.000Z",
      NofTournaments: 610,
      Earnings: 14392460.879999999,
      NofPlayers: 5261,
    },
    {
      Date: "2018-12-31T23:00:00.000Z",
      NofTournaments: 400,
      Earnings: 6352569.940000001,
      NofPlayers: 3064,
    },
    {
      Date: "2019-01-31T23:00:00.000Z",
      NofTournaments: 342,
      Earnings: 5908505.569999999,
      NofPlayers: 2626,
    },
    {
      Date: "2019-02-28T23:00:00.000Z",
      NofTournaments: 524,
      Earnings: 11572048.429999998,
      NofPlayers: 4673,
    },
    {
      Date: "2019-03-31T22:00:00.000Z",
      NofTournaments: 472,
      Earnings: 13893133.569999995,
      NofPlayers: 5059,
    },
    {
      Date: "2019-04-30T22:00:00.000Z",
      NofTournaments: 516,
      Earnings: 13193179.829999998,
      NofPlayers: 4827,
    },
    {
      Date: "2019-05-31T22:00:00.000Z",
      NofTournaments: 554,
      Earnings: 17053955.619999997,
      NofPlayers: 5675,
    },
    {
      Date: "2019-06-30T22:00:00.000Z",
      NofTournaments: 546,
      Earnings: 49350751.3,
      NofPlayers: 5450,
    },
    {
      Date: "2019-07-31T22:00:00.000Z",
      NofTournaments: 503,
      Earnings: 48394489.9,
      NofPlayers: 5378,
    },
    {
      Date: "2019-08-31T22:00:00.000Z",
      NofTournaments: 506,
      Earnings: 20825596.170000006,
      NofPlayers: 4994,
    },
    {
      Date: "2019-09-30T22:00:00.000Z",
      NofTournaments: 396,
      Earnings: 8728152.250000004,
      NofPlayers: 4088,
    },
    {
      Date: "2019-10-31T23:00:00.000Z",
      NofTournaments: 371,
      Earnings: 17902972.84,
      NofPlayers: 4339,
    },
    {
      Date: "2019-11-30T23:00:00.000Z",
      NofTournaments: 315,
      Earnings: 22485539.299999997,
      NofPlayers: 4360,
    },
    {
      Date: "2019-12-31T23:00:00.000Z",
      NofTournaments: 272,
      Earnings: 3883418.3000000003,
      NofPlayers: 2241,
    },
    {
      Date: "2020-01-31T23:00:00.000Z",
      NofTournaments: 271,
      Earnings: 7982612.999999998,
      NofPlayers: 2344,
    },
    {
      Date: "2020-02-29T23:00:00.000Z",
      NofTournaments: 349,
      Earnings: 7451209.229999999,
      NofPlayers: 3797,
    },
    {
      Date: "2020-03-31T22:00:00.000Z",
      NofTournaments: 367,
      Earnings: 8118897.430000002,
      NofPlayers: 4061,
    },
    {
      Date: "2020-04-30T22:00:00.000Z",
      NofTournaments: 408,
      Earnings: 9459097.819999998,
      NofPlayers: 4479,
    },
    {
      Date: "2020-05-31T22:00:00.000Z",
      NofTournaments: 452,
      Earnings: 8585401.699999997,
      NofPlayers: 4563,
    },
    {
      Date: "2020-06-30T22:00:00.000Z",
      NofTournaments: 334,
      Earnings: 6551467.789999999,
      NofPlayers: 4058,
    },
    {
      Date: "2020-07-31T22:00:00.000Z",
      NofTournaments: 402,
      Earnings: 18654594.270000007,
      NofPlayers: 4961,
    },
    {
      Date: "2020-08-31T22:00:00.000Z",
      NofTournaments: 364,
      Earnings: 8815134.99,
      NofPlayers: 4293,
    },
    {
      Date: "2020-09-30T22:00:00.000Z",
      NofTournaments: 334,
      Earnings: 13602164.790000003,
      NofPlayers: 3663,
    },
    {
      Date: "2020-10-31T23:00:00.000Z",
      NofTournaments: 341,
      Earnings: 11258805.209999995,
      NofPlayers: 4143,
    },
    {
      Date: "2020-11-30T23:00:00.000Z",
      NofTournaments: 326,
      Earnings: 11549728.820000002,
      NofPlayers: 3870,
    },
    {
      Date: "2020-12-31T23:00:00.000Z",
      NofTournaments: 199,
      Earnings: 6030645.410000001,
      NofPlayers: 2114,
    },
    {
      Date: "2021-01-31T23:00:00.000Z",
      NofTournaments: 176,
      Earnings: 4075896.39,
      NofPlayers: 1862,
    },
  ];
  var labels_HistoricalEsportData = [];
  var data_NofTournaments = [];
  var data_Earnings = [];
  var data_NofPlayers = [];

  HistoricalEsportData.forEach((element) => {
    let date = new Date(element.Date);
    labels_HistoricalEsportData.push(
      Intl.DateTimeFormat("en-US", dateOptions).format(date)
    );
    data_NofTournaments.push(element.NofTournaments);
    data_Earnings.push(element.Earnings);
    data_NofPlayers.push(element.NofPlayers);
  });

  return (
    <div>
      <p>{props.source}</p>
      <Line
        data={{
          labels: labels_HistoricalEsportData,
          datasets: [
            {
              label: "Number of Tournaments",
              data: data_NofTournaments,
              backgroundColor: "rgba(168,50,50,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 1,
            },
            {
              label: "Earnings",
              data: data_Earnings,
              backgroundColor: "rgba(168,50,50,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 1,
            },
            {
              label: "Number of Players",
              data: data_NofPlayers,
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
