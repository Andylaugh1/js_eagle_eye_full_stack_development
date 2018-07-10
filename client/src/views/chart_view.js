const PubSub = require('../helpers/pub_sub.js')
const Highcharts = require('highcharts');

const ChartView = function (chartContainer) {
    this.chartContainer = chartContainer
}
ChartView.prototype.render = function () {

    Highcharts.chart(this.chartContainer, {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
};

module.exports = ChartView;
