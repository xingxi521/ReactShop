import baseUrl from './baseUrl'
import { getFetch } from '../utils/http'
const commentFn = {
    commentData(id,page){
        const result = getFetch(baseUrl.comment+'?id='+id+'&page='+page).then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return {msg:'error(comment):数据解析失败'}
            }
        });
        return result;
    }
}
export default commentFn