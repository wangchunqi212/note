import React,{Component} from "react";
import "./style/home.css";
import Top from "./components/top";
import Banner from "./components/banner";
import Recommend from './components/recommend';
import {getRecommend} from "../../action/actionCreator";
import { connect } from 'react-redux';
class Home extends Component{
    render(){
        return (
            <div>
                <Top></Top>
                <Banner></Banner>
                <Recommend></Recommend>
            </div>
        )
    }
    componentDidMount(){
        this.props.getRecommendData();
    }
}

const mapDispatchToProps = (dispatch)=>({
    getRecommendData(){
        dispatch(getRecommend())
    }
})

export default connect(null,mapDispatchToProps)(Home)

