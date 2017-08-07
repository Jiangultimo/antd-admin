import {request} from '../utils/request';


export default function LoginQuery(queryParams) {
    return request('/login', {
        method: 'POST',
        body: queryParams
    });
}
