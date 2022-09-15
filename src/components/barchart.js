import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

function BarChart(props) {
    const option = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };


    const data = {
        labels: props.label.split(','),
        datasets: [{
            label: '# of Energy',
            data: props.dataenergy.split(','),
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
            ],
            borderWidth: 1
        }, {
            label: '# of Solarcell',
            data: props.datasolar.split(','),
            backgroundColor: [
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    }
    return (
        <>
            <Bar data={data} options={option} />
        </>
    )
}

export default BarChart;