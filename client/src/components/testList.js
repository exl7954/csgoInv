import React, { useEffect, useState } from "react";
import ItemBox from "./itemBox.js"
/*
const Record = (props) => {
    console.log(props.record.prices.latestPrice);
    <li>{props.record.market_hash_name}: {props.record.prices.latestPrice}</li>
};
*/
export default function TestList() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5000/record/`);

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
            return (
                ItemBox(record)
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
