const PubSub = require('../helpers/pub_sub.js')
const Highcharts = require('highcharts');
const Calculations = require('../helpers/calculations.js')

const ChartView = function (chartContainer) {
    this.chartContainer = chartContainer
}
ChartView.prototype.render = function () {


    Highcharts.chart(this.chartContainer, {
        chart: {
            width: 1500,
            type: 'bar',
            backgroundColor: '#D8CBB9',
            borderColor: '#918E8B',
            borderRadius: 20,
            borderWidth: 5
        },
        title: {
            text: 'Recorded Deaths of US Drone Strikes in Pakistan, Somalia and Yemen'
        },
        xAxis: {
            categories: ['Combatants' , ' Civilian', 'Children']
        },
        yAxis: {
            title: {
                text: 'Recorded Deaths'
            }
        },
        series: [
          {
            name: 'Death',
            color: '#000000',
            data: [4032, 598, 187 ]
          }
        ]
    });
};

module.exports = ChartView;
