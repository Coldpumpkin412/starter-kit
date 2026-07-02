"use client"

import Link from "next/link"
import { ChevronLeft, Sun, Moon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import { ExampleShowcase } from "@/components/examples/example-showcase"

const colors = [
  { name: "Background", var: "--background" },
  { name: "Foreground", var: "--foreground" },
  { name: "Card", var: "--card" },
  { name: "Primary", var: "--primary" },
  { name: "Secondary", var: "--secondary" },
  { name: "Muted", var: "--muted" },
  { name: "Accent", var: "--accent" },
  { name: "Destructive", var: "--destructive" },
  { name: "Border", var: "--border" },
]

export default function ThemeExamplePage() {
  const { theme } = useTheme()

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
        <h1 className="text-4xl font-bold">테마 & 색상</h1>
        <p className="text-lg text-muted-foreground">
          CSS 변수 기반의 색상 토큰 시스템과 다크모드 전환을 확인해보세요.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">테마</Badge>
          <Badge variant="secondary">설정</Badge>
        </div>
      </div>

      {/* Theme Toggle Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">테마 토글</h2>

        <ExampleShowcase
          title="ThemeToggle 컴포넌트"
          description="다크/라이트 테마를 전환하는 버튼입니다"
          code={`import { ThemeToggle } from "@/components/theme-toggle"

export function ThemeToggleExample() {
  return <ThemeToggle />
}`}
        >
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </ExampleShowcase>

        <ExampleShowcase
          title="현재 테마 표시"
          description="useTheme() 훅으로 현재 테마를 확인합니다"
          code={`"use client"

import { useTheme } from "next-themes"

export function CurrentTheme() {
  const { theme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      {theme === "dark" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <p>현재 테마: <strong>{theme || "시스템"}</strong></p>
    </div>
  )
}`}
        >
          <div className="flex items-center gap-2">
            {theme === "dark" ? (
              <Moon className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Sun className="h-5 w-5 text-muted-foreground" />
            )}
            <p>
              현재 테마: <strong className="capitalize">{theme || "시스템"}</strong>
            </p>
          </div>
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* Color Tokens Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">색상 토큰 팔레트</h2>
        <p className="text-muted-foreground">
          globals.css에서 정의된 CSS 변수 기반의 색상 토큰입니다. 다크/라이트 테마를 전환하면서 확인해보세요.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {colors.map((color) => (
            <Card key={color.var}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">{color.name}</CardTitle>
                <CardDescription className="font-mono text-xs">{color.var}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-20 w-full rounded-md border border-border" style={{
                  backgroundColor: `hsl(var(${color.var}))`
                }} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      {/* Dark Mode Comparison */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">다크/라이트 비교</h2>
        <p className="text-muted-foreground">
          같은 컴포넌트가 테마에 따라 어떻게 변하는지 확인해보세요.
        </p>

        <ExampleShowcase
          title="테마에 따른 색상 변화"
          description="배경색, 텍스트색, 테두리 색상이 자동으로 변합니다"
          code={`<div className="space-y-4">
  <div className="rounded-lg border bg-card p-4 text-foreground">
    <p className="font-semibold">Card</p>
    <p className="text-sm text-muted-foreground">
      테마에 따라 배경과 텍스트 색상이 변합니다
    </p>
  </div>

  <div className="rounded-lg border-2 border-primary bg-primary/10 p-4 text-foreground">
    <p className="font-semibold text-primary">Primary</p>
    <p className="text-sm text-muted-foreground">
      강조 색상도 테마에 최적화됩니다
    </p>
  </div>

  <div className="rounded-lg border-2 border-destructive bg-destructive/10 p-4 text-destructive">
    <p className="font-semibold">Destructive</p>
    <p className="text-sm text-destructive/70">
      위험한 액션을 나타냅니다
    </p>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-4 text-foreground">
              <p className="font-semibold">Card</p>
              <p className="text-sm text-muted-foreground">
                테마에 따라 배경과 텍스트 색상이 변합니다
              </p>
            </div>

            <div className="rounded-lg border-2 border-primary bg-primary/10 p-4 text-foreground">
              <p className="font-semibold text-primary">Primary</p>
              <p className="text-sm text-muted-foreground">
                강조 색상도 테마에 최적화됩니다
              </p>
            </div>

            <div className="rounded-lg border-2 border-destructive bg-destructive/10 p-4 text-destructive">
              <p className="font-semibold">Destructive</p>
              <p className="text-sm text-destructive/70">
                위험한 액션을 나타냅니다
              </p>
            </div>
          </div>
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* CSS Variables Reference */}
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">CSS 변수 참고</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">globals.css에 정의된 변수</CardTitle>
            <CardDescription>
              모든 색상은 oklch() 함수로 정의되어 있으며, 다크모드에서 자동으로 값이 변합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
              <code>{`/* src/app/globals.css */

:root {
  --background: oklch(100% 0 0);
  --foreground: oklch(0% 0 0);
  --card: oklch(100% 0 0);
  --popover: oklch(100% 0 0);
  --primary: oklch(46% 0.3 275);
  --secondary: oklch(88% 0.1 244);
  --muted: oklch(96% 0.01 0);
  --accent: oklch(71% 0.2 328);
  --destructive: oklch(60% 0.2 25);
  --border: oklch(96% 0.01 0);
  --input: oklch(96% 0.01 0);
  --ring: oklch(46% 0.3 275);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(5% 0 0);
  --foreground: oklch(98% 0 0);
  --card: oklch(10% 0 0);
  /* ... 다크 모드 색상 */
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
