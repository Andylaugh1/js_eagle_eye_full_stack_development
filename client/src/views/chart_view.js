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
            text: 'Recorded Deaths of US Drone Strikes in Pakistan, Somalia and Yemen'
        },
        xAxis: {
            categories: ['Average Combatants' , ' Civilian', 'Children']
        },
        yAxis: {
            title: {
                text: 'Recorded Deaths'
            }
        },
        series: [{
            data: [4032, 598, 187 ]
        }]
    });
};

module.exports = ChartView;
