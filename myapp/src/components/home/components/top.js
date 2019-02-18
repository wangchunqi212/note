import React,{Component} from "react";

export default class Top extends Component{
    render(){
        return (
            <div className="top">
                <h1>
                    <span className="log-img"><img src="http://c-shuqi.11222.cn/assets/logo_7a44de2.png" alt=""/></span>
                    <span className="content-img"><img src="http://c-shuqi.11222.cn/assets/website-name_c08f935.png" alt=""/></span>
                </h1>
                <ul>
                    <li className="user-pic"><img src="" alt=""/></li>
                    <li><img src="http://c-shuqi.11222.cn/assets/bookshelf_606cf21.png" alt=""/></li>
                    <li><img src="http://c-shuqi.11222.cn/assets/search_d5e5264.png" alt=""/></li>
                </ul>
            </div>
        )
    }
}