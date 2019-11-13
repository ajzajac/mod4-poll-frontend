import React, { Component } from 'react'
import Chart from "chart.js";

export default class StackedBarGraph extends Component {

    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }

}