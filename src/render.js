import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addMessage, addPost, updateNewMessegeText, updateNewPostText} from "./components/Redux/state";

export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 addMessage={addMessage}
                 updateNewPostText={updateNewPostText}
                 updateNewMessegeText={updateNewMessegeText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}