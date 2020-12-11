import * as cityActionsConst from '../Constants/city'
export function init_city(data){
    return {
        type:cityActionsConst.INIT_CITY,
        data
    }
}
export function update_city(data){
    return {
        type:cityActionsConst.UPDATE_CITY,
        data
    }
}