import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: Number(__ENV.K6_VUS || 2),
  duration: __ENV.K6_DURATION || '30s'
};

const API = __ENV.API_BASE_URL || 'https://api.demo.igaming.example';

export default function () {
  const login = http.post(`${API}/auth/login`, JSON.stringify({ email: __ENV.TEST_USERNAME || 'user@example.com', password: __ENV.TEST_PASSWORD || 'P@ssw0rd!' }), { headers: { 'Content-Type': 'application/json' } });
  check(login, { 'login ok': r => [200, 201].includes(r.status) });
  const token = login.json('token');
  const bal = http.get(`${API}/wallet/balance`, { headers: { Authorization: `Bearer ${token}` } });
  check(bal, { 'balance ok': r => r.status === 200 });
  sleep(1);
}
