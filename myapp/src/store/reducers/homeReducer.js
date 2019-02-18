import Immutable from "immutable";

const defaultState = Immutable.fromJS({
    recommend:[]
})

export default (state=defaultState,action)=>{
    
    return state;
}