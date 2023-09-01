import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  let res = http.get('http://test.k6.io');
  check(res, {
    'success': (r) => r.status === 200
  });
  sleep(1);
}
