import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';

const MyLineChart = () => {
    const [datas, setDatas] = useState;

    useEffect(() => {
        fetch('line.json')
        .then(res => res.json())
        .then(data => setDatas())
    },[])
    return (
        <div>
            {
                datas.map(data => <Dashboard data= {data}></Dashboard>)
            }
        </div>
    );
};

export default MyLineChart;