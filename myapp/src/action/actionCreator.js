import {fetch} from "whatwg-fetch";

export const getRecommend = ()=>{
    let action = (data)=>({
        type:"GET_RECOMMEND",
        value:data
    })

    return (dispatch)=>{
        let url ="/api/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1550314814&type=2&resetcache=&func_id=24%2C20%2C11%2C19%2C33&orderid=1%2C3%2C4%2C6%2C7&sign=BAFC87CA11C4DAA53A5EC37C8F5E11E5&key=shuqiapi&_=1550314814536";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            // console.log(data.data.module[3].content);
            dispatch(action(data.data.module[3].content))
            
        })
    }
}
