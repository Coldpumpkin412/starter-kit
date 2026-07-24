import http from 'http';
import https from 'https';

const baseUrl = 'http://localhost:3000';
const routes = ['/', '/login'];

async function fetchPage(path) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, baseUrl);
    const protocol = url.protocol === 'https:' ? https : http;

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: 'GET',
      timeout: 5000,
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, html: data, headers: res.headers });
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

async function verifyPage(path, expectedElements) {
  try {
    const { status, html } = await fetchPage(path);
    console.log(`\n✅ ${path}`);
    console.log(`   Status: ${status}`);

    let allFound = true;
    for (const element of expectedElements) {
      const found = html.includes(element);
      console.log(`   ${found ? '✓' : '✗'} "${element}"`);
      if (!found) allFound = false;
    }

    return allFound && status === 200;
  } catch (error) {
    console.log(`\n❌ ${path}`);
    console.log(`   Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🚀 Verifying Next.js Starter Kit...\n');

  const tests = [
    {
      path: '/',
      name: '랜딩 페이지',
      elements: [
        'Next.js v16 + TailwindCSS v4',
        '빠르게 시작하는',
        '웹 개발 스타터킷',
        '주요 기능',
        '지금 시작해보세요'
      ]
    },
    {
      path: '/login',
      name: '로그인',
      elements: [
        '로그인',
        '이메일과 비밀번호로 로그인하세요',
        '이메일로 로그인',
        'GitHub으로 로그인'
      ]
    }
  ];

  let passCount = 0;
  for (const test of tests) {
    console.log(`\n📄 ${test.name} (${test.path})`);
    const passed = await verifyPage(test.path, test.elements);
    if (passed) passCount++;
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`✨ 결과: ${passCount}/${tests.length} 페이지 검증 완료`);
  console.log(`${'='.repeat(50)}`);
}

main().catch(console.error);
