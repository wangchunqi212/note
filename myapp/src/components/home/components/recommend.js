import React,{Component} from "react";
export default class Recommend extends Component{
    render(){
        let {recommend} = this.props;
        // console.log(recommend);
        return (
            <div className="recommend">
                <div className="recommendContent">
                    <h3>精品推荐</h3>
                </div>
                <div className="recommendImg">
                    
                </div>
            </div>
        )
    }
}

