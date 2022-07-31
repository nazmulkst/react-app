import cogoToast from "cogo-toast";
import React from "react";
import exportFromJSON from "export-from-json";
// import ReactHtmlParser from 'react-html-parser';

const Library = () => {
    const exportFile = () => {
        const data = [
            {name: "Rafiq", city: "Dhaka"},
            {name: "Jashim", city: "Rajshahi"}
        ];
        const fileName = 'testCsv';
        const exportType = exportFromJSON.types.csv;

        exportFromJSON({data, fileName, exportType});
    };
    let htmlString = "<h1>Hello</h1>";
    const errorMessage = () => {
        cogoToast.error("This is your error message")
    };
    const successMessage = () => {
        cogoToast.success("This is your Success message")
    };
    const loadingMessage = () => {
        cogoToast.loading("This is your Loading message")
    };

    return (
        <div>
            <p><button onClick={exportFile} className="btn btn-success">Download CSV</button></p>
            <button onClick={errorMessage} className="btn btn-danger">Error</button>
            <button onClick={successMessage} className="btn btn-success">Success</button>
            <button onClick={loadingMessage} className="btn btn-primary">Loading</button>
        </div>
    );
};

export default Library;