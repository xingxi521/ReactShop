import { getFetch } from '../utils/http'
import baseUrl from './baseUrl'
const hotproductFn = {
    hotProductData(cityname){
        const result = getFetch(baseUrl.hotProduct+'?cityname='+cityname).then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return {msg:'error(hotProduct):数据解析失败'}
            }
        });
        return result;
    }
}
export default hotproductFn