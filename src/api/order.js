import baseUrl from './baseUrl'
import { getFetch } from '../utils/http'
const order = {
    orderData(user){
        const result = getFetch(baseUrl.order+'?username='+user).then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return {msg:'error(order):数据解析失败'}
            }
        });
        return result;
    }
}
export default order