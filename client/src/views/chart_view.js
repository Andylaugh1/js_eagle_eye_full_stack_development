const PubSub = require('../helpers/pub_sub.js')
const Highcharts = require('highcharts');
const CalculationsView = require('./calculations_view.js')

const ChartView = function (chartContainer) {
    this.chartContainer = chartContainer
}
ChartView.prototype.render = function () {


    Highcharts.chart(this.chartContainer, {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Victims of US Drone Strikes'
        },
        xAxis: {
            categories: ['minDeaths', 'maxDeaths', 'Injuries']
        },
        yAxis: {
            title: {
                text: 'Human Cost'
            }
        },
        series: [{
            data: [1000, 555,  888]
        }]
    });
};

module.exports = ChartView;
