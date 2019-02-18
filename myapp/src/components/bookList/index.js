import React,{Component} from "react";
import Nav from './axn/nav'
import Page from './axn/page'
import Classify from './axn/classify'
import './axn/css/axn.css'
import './store/iconfont/iconfont.css';
export default class BookList extends Component{
    render(){
        return (
            <div>
				<Nav/>
				<Page/>
				<Classify/>
			</div>
        )
    }
}