const baseUrl = 'https://blockchain.info';
const doAsyncRequest = async function RequestBlockChainData (path) {
    if(path !== undefined || path !== null) {
        const url = `${baseUrl}/${path}`;
        const response = await fetch(url, { crossDomain: true, method: 'GET', cache: 'force-cache', headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'master.d2uuk4w19u6avx.amplifyapp.com', 'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',mode:'no-cors'}});
        const data = await response.json();
        return data;
    }else{
        throw new Error({"msg":"some thing went wrong!"});
    }
} 

export default doAsyncRequest;