import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addMessage, addPost} from "./components/Redux/state";

export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}