import * as collectActions from '../Constants/collect'
export function setCollect (data){
    return{
        type:collectActions.SET_COLLECT,
        data
    }
}
export function cancelCollect (data){
    return{
        type:collectActions.CANCEL_COLLECT,
        data
    }
}