import React,{Component} from "react";
import { NavLink } from 'react-router-dom';
import "./footer.css";
export default class Footer extends Component {
    render(){
        return (
            <div id="footer">
                <ul>
                    <li>
                        <NavLink to="/home">
                            <i className="iconfont">&#xe68a;</i>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bookclass">
                            <i className="iconfont">&#xe7f9;</i>
                            <span>分类</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/rank">
                            <i className="iconfont">&#xe613;</i>
                            <span>排行</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/woman">
                            <i className="iconfont">&#xe694;</i>
                            <span>女频</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/man">
                            <i className="iconfont">&#xe832;</i>
                            <span>男频</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/booklist">
                            <i className="iconfont">&#xe60a;</i>
                            <span>书单</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}