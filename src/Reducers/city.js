/* eslint-disable default-case */
import * as cityActionsConst from '../Constants/city'
const init_state = {}
export default function cityReducer(state=init_state,action){
    switch(action.type){
        case cityActionsConst.INIT_CITY:{
            return state = action.data
        }
        case cityActionsConst.UPDATE_CITY:{
            return state = action.data
        }
        default :{
            return state;
        }
    }
}