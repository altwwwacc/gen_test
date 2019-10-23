import React from 'react';
import Table from './Table';
import axios from 'axios';
import './App.css';
import ReactDOM from "react-dom";

function App() {

    axios.get('https://next.json-generator.com/api/json/get/NJMjzW_Yw').then(result => {
        ReactDOM.render(<Table data={result.data}/>, document.querySelectorAll('.App__data')[0]);
    }).catch(error => {
        ReactDOM.render((<div>Connection error</div>), document.querySelectorAll('.App__data')[0]);
    });
    return (
        <div className="App">
            <div className="App__data">
                Loading ...
            </div>
        </div>
    );
}

export default App;
