import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10,
    duration: '30s'
};

export default function () {
    // Test for /reviews endpoint
    let response = http.get('http://localhost:3000/reviews');
    check(response, {
        'status is 200': (r) => r.status === 200,
        'response body is not empty': (r) => r.body.length > 0
    });
    sleep(1);

    // Test for /reviews/users endpoint
    response = http.get('http://localhost:3000/reviews/users');
    check(response, {
        'status is 200': (r) => r.status === 200,
        'response body is not empty': (r) => r.body.length > 0
    });
    sleep(1);
}


