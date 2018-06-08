import React from "react";
import { BrowserRouter, Route, Switch, hashHistory } from "react-router-dom";

import AppStore from "../../stores/App";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import App from "./App";
import { Actions } from "../../actions/app";
import { fetchData, postData, deleteData } from "../../utils/api";

import "../../../css/styles.scss";

const buildState = () => ({
  data: AppStore.getData()
  // data from store goes here
});

class App extends React.Component {
  state = buildState();

  componentWillMount() {
    AppStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.onChange);
  }

  onChange = () => this.setState(buildState);

  handlersForTheApp = () => {
    // handle the events
  };

  render() {
    return (
      <BrowserRouter history={hashHistory}>
        <div className="main_app">
          <div className="main_app_sidebar">
            <Logo />
            <Sidebar />
          </div>
          <div className="main_app_body">
            <Route
              exact
              path="/"
              render={() => (
                <App
                  {...{
                    user: this.props.user,
                    ...this.state
                  }}
                />
              )}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;