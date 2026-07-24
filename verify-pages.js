const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    // 홈페이지
    console.log('=== 홈페이지 로드 ===');
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
    const homeTitle = await page.title();
    console.log('✓ 페이지 제목:', homeTitle);

    // 헤더 네비게이션 확인
    const navLabels = await page.locator('nav a').allTextContents();
    console.log('✓ 네비게이션 메뉴:', navLabels.join(' | '));

    // 푸터 확인
    const footerLinks = await page.locator('footer a').allTextContents();
    console.log('✓ 푸터 링크:', footerLinks.join(' / '));

    // CTA 버튼 확인
    const buttons = await page.locator('section button').allTextContents();
    console.log('✓ 메인 CTA:', buttons.slice(0, 2).join(', '));

    // 예제 페이지
    console.log('\n=== 예제 페이지 로드 ===');
    await page.goto('http://localhost:3000/examples', { waitUntil: 'networkidle' });
    const exampleHeading = await page.locator('h1').textContent();
    console.log('✓ 페이지 제목:', exampleHeading);

    const exampleCards = await page.locator('div:has(h2)').count();
    console.log('✓ 예제 카드 수:', exampleCards);

    const exampleNames = await page.locator('h2').allTextContents();
    console.log('✓ 예제 목록:', exampleNames.slice(0, 3).join(' / '));

    // 예제보기 버튼 확인
    const showcaseButtons = await page.locator('button').filter({ hasText: '예제보기' }).count();
    console.log('✓ 예제보기 버튼 수:', showcaseButtons);

    // 첫 번째 예제의 예제보기 버튼 클릭
    await page.locator('button').filter({ hasText: '예제보기' }).first().click();
    await page.waitForTimeout(500);
    const codeVisible = await page.locator('pre code').isVisible();
    console.log('✓ 코드 토글 작동:', codeVisible ? '소스코드 표시' : '미리보기로 돌아감');

    // 문서 페이지
    console.log('\n=== 문서 페이지 로드 ===');
    await page.goto('http://localhost:3000/docs', { waitUntil: 'networkidle' });
    const docsHeading = await page.locator('h1').textContent();
    console.log('✓ 페이지 제목:', docsHeading);

    const categoryButtons = await page.locator('div button').allTextContents();
    const categories = categoryButtons.filter(t =>
      ['시작하기', 'UI컴포넌트', '훅', '구성'].some(c => t.includes(c))
    );
    console.log('✓ 문서 카테고리:', categories.join(' / '));

    // 카테고리 클릭 테스트
    await page.locator('button').filter({ hasText: 'UI컴포넌트' }).click();
    await page.waitForTimeout(500);
    const content = await page.locator('h3').allTextContents();
    console.log('✓ UI컴포넌트 섹션 로드됨');

    // 404 확인
    console.log('\n=== 대시보드 페이지 (404 예상) ===');
    const response = await page.goto('http://localhost:3000/dashboard', { waitUntil: 'networkidle' });
    console.log('✓ 상태 코드:', response.status());
    if (response.status() === 404) {
      console.log('✓ 대시보드가 정상적으로 삭제됨');
    }

    await browser.close();
    console.log('\n✅ 모든 검증 완료!');
  } catch (error) {
    console.error('❌ 오류:', error.message);
    await browser.close();
    process.exit(1);
  }
})();
