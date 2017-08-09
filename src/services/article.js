const request = require('../utils/request');

export default function ArtcleQuery(key, value){
    return request({
        url: '',
        data:{
            key:key,
            value:value
        },
        method: 'GET'
    })
}
