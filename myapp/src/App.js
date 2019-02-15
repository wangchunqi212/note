import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Footer from "./components/footer/footer";
import {Provider} from "react-redux";
import Loadable from "react-loadable";
import Loading from "./components/loading/loading";
import BookClass from "./components/bookclass";
import Rank from "./components/rank";
import Woman from "./components/woman";
import Man from "./components/man";
import BookList from "./components/bookList";
import store from "./store/index";
import "./common/css/reset.css";
import "./common/js/flexble";
import "./common/css/iconfont/iconfont.css";

let Home = Loadable({
  loader: () => import("./components/home"),
  loading:Loading
})

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router>
          <div>
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/bookclass" component={BookClass}></Route>
              <Route path="/rank" component={Rank}></Route>
              <Route path="/woman" component={Woman}></Route>
              <Route path="/man" component={Man}></Route>
              <Route path="/booklist" component={BookList}></Route>
              <Redirect path="/" to="/home" />
            </Switch>
            <Footer></Footer>
          </div>
        </Router>
        
      </Provider>
    );
  }
}

export default App;
