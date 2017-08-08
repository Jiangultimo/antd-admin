const request  = require('../utils/request');

export default function LoginQuery(queryParams) {
    return request(queryParams);
}
