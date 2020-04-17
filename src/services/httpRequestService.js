const baseUrl = 'https://blockchain.info';
const doAsyncRequest = async function RequestBlockChainData (path) {
    if(path !== undefined || path !== null) {
        const url = `${baseUrl}/${path}`;
        const response = await fetch(url, {method: 'GET', cache: 'force-cache', headers: { 'Content-Type': 'application/json'}});
        const data = await response.json();
        return data;
    }else{
        throw new Error({"msg":"some thing went wrong!"});
    }
} 

export default doAsyncRequest;