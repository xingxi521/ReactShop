import { getFetch } from '../utils/http'
import baseUrl from './baseUrl'
const searchFn = {
    searchData(cityname,context,page){
        const result = getFetch(baseUrl.search+"/?cityname="+cityname+"&searchtext="+context+"&page="+page).then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return {msg:'error(search):数据解析失败'}
            }
        })
        return result;
    }
}
export default searchFn