import React from "react";

import { Route, Routes } from "react-router-dom";

import RecordList from "./components/recordList";
import TestList from "./components/testList"

const App = () => {
    console.log("app start");
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<RecordList />} />
            </Routes>
        </div>
    );
};

export default App;