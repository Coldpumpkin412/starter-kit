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

# ESLint 실행
npm run lint
```

## 프로젝트 구조

```
src/
  app/              # Next.js App Router
    layout.tsx      # Root layout (테마, 헤더/푸터 포함)
    page.tsx        # 홈페이지
    dashboard/      # 대시보드 페이지
    login/          # 로그인 페이지
    globals.css     # 전역 스타일 (Tailwind + 테마 변수)

  components/
    ui/             # shadcn/ui 컴포넌트들 (Button, Card, etc.)
    layout/         # 레이아웃 컴포넌트 (Header, Footer)
    landing/        # 랜딩 페이지 섹션 (Hero, Features, CTA)
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
/                    → src/app/page.tsx (홈페이지)
/dashboard           → src/app/dashboard/page.tsx
/login               → src/app/login/page.tsx
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
