import * as React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { cyan, darkBrown, lightBrown, redOrange, transparent } from '../utils/Colors';

const jsonData = require('../utils/data.json');
const Chart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const labels = jsonData.map((entry) => entry.day);
    const today = new Date().toString().split(" ")[0].toLowerCase();
    const dataset = [{
        label: "Total Spent",
        data: jsonData.map((entry) => entry.amount),
        backgroundColor: jsonData.map((entry) => entry.day === today ? cyan : redOrange),
        borderRadius: 15,
        borderSkipped: false,
    }];
    const data = { labels, datasets: dataset };
    const option = {
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                },
                ticks: {
                    color: lightBrown
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false,
                },
                border: {
                    display: false,
                }
            }
        }
    }
    return (
        <Bar data={data} options={option} />
    )
}

export default Chart;