/**
* 用来异步获取数据的promise
*/
export default function getData(url = '', data = {}, method = 'GET') {
    method = method.toUpperCase();
    const xhr = new window.XMLHttpRequest();
    let paramsArr = [];

    const getJSON = new Promise( (resolve, reject) => {
        for(let key in data) {
            let params = '';
            if(data.hasOwnProperty(key.toString())) {
                params = window.encodeURIComponent(key) + '=' + window.encodeURIComponent(data[key]);
                paramsArr.push(params);
            }
        }

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status >= 200 && xhr.status <= 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            }
        };

        xhr.onerror = () => {
            reject(xhr.statusText);
        }

        xhr.responseType = 'json';
        switch(method) {
            case 'POST':
            xhr.open(method, url, true);
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            xhr.send(paramsArr.join('&'));
            break;
            case 'GET':
            let link = (paramsArr.length === 0 ) ? url : url + '?' +paramsArr.join('&');
            xhr.open(method, link, true);
            xhr.send(null);
            break
            default:break;
        }
    });

    return getJSON;
}
