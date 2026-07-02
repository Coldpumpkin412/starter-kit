# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

이것은 **Next.js v16** + **TypeScript** + **TailwindCSS v4** + **shadcn/ui**로 구성된 starter kit입니다.

⚠️ **중요**: Next.js v16은 이전 버전과 API, 컨벤션, 파일 구조가 다릅니다. 코드 작성 전 `node_modules/next/dist/docs/`의 관련 가이드를 읽고 deprecation notice를 확인하세요.

## 개발 명령어

```bash
# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드된 앱 실행
npm start

# ESLint 실행 및 검사
npm run lint

# Playwright 테스트 (설정 필요)
# npx playwright test
# npx playwright test --ui (UI 모드)
```

**주의**: Playwright는 `package.json`에 설치되어 있지만 `playwright.config.ts`가 아직 설정되지 않았습니다.

## 프로젝트 구조

```
src/
  app/              # Next.js App Router
    layout.tsx      # Root layout (테마, 헤더/푸터 포함)
    page.tsx        # 홈페이지 (랜딩 페이지)
    globals.css     # 전역 스타일 (Tailwind + 테마 변수)
    login/          # 로그인 페이지
    docs/           # 문서 페이지
    examples/       # 예제 페이지 (컴포넌트, 폼, 레이아웃 등)
      layout.tsx
      page.tsx
      forms/        # 폼 컴포넌트 예제
      menus/        # 메뉴 컴포넌트 예제
      hooks/        # 커스텀 훅 예제
      theme/        # 테마 적용 예제
      components/   # 일반 컴포넌트 예제

  components/
    ui/             # shadcn/ui 컴포넌트들 (Button, Card, Badge, etc.)
    layout/         # 레이아웃 컴포넌트 (Header, Footer)
    landing/        # 랜딩 페이지 섹션 (Hero, Features, CTA)
    examples/       # 예제용 컴포넌트 (ExampleShowcase 등)
    theme-provider.tsx   # next-themes 래퍼
    theme-toggle.tsx     # 테마 토글 버튼

  lib/
    types.ts        # 타입 정의 (NavItem, SiteConfig, Theme)
    utils.ts        # 유틸리티 함수 (cn() - Tailwind 병합)

  hooks/
    use-mounted.ts  # hydration 문제 해결용 hook
```

## 경로 별칭 (Path Aliases)

`tsconfig.json`에서 `@/*` → `./src/*`으로 설정되어 있습니다.

```typescript
// 절대 경로 사용 (권장)
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

## 테마 시스템

`next-themes`를 사용한 dark/light 테마 지원:

- **Provider**: `src/components/theme-provider.tsx` (root layout에 포함)
- **Toggle**: `src/components/theme-toggle.tsx`
- **CSS 변수**: `src/app/globals.css`에 정의
- **사용법**: `const { theme, setTheme } = useTheme()` (클라이언트 컴포넌트에서만)

Hydration 문제 해결:
- `useMounted()` hook을 사용하여 hydration 후에만 렌더링
- 테마 관련 UI는 반드시 클라이언트 컴포넌트(`"use client"`)에서만 사용

## shadcn/ui 컴포넌트 추가

프로젝트는 `components.json`으로 shadcn/ui 설정이 되어 있습니다. CLI를 통해 컴포넌트 추가:

```bash
npx shadcn-ui@latest add <component-name>
```

예: `npx shadcn-ui@latest add dialog`

**주의사항**:
- 컴포넌트는 `src/components/ui/` 디렉토리에 추가됨
- 각 컴포넌트는 독립적인 파일로 생성됨
- 필요한 의존성은 자동으로 `package.json`에 추가됨

## TypeScript 설정

- **Target**: ES2017
- **Module Resolution**: bundler (Next.js 권장)
- **JSX**: react-jsx
- **Strict Mode**: 활성화됨
- **Path Aliases**: `@/*` → `./src/*`

## 라우팅

Next.js App Router 사용:

```
/                    → src/app/page.tsx (홈페이지, 랜딩 페이지)
/examples            → src/app/examples/page.tsx (컴포넌트 예제 목록)
/examples/forms      → src/app/examples/forms/page.tsx (폼 예제)
/examples/layout     → src/app/examples/layout/page.tsx (레이아웃 예제)
/examples/menus      → src/app/examples/menus/page.tsx (메뉴 예제)
/examples/hooks      → src/app/examples/hooks/page.tsx (훅 예제)
/examples/theme      → src/app/examples/theme/page.tsx (테마 예제)
/examples/components → src/app/examples/components/page.tsx (컴포넌트 예제)
/docs                → src/app/docs/page.tsx (문서)
/login               → src/app/login/page.tsx (로그인 페이지)
```

새 페이지 추가: `src/app/[page-name]/page.tsx` 생성

## 스타일링

- **Tailwind CSS v4**: 모든 스타일링은 Tailwind 유틸리티 클래스 사용
- **CSS 변수**: 테마 커스터마이제이션을 위해 `globals.css`에서 CSS 변수 정의
- **클래스 병합**: `cn()` 함수 (`@/lib/utils.ts`)로 Tailwind 클래스 병합

```typescript
import { cn } from "@/lib/utils"

// 조건부 클래스 병합
const buttonClass = cn(
  "px-4 py-2",
  isActive && "bg-blue-500",
  className // prop으로 받은 추가 클래스
)
```

## 주의사항

### 1. 서버/클라이언트 컴포넌트 분리
- 기본은 서버 컴포넌트 (RSC)
- 클라이언트 기능 필요 시 `"use client"` 추가 (예: `useTheme()`, `useState()` 등)

### 2. Next.js 16 마이그레이션
- 이전 버전의 API가 변경되었을 수 있음
- 의존성 업데이트 시 breaking changes 확인 필수

### 3. Hydration 에러
- 테마/상태 초기화 시 서버/클라이언트 렌더링 차이로 인한 에러 발생 가능
- `useMounted()` hook이나 `suppressHydrationWarning` 사용

## 메타데이터 및 SEO

Root layout에서 메타데이터 설정:

```typescript
export const metadata: Metadata = {
  title: "Next.js Starter Kit",
  description: "Next.js v16 + TypeScript + TailwindCSS v4 + shadcn/ui",
}
```

개별 페이지의 메타데이터는 해당 `layout.tsx` 또는 `page.tsx`에서 설정.

## 기타 설정

- **Font**: Google Fonts에서 Inter 폰트 사용 (src/app/layout.tsx)
- **Icon Library**: lucide-react 사용 (shadcn/ui의 기본 아이콘)
- **Language**: HTML lang 속성이 `ko` (한국어)
- **Globals**: `src/app/globals.css`에서 Tailwind + 테마 변수 정의
- **components.json**: shadcn/ui 설정 파일 (컴포넌트 추가 시 기준)

## ESLint

Next.js 기본 ESLint 설정 사용:

```bash
# ESLint 실행
npm run lint

# 현재는 기본 설정만 적용되어 있으므로 필요시 커스텀 규칙 추가 가능
```

ESLint 설정은 Next.js에서 제공하는 기본값을 사용합니다. 추가 규칙이 필요하면 프로젝트 루트에 `.eslintrc.json` 또는 `eslint.config.js` 파일을 생성하여 커스터마이징할 수 있습니다.

## React 버전

- **React**: 19.2.4 (최신 버전 사용)
- **React DOM**: 19.2.4
- **Next.js**: 16.2.7

Next.js v16은 React 19를 기본으로 사용하며, 새로운 기능들(Server Components, Actions, 등)이 안정화되었습니다.
