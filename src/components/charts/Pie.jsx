import React, { useState, useEffect } from 'react'
import { Chart } from "react-google-charts";

const Pie = (props) => {
    
    const chartDetails = props.data
    const chartTitle = props.title

    return (
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={
                chartDetails
            }
            options={{
                title: chartTitle,
                is3D: true,
            }}
        />
    )
}

export default Pie
