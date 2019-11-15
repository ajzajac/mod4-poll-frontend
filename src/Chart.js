import React, { Component } from 'react'
import Chart from "chart.js";

let myChart 

export default class StackedBarGraph extends Component {

    makeChart(props){
        const ctx = document.getElementById("myChart");
        myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: [this.props.option1, this.props.option2],
                datasets: [{
                    label: 'Votes',
                    data: [props.yay, props.nay],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1,
                }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: false,
                scales: {
                yAxes: [{
                    ticks: {
                        maxRotation: -90,
                        minRotation: 0
                    }
                }],
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    }
                }]
                }
            }
        });
    }

    componentDidUpdate(prevProps){
        if(prevProps.yay !== this.props.yay || prevProps.nay !== this.props.nay){
            if(myChart){myChart.destroy()};
            this.makeChart(this.props)
        }
    }

    componentDidMount(){
        this.makeChart(this.props)
    }

    render() {
        return (
            <div>
                <canvas id="myChart" width="1000" height="400"></canvas>
            </div>
        )
    }

}