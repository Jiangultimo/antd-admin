const request  = require('../utils/request');

export default function LoginQuery(queryParams) {
    console.log(request);
    return request(queryParams);
}
