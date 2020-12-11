import baseUrl from './baseUrl'
import { getFetch } from '../utils/http'
const detailsFn = {
    detailsData(id){
        const result = getFetch(baseUrl.details+'?id='+id).then(res=>{
            if(res.ok){
                return res.json();
            }else{
                return {msg:'error(details):数据解析失败'}
            }
        });
        return result;
    }
}
export default detailsFn