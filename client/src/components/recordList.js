import React, { useEffect, useState } from "react";
/*
const Record = (props) => {
    console.log(props.record.prices.latestPrice);
    <li>{props.record.market_hash_name}: {props.record.prices.latestPrice}</li>
};
*/
export default function RecordList() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://34.228.18.167/record/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const records = await response.json();
            
            setRecords(records);
        }

        getRecords();

        return;
    }, [records.length]);

    function recordList() {
        return records.map((record) => {
            console.log(record.prices.latest);
            return (
                //<Record record={record} key={record._id}/>
                <li key={record._id}>{record.market_hash_name}: {record.prices.latest}</li>
            );
        });
    }

    return (
        <div>
            <h3>Item List</h3>
            <ul>{recordList()}</ul>
        </div>
    );
}
