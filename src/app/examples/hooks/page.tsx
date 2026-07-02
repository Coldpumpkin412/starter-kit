"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useMounted } from "@/hooks/use-mounted"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { ExampleShowcase } from "@/components/examples/example-showcase"

function MountedExample() {
  const mounted = useMounted()
  const [count, setCount] = useState(0)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">useMounted 상태</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">마운트됨:</p>
          <p className="text-2xl font-bold">{mounted ? "✅ Yes" : "❌ No"}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-2">카운터 (SSR 안전):</p>
          <div className="flex items-center gap-2">
            <Button onClick={() => setCount((c) => c - 1)} variant="outline" size="sm">
              −
            </Button>
            <span className="w-8 text-center font-semibold">{count}</span>
            <Button onClick={() => setCount((c) => c + 1)} variant="outline" size="sm">
              +
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ThemeExample() {
  const { theme, setTheme } = useTheme()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">현재 테마</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">테마:</p>
          <p className="text-2xl font-bold capitalize">{theme || "시스템"}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            size="sm"
            onClick={() => setTheme("light")}
          >
            라이트
          </Button>
          <Button
            variant={theme === "dark" ? "default" : "outline"}
            size="sm"
            onClick={() => setTheme("dark")}
          >
            다크
          </Button>
          <Button
            variant={theme === "system" ? "default" : "outline"}
            size="sm"
            onClick={() => setTheme("system")}
          >
            시스템
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function HooksExamplePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Back Link */}
      <Link
        href="/examples"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        예제 목록
      </Link>

      {/* Header */}
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">훅 & 유틸리티</h1>
        <p className="text-lg text-muted-foreground">
          useMounted, useTheme, cn() 등 유용한 훅과 유틸리티 함수의 사용법을 확인해보세요.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">훅</Badge>
          <Badge variant="secondary">유틸리티</Badge>
        </div>
      </div>

      {/* useMounted Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">useMounted 훅</h2>
        <p className="text-muted-foreground">
          SSR 환경에서 hydration 불일치를 방지하기 위해 클라이언트 마운트 여부를 확인합니다.
        </p>

        <ExampleShowcase
          title="Hydration 안전한 카운터"
          description="useMounted를 사용하여 서버/클라이언트 불일치를 방지합니다"
          code={`"use client"

import { useState } from "react"
import { useMounted } from "@/hooks/use-mounted"
import { Button } from "@/components/ui/button"

export function SafeCounter() {
  const mounted = useMounted()
  const [count, setCount] = useState(0)

  // 마운트되기 전에는 렌더링하지 않음
  if (!mounted) return <div>로딩 중...</div>

  return (
    <div>
      <p>카운트: {count}</p>
      <Button onClick={() => setCount(c => c + 1)}>
        +1
      </Button>
    </div>
  )
}`}
        >
          <MountedExample />
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* useTheme Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">useTheme 훅</h2>
        <p className="text-muted-foreground">
          next-themes에서 제공하는 훅으로 현재 테마를 확인하고 변경합니다.
        </p>

        <ExampleShowcase
          title="테마 전환 컨트롤"
          description="현재 테마를 확인하고 라이트/다크/시스템 테마로 전환합니다"
          code={`"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeControl() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <p>현재 테마: {theme}</p>
      <div className="flex gap-2">
        <Button onClick={() => setTheme("light")}>
          라이트
        </Button>
        <Button onClick={() => setTheme("dark")}>
          다크
        </Button>
        <Button onClick={() => setTheme("system")}>
          시스템
        </Button>
      </div>
    </div>
  )
}`}
        >
          <ThemeExample />
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* cn() Utility Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">cn() 유틸리티</h2>
        <p className="text-muted-foreground">
          clsx와 tailwind-merge를 조합하여 Tailwind 클래스 충돌을 안전하게 병합합니다.
        </p>

        <ExampleShowcase
          title="조건부 클래스 병합"
          description="cn() 함수로 Tailwind 클래스를 안전하게 병합합니다"
          code={`import { cn } from "@/lib/utils"

export function ConditionalButton() {
  const isActive = true

  const buttonClass = cn(
    // 기본 클래스
    "px-4 py-2 rounded-md font-medium",
    // 조건부 클래스
    isActive && "bg-blue-500 text-white",
    !isActive && "bg-gray-200 text-gray-700"
  )

  return <button className={buttonClass}>버튼</button>
}`}
        >
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Active 상태:</p>
              <button
                className={cn(
                  "px-4 py-2 rounded-md font-medium transition-colors",
                  true && "bg-primary text-primary-foreground",
                )}
              >
                활성화
              </button>
            </div>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Inactive 상태:</p>
              <button
                className={cn(
                  "px-4 py-2 rounded-md font-medium transition-colors",
                  false && "bg-primary text-primary-foreground",
                  !false && "bg-muted text-muted-foreground",
                )}
              >
                비활성화
              </button>
            </div>
          </div>
        </ExampleShowcase>

        <ExampleShowcase
          title="클래스 충돌 해결"
          description="Tailwind 클래스 충돌 시 마지막 정의가 우선됩니다"
          code={`import { cn } from "@/lib/utils"

// Tailwind 클래스 충돌 — px-2 (8px) vs px-4 (16px)
const className = cn(
  "px-2 py-2",    // 기본값
  "px-4"          // 덮어씀: px-4가 최종 적용됨
)

// Result: "py-2 px-4"`}
        >
          <div className="space-y-4">
            <div className="text-sm">
              <p className="mb-2 text-muted-foreground">충돌 전 (px-2):</p>
              <div className={cn("py-2 px-2 bg-muted rounded-md")}>
                <p className="text-xs">padding-x: 8px</p>
              </div>
            </div>
            <div className="text-sm">
              <p className="mb-2 text-muted-foreground">충돌 해결 (px-4):</p>
              <div className={cn("py-2 px-2 px-4 bg-primary rounded-md text-primary-foreground")}>
                <p className="text-xs">padding-x: 16px (px-4 우선)</p>
              </div>
            </div>
          </div>
        </ExampleShowcase>
      </div>
    </div>
  )
}
