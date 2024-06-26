let x={
    "seriesMapProto": [
      {
        "date": "FEBRUARY 2024",
        "series": [
          {
            "id": 7572,
            "name": "ICC Cricket World Cup League Two 2023-27",
            "startDt": "1707955200000",
            "endDt": "1806364800000"
          }
        ]
      },
      {
        "date": "APRIL 2024",
        "series": [
          {
            "id": 7727,
            "name": "Namibia tour of Oman, 2024",
            "startDt": "1711929600000",
            "endDt": "1712448000000"
          },
          {
            "id": 7693,
            "name": "Canada tour of USA, 2024",
            "startDt": "1712448000000",
            "endDt": "1712966400000"
          },
          {
            "id": 7667,
            "name": "ACC Mens T20I Premier Cup, 2024",
            "startDt": "1712880000000",
            "endDt": "1713657600000"
          },
          {
            "id": 7817,
            "name": "Jersey tour of Spain, 2024",
            "startDt": "1712966400000",
            "endDt": "1713052800000"
          },
          {
            "id": 7679,
            "name": "New Zealand tour of Pakistan, 2024",
            "startDt": "1713398400000",
            "endDt": "1714176000000"
          }
        ]
      },
      {
        "date": "MAY 2024",
        "series": [
          {
            "id": 7706,
            "name": "Zimbabwe tour of Bangladesh, 2024",
            "startDt": "1714694400000",
            "endDt": "1715472000000"
          },
          {
            "id": 7808,
            "name": "Pakistan tour of Ireland, 2024",
            "startDt": "1715299200000",
            "endDt": "1715644800000"
          },
          {
            "id": 7819,
            "name": "Netherlands T20I Tri-Series, 2024",
            "startDt": "1715990400000",
            "endDt": "1716508800000"
          },
          {
            "id": 7700,
            "name": "Bangladesh tour of USA, 2024",
            "startDt": "1716249600000",
            "endDt": "1716595200000"
          },
          {
            "id": 6773,
            "name": "Pakistan tour of England, 2024",
            "startDt": "1716336000000",
            "endDt": "1717027200000"
          }
        ]
      },
      {
        "date": "JUNE 2024",
        "series": [
          {
            "id": 7476,
            "name": "ICC Mens T20 World Cup 2024",
            "startDt": "1717200000000",
            "endDt": "1719619200000"
          }
        ]
      },
      {
        "date": "JULY 2024",
        "series": [
          {
            "id": 7546,
            "name": "India tour of Zimbabwe, 2024",
            "startDt": "1720224000000",
            "endDt": "1720915200000"
          },
          {
            "id": 6780,
            "name": "West Indies tour of England, 2024",
            "startDt": "1720569600000",
            "endDt": "1722297600000"
          }
        ]
      },
      {
        "date": "AUGUST 2024",
        "series": [
          {
            "id": 6787,
            "name": "Sri Lanka tour of England, 2024",
            "startDt": "1724198400000",
            "endDt": "1725926400000"
          }
        ]
      },
      {
        "date": "SEPTEMBER 2024",
        "series": [
          {
            "id": 6794,
            "name": "Australia tour of England, 2024",
            "startDt": "1726012800000",
            "endDt": "1727568000000"
          }
        ]
      },
      {
        "date": "NOVEMBER 2024",
        "series": [
          {
            "id": 7781,
            "name": "Pakistan tour of Australia, 2024",
            "startDt": "1730678400000",
            "endDt": "1731888000000"
          },
          {
            "id": 7745,
            "name": "India tour of Australia, 2024-25",
            "startDt": "1732233600000",
            "endDt": "1736208000000"
          },
          {
            "id": 7853,
            "name": "England tour of New Zealand, 2024",
            "startDt": "1732752000000",
            "endDt": "1734480000000"
          }
        ]
      },
      {
        "date": "MAY 2025",
        "series": [
          {
            "id": 7065,
            "name": "Zimbabwe tour of England, 2025",
            "startDt": "1748390400000",
            "endDt": "1748649600000"
          }
        ]
      }
    ],
    "appIndex": {
      "seoTitle": "Current Running Cricket Series - Cricbuzz | Cricbuzz.com",
      "webURL": "www.cricbuzz.com/cricket-series/"
    }
  }

var s=x.seriesMapProto
for(a of s){

  console.log(a.date)
  let date= a.date
  let d = a.series
  for(dd of d){
      var gettbody2 = document.getElementById('tbody2')
      var gettr1= document.createElement('tr')
      gettbody2.append(gettr1)
      
      gettr1.innerHTML=`<td  class="table-light">${date}</td><td class="table-primary">${dd.name}</td>`
        
    }
}
