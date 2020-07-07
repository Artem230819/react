import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {
    addMessage,
    addPost,
    subscriber,
    updateNewMessegeText,
    updateNewPostText
} from './components/Redux/state';
import ReactDOM from "react-dom";
import App from "./App";


//addPost('Samurai');


let rerender = () => {
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

rerender(state);

subscriber(rerender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
