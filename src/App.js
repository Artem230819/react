import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profie/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer
                        store={props.store}
                        dispatch={props.dispatch}

                    />}/>
                    <Route path="/profile" render={() => <Profile
                        store={props.store}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/freinds" render={() => <Friends/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}



export default App;
