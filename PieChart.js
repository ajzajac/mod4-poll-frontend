class PieChart extends React.Component {
      
    state = {
        options: {
          labels: ['YAY', 'NAY'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        series: [50,50],
      }

    render() {
      return (
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="380" />
        </div>
      )
    }