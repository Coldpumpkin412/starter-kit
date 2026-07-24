"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type DocSection = "getting-started" | "ui-components" | "hooks" | "configuration"

const docSections = {
  "getting-started": {
    title: "시작하기",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">설치 및 실행</h3>
          <p className="text-muted-foreground mb-4">
            이 스타터킷은 Node.js 18.17 이상이 필요합니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드된 앱 실행
npm start`}</code>
          </pre>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">프로젝트 구조</h3>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`src/
  ├── app/              # Next.js App Router
  │   ├── layout.tsx    # Root layout
  │   ├── page.tsx      # 홈페이지
  │   ├── examples/     # 예제 페이지
  │   ├── docs/         # 문서 페이지
  │   └── login/        # 로그인 페이지
  │
  ├── components/
  │   ├── ui/           # shadcn/ui 컴포넌트
  │   ├── layout/       # Header, Footer
  │   ├── landing/      # 랜딩 페이지 섹션
  │   └── examples/     # 예제 컴포넌트
  │
  ├── lib/
  │   ├── types.ts      # 타입 정의
  │   └── utils.ts      # 유틸리티 함수
  │
  └── hooks/
      └── use-mounted.ts # 하이드레이션 처리`}</code>
          </pre>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">경로 별칭 (Path Aliases)</h3>
          <p className="text-muted-foreground mb-4">
            절대 경로를 사용하여 import 문을 간단히 작성할 수 있습니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`// 절대 경로 사용 (권장)
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mounted"

// 상대 경로 사용 (권장하지 않음)
import { Button } from "../../../components/ui/button"`}</code>
          </pre>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">TypeScript 설정</h3>
          <p className="text-muted-foreground mb-2">
            tsconfig.json에서 다음이 설정되어 있습니다:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Strict Mode: 활성화 (타입 안전성 강화)</li>
            <li>Module Resolution: bundler (Next.js 권장)</li>
            <li>JSX: react-jsx (React 17+ 문법)</li>
            <li>Path Aliases: @/* → ./src/*</li>
          </ul>
        </div>
      </div>
    ),
  },
  "ui-components": {
    title: "UI 컴포넌트",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Button</h3>
          <p className="text-muted-foreground mb-4">
            다양한 스타일과 크기를 지원하는 버튼 컴포넌트입니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`import { Button } from "@/components/ui/button"

// Variants: default, secondary, destructive, outline, ghost, link
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Sizes: xs, sm, default, lg, icon
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// asChild로 다른 요소로 렌더링
<Button asChild>
  <Link href="/page">Link</Link>
</Button>`}</code>
          </pre>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">Card</h3>
          <p className="text-muted-foreground mb-4">
            콘텐츠를 담기 위한 카드 컴포넌트입니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>제목</CardTitle>
    <CardDescription>설명</CardDescription>
  </CardHeader>
  <CardContent>
    <p>콘텐츠</p>
  </CardContent>
  <CardFooter>
    <Button>액션</Button>
  </CardFooter>
</Card>`}</code>
          </pre>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">Badge</h3>
          <p className="text-muted-foreground mb-4">
            작은 태그나 라벨을 표시합니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}</code>
          </pre>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">Avatar</h3>
          <p className="text-muted-foreground mb-4">
            프로필 이미지를 표시합니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
} from "@/components/ui/avatar"

// 단일 아바타
<Avatar size="sm">
  <AvatarImage src="..." />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

// 아바타 그룹
<AvatarGroup>
  <Avatar>
    <AvatarImage src="..." />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</AvatarGroup>`}</code>
          </pre>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">Dropdown Menu</h3>
          <p className="text-muted-foreground mb-4">
            드롭다운 메뉴를 제공합니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost">메뉴</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>항목 1</DropdownMenuItem>
    <DropdownMenuItem>항목 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}</code>
          </pre>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">Separator</h3>
          <p className="text-muted-foreground mb-4">
            시각적 구분선을 제공합니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`import { Separator } from "@/components/ui/separator"

<div>
  <p>첫 번째 섹션</p>
  <Separator />
  <p>두 번째 섹션</p>
</div>`}</code>
          </pre>
        </div>
      </div>
    ),
  },
  hooks: {
    title: "훅 라이브러리",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">useMounted</h3>
          <p className="text-muted-foreground mb-4">
            SSR/CSR 렌더링 차이로 인한 하이드레이션 불일치를 방지합니다. 클라이언트에서만 렌더링되어야 하는 컴포넌트에 사용하세요.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`import { useMounted } from "@/hooks/use-mounted"

export function MyComponent() {
  const mounted = useMounted()

  // 하이드레이션 완료 후에만 렌더링
  if (!mounted) return null

  return <div>마운트됨</div>
}`}</code>
          </pre>
          <p className="text-muted-foreground mt-4">
            <strong>사용 예시:</strong> ThemeToggle 컴포넌트에서 서버/클라이언트 간 테마 값 차이를 방지할 때 사용됩니다.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">useTheme (next-themes)</h3>
          <p className="text-muted-foreground mb-4">
            테마 값을 읽고 변경합니다. 반드시 "use client" 컴포넌트에서 사용하세요.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`"use client"

import { useTheme } from "next-themes"

export function MyComponent() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <p>현재 테마: {theme}</p>
      <button onClick={() => setTheme("dark")}>
        다크모드
      </button>
    </div>
  )
}`}</code>
          </pre>
        </div>
      </div>
    ),
  },
  configuration: {
    title: "구성 및 설정",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">TailwindCSS v4</h3>
          <p className="text-muted-foreground mb-4">
            Tailwind v4는 설정이 간소화되었습니다. CSS 변수 기반의 색상 시스템을 사용합니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`/* src/app/globals.css */
@import "tailwindcss";

:root {
  --background: oklch(100% 0 0);
  --foreground: oklch(0% 0 0);
  --primary: oklch(50% 0.2 200);
  /* 더 많은 색상 변수... */
}

.dark {
  --background: oklch(0% 0 0);
  --foreground: oklch(100% 0 0);
  /* 다크 모드 색상 */
}`}</code>
          </pre>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">다크모드 설정 (next-themes)</h3>
          <p className="text-muted-foreground mb-4">
            클래스 기반 다크모드를 지원합니다. html 요소에 .dark 클래스가 추가되어 테마가 전환됩니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`/* src/app/layout.tsx */
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>`}</code>
          </pre>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
            <li><strong>attribute="class"</strong>: html에 .dark 클래스 추가</li>
            <li><strong>defaultTheme="system"</strong>: 시스템 설정을 기본값으로 사용</li>
            <li><strong>enableSystem</strong>: 시스템 테마 변경 감지</li>
          </ul>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">shadcn/ui 컴포넌트 추가</h3>
          <p className="text-muted-foreground mb-4">
            shadcn/ui CLI를 사용하여 새로운 컴포넌트를 추가할 수 있습니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`# Dialog 컴포넌트 추가 예
npx shadcn-ui@latest add dialog

# 또는 모든 컴포넌트 한 번에 추가
npx shadcn-ui@latest add --all`}</code>
          </pre>
          <p className="text-muted-foreground mt-4">
            <strong>components.json</strong>에서 스타일, 색상, 아이콘 라이브러리 등을 커스터마이징할 수 있습니다.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">타입 정의 (TypeScript)</h3>
          <p className="text-muted-foreground mb-4">
            프로젝트에서 사용하는 공통 타입들입니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`// src/lib/types.ts
export interface NavItem {
  label: string
  href: string
  disabled?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  url: string
}

export type Theme = "light" | "dark" | "system"`}</code>
          </pre>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">유틸리티 함수</h3>
          <p className="text-muted-foreground mb-4">
            <strong>cn()</strong> 함수는 Tailwind 클래스 충돌을 해결합니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`import { cn } from "@/lib/utils"

// 조건부 클래스 병합
const buttonClass = cn(
  "px-4 py-2",
  isActive && "bg-blue-500",
  className  // prop으로 받은 추가 클래스
)

// Tailwind 클래스 충돌 해결
cn("px-2 px-4")  // px-4가 최종 적용됨`}</code>
          </pre>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">ESLint</h3>
          <p className="text-muted-foreground mb-4">
            코드 품질을 검사합니다.
          </p>
          <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`# ESLint 실행
npm run lint

# ESLint 설정
# .eslintrc.json 또는 eslint.config.js에서 규칙 설정`}</code>
          </pre>
        </div>
      </div>
    ),
  },
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<DocSection>("getting-started")

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">문서</h1>
        <p className="text-lg text-muted-foreground">
          StarterKit의 사용법과 모든 기능에 대한 상세한 가이드입니다.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* 목차 */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle className="text-lg">목차</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {Object.entries(docSections).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key as DocSection)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors truncate ${
                    activeSection === key
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {value.title}
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* 본문 */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                {docSections[activeSection].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              {docSections[activeSection].content}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
