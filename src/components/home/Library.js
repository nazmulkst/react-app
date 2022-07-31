import cogoToast from "cogo-toast";
import React from "react";
import exportFromJSON from "export-from-json";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import localforage from 'localforage'
import { AiFillAppstore, AiFillCarryOut, AiFillDropboxSquare } from "react-icons/ai";
import readXlsxFile from "read-excel-file";
import ReactCodeInput from "react-code-input";
import Cleave from "cleave.js/react";

// import ReactHtmlParser from 'react-html-parser';

const Library = () => {
    const readExcel = () => {
        let myFile = document.getElementById('myFile');
        readXlsxFile(myFile.files[0])
        .then((data) => {
            // alert(data);
            console.log(data);
        })
        .catch((error) => {
            alert(error);
        })
    };
    const setData = () => {
        localforage.setItem("name", "Muhaimunul Islam", function(err){
            if(err){
                cogoToast.error(err);
            } else {
                cogoToast.success('Data Saved Successfully!');
            }
        });
    }
    const getData = () => {
        localforage.getItem("name", function(err, value){
            if(err){
                cogoToast.error(err);
            } else {
                alert(value);
            }
        });
    }
    const removeData = () => {
        localforage.removeItem("name", function(err){
            if(err){
                cogoToast.error(err);
            } else {
                cogoToast.error('Data Removed Successfully!');
            }
        });
    }
    const downloadImage = () => {
        let node = document.getElementById('download');
        htmlToImage.toPng(node)
            .then((dataUrl) => {
                let img = new Image();
                img.src = dataUrl;
                document.body.appendChild(img);

            })
            .catch((error) => {
                alert(error)
            });
    };
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
            <div>
                <Cleave className="form-control" options={{creditCard: true}} />
                <Cleave className="form-control" options={{date: true, delimiter:'/', datePattern:['d', 'm', 'Y']}} />
            </div>
            <div>
                <ReactCodeInput onChange={(value) => alert(value)} type="number" fields={6} />
            </div>
            <div>
                <input type="file" className="m-2 form-control" id="myFile" />
                <button className="btn btn-primary" onClick={readExcel}>Read Excel </button>
            </div>
            <div>
                <button onClick={setData} className="btn btn-info"> <AiFillAppstore />Set Data</button>
                <button onClick={getData} className="btn btn-primary"><AiFillCarryOut />Get Data</button>
                <button onClick={removeData} className="btn btn-success"><AiFillDropboxSquare />Remove Data</button>
            </div>
            <div className="container">
               <div className="row">
                    <div>
                        <table id="download">
                            <tr>
                                <td>Rahim</td>
                                <td>Dhaka</td>
                            </tr>
                            <tr>
                                <td>Karim</td>
                                <td>Rajshahi</td>
                            </tr>
                            <tr>
                                <td>Jashim</td>
                                <td>Chittagong</td>
                            </tr>
                        </table>
                        <button onClick={downloadImage} className="btn btn-dark">Download Image</button>
                        
                    </div>
                </div> 
            </div>
            <p><button onClick={exportFile} className="btn btn-success">Download CSV</button></p>
            <button onClick={errorMessage} className="btn btn-danger">Error</button>
            <button onClick={successMessage} className="btn btn-success">Success</button>
            <button onClick={loadingMessage} className="btn btn-primary">Loading</button>
        </div>
    );
};

export default Library;