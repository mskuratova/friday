import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../m2-bll/store";
import Main from "./common/Main";
import Header from "./common/Header";

const App: React.FC = () => {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    {/*<Header/>*/}
                    <Main/>
                </Provider>
            </HashRouter>
        </div>
    )
};

export default App;
