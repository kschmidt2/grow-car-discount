// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

document.addEventListener('DOMContentLoaded', function () {

    setTimeout(function() {

        let chartId = document.getElementById("chart-container");

        // checks for the chart ID and displays a backup image if the browser can't find it
        if (!chartId) {
            console.log('noId');
            let chartArea = document.getElementsByClassName("chart-area");
            for(var i = 0; i < chartArea.length; i++) {
                chartArea[i].style.display = "none";
            } 
            // insert chart screenshot here
            document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
        } else {
            console.log('yesId')
        }


        const myChart =  

            Highcharts.chart(chartId, {
                chart: {
                    type: 'line',
                    styledMode: true,
                    spacingBottom: 25,
                    spacingRight: 100,
                    spacingLeft: 0
                }, 
                title: {
                    text: null
                },
                data: {
                    googleSpreadsheetKey: '19YecaQmh2yNMIlKr7u1A0bbw8T_RjxBjI7WV_DRIe5g',
                    startColumn: 2,
                    endColumn: 4
                },
                // // for bar charts only
                // plotOptions: {
                //     series: {
                //         groupPadding: 0.1
                //     } 
                // },
                // for line charts only
                plotOptions: {
                    series: {
                        lineWidth: 1,
                        // clip: false,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            fillColor: '#ffffff',
                            states: {
                                hover: {
                                    fillColor: '#ffffff'
                                }
                            }
                        }
                    }
                },
                legend: {
                    align: 'right',
                    symbolRadius: 0,
                    verticalAlign: 'top',
                    x: 10,
                    itemMarginTop: -10
                },
                xAxis: {
                    labels: {
                        style: {
                            whiteSpace: 'nowrap'
                        }
                    },
                    tickLength: 5
                },
                yAxis: {
                    title: false,
                    labels: {
                        useHTML: true,
                        overflow: 'allow'
                    }
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    shadow: false,
                    padding: 10,
                    valueDecimals: 2,
                    valueSuffix: '%',
                    shared: true,
                },
                annotations: [{
                    shapes: [{
                        point: {
                            x: 1385856000000, // Dec 2013
                            y: 8.5, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                          },
                        type: 'circle',
                        r: 5
                    }, {
                        point: {
                            x: 1385856000000, // Dec 2013
                            y: 6, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                          },
                        type: 'circle',
                        r: 5
                    }, {
                        point: {
                            x:  1417392000000, // Dec 2014
                            y: 6, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                          },
                        type: 'circle',
                        r: 5
                    }, {
                        point: {
                            x:  1417392000000, // Dec 2014
                            y: 8.9, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                          },
                        type: 'circle',
                        r: 5
                    }, {
                        point: {
                            x: 1448928000000, // Dec 2015
                            y: 6, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                          },
                        type: 'circle',
                        r: 5
                    }, {
                        point: {
                            x: 1448928000000, // Dec 2015
                            y: 9.4, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                          },
                        type: 'circle',
                        r: 5
                    }, {
                        point: {
                            x: 1480550400000, // Dec 2016
                            y: 6.1, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                          },
                        type: 'circle',
                        r: 5
                    }, {
                        point: {
                            x: 1480550400000, // Dec 2016
                            y: 8.9, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                          },
                        type: 'circle',
                        r: 5
                    }, {
                        point: {
                            x: 1512086400000, // Dec 2017
                            y: 6.6, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                          },
                        type: 'circle',
                        r: 5
                    }, {
                        point: {
                            x: 1512086400000, // Dec 2017
                            y: 8.4, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                          },
                        type: 'circle',
                        r: 5
                    }, {
                        point: {
                            x: 1543622400000, // Dec 2018
                            y: 9.0, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                          },
                        type: 'circle',
                        r: 5
                    }, {
                        point: {
                            x: 1543622400000, // Dec 2018
                            y: 6.7, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                          },
                        type: 'circle',
                        r: 5
                    }],
                }],
                responsive: {
                    rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                        spacingRight: 10
                        },
                        legend: {
                            align: 'left',
                            x: -18
                        },
                        tooltip: {
                            enabled: false
                        }
                    }
                    }]
                }
            });
        },1000);
    });