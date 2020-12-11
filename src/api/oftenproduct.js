import { getFetch } from '../utils/http'
import baseUrl from './baseUrl'
const oftenproductFn = {
    oftenProductData(cityname){
        const result = getFetch(baseUrl.oftenProduct+'?cityname='+cityname).then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return {msg:'error(oftenproduct):数据解析失败'}
            }
        });
        return result;
    }
}
export default oftenproductFn