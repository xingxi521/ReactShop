import qs from 'querystring'
export function getFetch(url){
    const result = fetch(url);
    return result;
}
export function postFetch(url,data){
    const result = fetch(url,{
        method:"post",
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:qs.stringify(data)
    })
    return result;
}