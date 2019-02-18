import Immutable from "immutable";

const defaultState = Immutable.Map({
    recommend:Immutable.List([])
})

export default (state=defaultState,action)=>{
    // console.log(action.type);
    switch(action.type){
        case "GET_RECOMMEND":
            let recommendState = state.updateIn(["recommend"],(x)=>x.concat(action.value));
            return recommendState;
    }
    
    return state;
}