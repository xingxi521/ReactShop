import * as collectActions from '../Constants/collect'
let int_state = [];
export default function collectReducer(state=int_state,action){
    switch(action.type){
        case collectActions.SET_COLLECT:{
            state.push(action.data)
            return [...state];//解决操作state后页面并没渲染的问题，这个问题官方里面明确说了
        }
        case collectActions.CANCEL_COLLECT:{
            return state.filter((element,index)=>{
                return element.id !== action.data.id;//把传过来的数据跟已经收藏数据对比，不相等就返回，相等了就不返回，达到一个取消效果
            });
        }
        default:{
            return state;
        }
    }
}